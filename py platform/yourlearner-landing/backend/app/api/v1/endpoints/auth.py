from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional
from app.core.firebase import db
from datetime import datetime

router = APIRouter()
USERS_COLLECTION = "users"

class LoginRequest(BaseModel):
    uid: str
    email: str
    displayName: Optional[str] = None
    photoURL: Optional[str] = None

@router.post("/login")
async def login(request: LoginRequest):
    """
    Handle user login/signup.
    Upserts user profile info from Firebase Auth into Firestore.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    
    doc_ref = db.collection(USERS_COLLECTION).document(request.uid)
    doc = doc_ref.get()

    if doc.exists:
        # Update existing user data in case name/photo changed
        update_data = {}
        if request.displayName:
            update_data["name"] = request.displayName
        if request.photoURL:
            update_data["avatar"] = request.photoURL
        
        if update_data:
            doc_ref.update(update_data)
        
        return {"message": "User updated", "uid": request.uid}
    else:
        # Create new user profile
        new_user = {
            "name": request.displayName or "New Student",
            "avatar": request.photoURL or "",
            "titles": ["Beginner"],
            "joinedDate": datetime.now().strftime("%b %Y"),
            "location": "Earth",
            "bio": "I am ready to learn Python!",
            "stats": {
                "totalXp": "0",
                "streak": "0",
                "rank": "Novice"
            },
            "statItems": [
                {"id": "courses", "label": "Courses Completed", "value": "0", "trend": "0 this week", "colorClass": "text-blue-500"},
                {"id": "hours", "label": "Learning Hours", "value": "0", "trend": "0h this week", "colorClass": "text-emerald-500"},
                {"id": "problems", "label": "Problems Solved", "value": "0", "trend": "0 this week", "colorClass": "text-purple-500"},
                {"id": "certificates", "label": "Certificates Earned", "value": "0", "trend": "0 this month", "colorClass": "text-amber-500"}
            ],
            "certificates": [],
            "goals": [],
            "dailyTargets": [
                {"title": "Solve 1 practice problem", "completed": False},
                {"title": "Read 1 lesson module", "completed": False}
            ],
            "recentActivity": [],
            "activityCalendar": [],
            "weeklyAnalytics": [
                {"name": "Mon", "study": 0, "xp": 0, "problems": 0},
                {"name": "Tue", "study": 0, "xp": 0, "problems": 0},
                {"name": "Wed", "study": 0, "xp": 0, "problems": 0},
                {"name": "Thu", "study": 0, "xp": 0, "problems": 0},
                {"name": "Fri", "study": 0, "xp": 0, "problems": 0},
                {"name": "Sat", "study": 0, "xp": 0, "problems": 0},
                {"name": "Sun", "study": 0, "xp": 0, "problems": 0}
            ],
            "learningProgress": [],
            "leaderboard": [],
            "achievements": [],
            "lastActivityDate": ""
        }
        doc_ref.set(new_user)
        return {"message": "User created", "uid": request.uid}
