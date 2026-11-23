from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.api.v1.schemas.lessons import Lesson, LessonCreate, LessonUpdate, LessonContent
from app.core.firebase import db

router = APIRouter()
LESSONS_COLLECTION = "lessons"

@router.get("/", response_model=List[Lesson])
async def get_lessons(module_id: str = None):
    """
    Retrieve all lessons, optionally filtered by module ID.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    lessons_ref = db.collection(LESSONS_COLLECTION)
    if module_id:
        lessons_ref = lessons_ref.where("module_id", "==", module_id)
        
    docs = lessons_ref.stream()
    lessons = []
    for doc in docs:
        lesson_data = doc.to_dict()
        lesson_data["id"] = doc.id
        lessons.append(lesson_data)
    return lessons

@router.get("/{lesson_id}", response_model=LessonContent)
async def get_lesson(lesson_id: str):
    """
    Retrieve a specific lesson by ID.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    doc_ref = db.collection(LESSONS_COLLECTION).document(lesson_id)
    doc = doc_ref.get()
    if not doc.exists:
        is_intro = lesson_id.endswith("-intro")
        target_module_id = lesson_id.replace("-intro", "") if is_intro else None
        
        modules_ref = db.collection("modules").stream()
        for m in modules_ref:
            m_data = m.to_dict()
            if target_module_id and m.id == target_module_id:
                return _build_fallback_lesson(lesson_id, m.id, m_data, "Introduction to " + m_data.get("name", "Module"))
            
            lessons_data = m_data.get("lessons_data", [])
            if isinstance(lessons_data, list):
                for l_data in lessons_data:
                    if isinstance(l_data, dict) and str(l_data.get("id")) == str(lesson_id):
                        return _build_fallback_lesson(lesson_id, m.id, m_data, l_data.get("title", "Lesson"))
            elif isinstance(lessons_data, dict):
                for k, l_data in lessons_data.items():
                    if isinstance(l_data, dict) and str(l_data.get("id")) == str(lesson_id):
                        return _build_fallback_lesson(lesson_id, m.id, m_data, l_data.get("title", "Lesson"))
                    
        raise HTTPException(status_code=404, detail="Lesson not found")
    
    lesson_data = doc.to_dict()
    lesson_data["id"] = doc.id
    return lesson_data

def _build_fallback_lesson(lesson_id, module_id, m_data, title):
    return {
        "id": lesson_id,
        "number": 1,
        "title": title,
        "duration": "15m",
        "difficulty": m_data.get("difficulty", "Beginner"),
        "status": "live",
        "ai": False,
        "module_id": module_id,
        "courseTitle": m_data.get("course", "Course"),
        "chapterTitle": m_data.get("name", "Module"),
        "lessonNumber": 1,
        "totalLessons": 1,
        "courseProgress": 0,
        "xpReward": 100,
        "estimatedTime": "15m",
        "readTime": "15m",
        "topicOverview": {
            "what": m_data.get("description", "Module description"),
            "why": "This is a fundamental concept in Python.",
            "where": "Used in many real-world Python applications."
        },
        "objectives": [
            {"id": "obj1", "text": "Understand the basic concepts"}
        ],
        "conceptExplanation": {
            "title": "Core Concepts",
            "description": m_data.get("notes_content", "No notes available."),
            "keyConcepts": []
        },
        "keyTakeaways": [
            "Review the practice questions to reinforce your knowledge."
        ],
        "codeExamples": m_data.get("code_examples", []),
        "practiceQuestions": m_data.get("practice_questions", []),
        "quizQuestions": m_data.get("quiz_questions", []),
        "resourcesData": m_data.get("resources_data", []),
    }

@router.post("/", response_model=Lesson)
async def create_lesson(lesson: LessonCreate):
    """
    Create a new lesson (Admin endpoint).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    lesson_data = lesson.model_dump()
    
    # Add to Firestore
    doc_ref = db.collection(LESSONS_COLLECTION).document()
    doc_ref.set(lesson_data)
    
    lesson_data["id"] = doc_ref.id
    return lesson_data

@router.put("/{lesson_id}", response_model=Lesson)
async def update_lesson(lesson_id: str, lesson_update: LessonUpdate):
    """
    Update an existing lesson (Admin endpoint).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    doc_ref = db.collection(LESSONS_COLLECTION).document(lesson_id)
    doc = doc_ref.get()
    
    if not doc.exists:
        raise HTTPException(status_code=404, detail="Lesson not found")
        
    update_data = lesson_update.model_dump(exclude_unset=True)
    doc_ref.update(update_data)
    
    updated_doc = doc_ref.get().to_dict()
    updated_doc["id"] = doc_ref.id
    return updated_doc

@router.delete("/{lesson_id}")
async def delete_lesson(lesson_id: str):
    """
    Delete a lesson (Admin endpoint).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    doc_ref = db.collection(LESSONS_COLLECTION).document(lesson_id)
    if not doc_ref.get().exists:
        raise HTTPException(status_code=404, detail="Lesson not found")
        
    doc_ref.delete()
    return {"message": "Lesson deleted successfully"}
