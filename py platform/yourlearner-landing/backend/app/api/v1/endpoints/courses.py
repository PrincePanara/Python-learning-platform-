from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.api.v1.schemas.courses import Course, CourseCreate, CourseUpdate, CourseDetails
from app.core.firebase import db

router = APIRouter()
COURSES_COLLECTION = "courses"

@router.get("/", response_model=List[Course])
async def get_courses():
    """
    Retrieve all courses.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    courses_ref = db.collection(COURSES_COLLECTION)
    docs = courses_ref.stream()
    courses = []
    for doc in docs:
        course_data = doc.to_dict()
        course_data["id"] = doc.id
        courses.append(course_data)
    return courses

@router.get("/{course_id}", response_model=CourseDetails)
async def get_course(course_id: str):
    """
    Retrieve a specific course by ID.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    doc_ref = db.collection(COURSES_COLLECTION).document(course_id)
    doc = doc_ref.get()
    if not doc.exists:
        raise HTTPException(status_code=404, detail="Course not found")
    
    course_data = doc.to_dict()
    course_data["id"] = doc.id
    
    # Map 'name' to 'title' if 'title' is missing
    if "title" not in course_data and "name" in course_data:
        course_data["title"] = course_data["name"]
        
    # Provide default values for CourseDetails fields if missing
    course_data.setdefault("subtitle", "Learn the fundamentals and advanced concepts.")
    
    # Map instructor if it's a string
    if "instructor" in course_data and isinstance(course_data["instructor"], str):
        course_data["instructor"] = {
            "name": course_data["instructor"],
            "role": "Expert Instructor",
            "company": "YourLearner",
            "rating": 4.8,
            "students": 1000,
            "avatar": "68"
        }
    elif "instructor" not in course_data:
        course_data["instructor"] = {
            "name": "Unknown Instructor",
            "role": "Instructor",
            "company": "YourLearner",
            "rating": 0.0,
            "students": 0,
            "avatar": "1"
        }
        
    course_data.setdefault("videoThumbnail", "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop")
    course_data.setdefault("studentsCount", str(course_data.get("students", "0")))
    course_data.setdefault("progress", {
        "percentage": 0,
        "lessonsDone": 0,
        "lessonsTotal": course_data.get("lessons", 0),
        "timeSpentStr": "0h 0m",
        "timeRemainingStr": course_data.get("duration", "0h"),
        "activeLessonTitle": "Introduction"
    })
    
    # Fix schema conflicts where the base course stores counts (int) instead of lists
    if "modules" in course_data and isinstance(course_data["modules"], int):
        course_data["modules"] = []
    if "reviews" in course_data and isinstance(course_data["reviews"], int):
        course_data["reviews"] = []
    
    # Fetch actual modules for this course
    course_name = course_data.get("title") or course_data.get("name")
    if course_name:
        modules_ref = db.collection("modules").where("course", "==", course_name).stream()
        fetched_modules = []
        for m in modules_ref:
            m_data = m.to_dict()
            import time
            lessons_list = m_data.get("lessons_data", [])
            if not lessons_list:
                lessons_list = [{
                    "id": m.id + "-intro",
                    "title": "Introduction to " + m_data.get("name", "Module"),
                    "durationStr": "15m",
                    "isCompleted": False,
                    "isActive": True
                }]
                
            fetched_modules.append({
                "id": m.id,
                "title": m_data.get("name", "Untitled Module"),
                "lessons": lessons_list,
                "notesCount": 1 if m_data.get("notes_content") else 0,
                "practiceCount": len(m_data.get("practice_questions", [])),
                "quizCount": len(m_data.get("quiz_questions", [])),
                "resourcesCount": len(m_data.get("resources_data", []))
            })
        if fetched_modules:
            course_data["modules"] = fetched_modules
            
    course_data.setdefault("modules", [])
    course_data.setdefault("reviews", [])
    
    return course_data

@router.post("/", response_model=Course)
async def create_course(course: CourseCreate):
    """
    Create a new course (Admin endpoint).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    course_data = course.model_dump()
    
    # Add to Firestore
    doc_ref = db.collection(COURSES_COLLECTION).document()
    doc_ref.set(course_data)
    
    course_data["id"] = doc_ref.id
    return course_data

@router.put("/{course_id}", response_model=Course)
async def update_course(course_id: str, course_update: CourseUpdate):
    """
    Update an existing course (Admin endpoint).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    doc_ref = db.collection(COURSES_COLLECTION).document(course_id)
    doc = doc_ref.get()
    
    if not doc.exists:
        raise HTTPException(status_code=404, detail="Course not found")
        
    update_data = course_update.model_dump(exclude_unset=True)
    doc_ref.update(update_data)
    
    # Return updated document
    updated_doc = doc_ref.get().to_dict()
    updated_doc["id"] = doc_ref.id
    return updated_doc

@router.delete("/{course_id}")
async def delete_course(course_id: str):
    """
    Delete a course (Admin endpoint).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    doc_ref = db.collection(COURSES_COLLECTION).document(course_id)
    if not doc_ref.get().exists:
        raise HTTPException(status_code=404, detail="Course not found")
        
    doc_ref.delete()
    return {"message": "Course deleted successfully"}

