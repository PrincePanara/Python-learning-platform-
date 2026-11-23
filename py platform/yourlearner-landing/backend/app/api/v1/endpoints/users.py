from fastapi import APIRouter, HTTPException, Depends
from typing import List
from datetime import datetime, timedelta
from app.api.v1.schemas.users import UserProfile, UserUpdate, UserRoleUpdate, ActivityPayload
from app.core.firebase import db

router = APIRouter()
USERS_COLLECTION = "users"

@router.get("/", response_model=List[UserProfile])
async def get_all_users():
    """
    Retrieve all users (Admin endpoint).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    users_ref = db.collection(USERS_COLLECTION)
    docs = users_ref.stream()
    users = []
    for doc in docs:
        user_data = doc.to_dict()
        user_data["uid"] = doc.id
        users.append(user_data)
    return users

@router.get("/{uid}", response_model=UserProfile)
async def get_user_profile(uid: str):
    """
    Retrieve a specific user's profile.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    doc_ref = db.collection(USERS_COLLECTION).document(uid)
    doc = doc_ref.get()
    if not doc.exists:
        raise HTTPException(status_code=404, detail="User not found")
    
    user_data = doc.to_dict()
    user_data["uid"] = uid
    return user_data

@router.put("/{uid}", response_model=UserProfile)
async def update_user_profile(uid: str, user_update: UserUpdate):
    """
    Update a user's profile (name, bio, etc).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    doc_ref = db.collection(USERS_COLLECTION).document(uid)
    doc = doc_ref.get()
    
    if not doc.exists:
        raise HTTPException(status_code=404, detail="User not found")
        
    update_data = user_update.model_dump(exclude_unset=True)
    doc_ref.update(update_data)
    
    user_data = doc_ref.get().to_dict()
    user_data["uid"] = uid
    return user_data

@router.put("/{uid}/role", response_model=UserProfile)
async def update_user_role(uid: str, role_update: UserRoleUpdate):
    """
    Update a user's role (Admin endpoint).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    doc_ref = db.collection(USERS_COLLECTION).document(uid)
    if not doc_ref.get().exists:
        raise HTTPException(status_code=404, detail="User not found")
        
    doc_ref.update({"role": role_update.role})
    
    user_data = doc_ref.get().to_dict()
    user_data["uid"] = uid
    return user_data

@router.delete("/{uid}")
async def delete_user(uid: str):
    """
    Delete a user (Admin endpoint).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    doc_ref = db.collection(USERS_COLLECTION).document(uid)
    if not doc_ref.get().exists:
        raise HTTPException(status_code=404, detail="User not found")
        
    doc_ref.delete()
    return {"message": "User deleted successfully"}

@router.post("/{uid}/enroll/{course_id}")
async def enroll_in_course(uid: str, course_id: str):
    """
    Enroll a user in a course.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    
    doc_ref = db.collection(USERS_COLLECTION).document(uid)
    doc = doc_ref.get()
    if not doc.exists:
        raise HTTPException(status_code=404, detail="User not found")
        
    user_data = doc.to_dict()
    enrolled_courses = user_data.get("enrolledCourses", [])
    
    if course_id not in enrolled_courses:
        enrolled_courses.append(course_id)
        doc_ref.update({"enrolledCourses": enrolled_courses})
        
    return {"message": "Enrolled successfully", "enrolledCourses": enrolled_courses}

@router.post("/{uid}/activity", response_model=UserProfile)
async def log_activity(uid: str, payload: ActivityPayload):
    """
    Log an activity (e.g. lesson_completed, problem_solved) and update stats dynamically.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    
    doc_ref = db.collection(USERS_COLLECTION).document(uid)
    doc = doc_ref.get()
    if not doc.exists:
        raise HTTPException(status_code=404, detail="User not found")
        
    user_data = doc.to_dict()
    
    # 1. Add XP & Update Stat Items
    stats = user_data.get("stats", {})
    stat_items = user_data.get("statItems", [])
    
    current_xp = int(str(stats.get("totalXp", "0")).replace(",", ""))
    added_xp = 10 if payload.type == "lesson_completed" else 20
    stats["totalXp"] = f"{current_xp + added_xp:,}"
    
    for item in stat_items:
        if payload.type == "problem_solved" and item.get("id") == "problems":
            val = int(item.get("value", 0))
            item["value"] = str(val + 1)
        elif payload.type == "lesson_completed" and item.get("id") == "courses":
            val = int(item.get("value", 0))
            item["value"] = str(val + 1)
            
    # Calculate Streak
    today_date = datetime.now().date()
    last_activity_str = user_data.get("lastActivityDate", "")
    current_streak = int(stats.get("streak", "0"))
    
    if last_activity_str:
        try:
            last_date = datetime.strptime(last_activity_str, "%Y-%m-%d").date()
            delta = (today_date - last_date).days
            if delta == 1:
                current_streak += 1
            elif delta > 1:
                current_streak = 1
            # If delta == 0, streak remains same
        except ValueError:
            current_streak = 1
    else:
        current_streak = 1
        
    stats["streak"] = str(current_streak)
    user_data["lastActivityDate"] = today_date.strftime("%Y-%m-%d")
            
    user_data["stats"] = stats
    user_data["statItems"] = stat_items

    # 2. Add to Recent Activity
    recent_activity = user_data.get("recentActivity", [])
    now_str = datetime.now().strftime("%I:%M %p")
    new_activity = {
        "title": payload.title,
        "time": f"Today, {now_str}",
        "type": "course" if payload.type == "lesson_completed" else "problem"
    }
    recent_activity.insert(0, new_activity)
    user_data["recentActivity"] = recent_activity[:10]

    # 3. Update Activity Calendar
    activity_calendar = user_data.get("activityCalendar", [])
    today = datetime.now().strftime("%Y-%m-%d")
    
    found_today = False
    for day in activity_calendar:
        if day.get("date") == today:
            day["count"] += 1
            found_today = True
            break
            
    if not found_today:
        activity_calendar.append({"date": today, "count": 1})
        
    user_data["activityCalendar"] = activity_calendar

    # 4. Weekly Analytics
    weekly_analytics = user_data.get("weeklyAnalytics", [])
    day_name = datetime.now().strftime("%a")
    for day_stat in weekly_analytics:
        if day_stat.get("name") == day_name:
            day_stat["xp"] += added_xp
            if payload.type == "problem_solved":
                day_stat["problems"] += 1
            if payload.type == "lesson_completed":
                day_stat["study"] += 0.5
            break
    user_data["weeklyAnalytics"] = weekly_analytics
    
    # Save back to db
    doc_ref.update({
        "stats": stats,
        "statItems": stat_items,
        "recentActivity": user_data["recentActivity"],
        "activityCalendar": activity_calendar,
        "weeklyAnalytics": weekly_analytics,
        "lastActivityDate": user_data["lastActivityDate"]
    })
    
    updated_data = doc_ref.get().to_dict()
    updated_data["uid"] = uid
    return updated_data
