from fastapi import APIRouter, HTTPException
from typing import List
from app.api.v1.schemas.discussions import ProblemComment, ProblemCommentCreate
from app.core.firebase import db

router = APIRouter()
PROBLEM_DISCUSSIONS_COLLECTION = "problem_discussions"

@router.get("/{problem_id}", response_model=List[ProblemComment])
async def get_problem_discussions(problem_id: str):
    """
    Retrieve discussions for a specific problem.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    discussions_ref = db.collection(PROBLEM_DISCUSSIONS_COLLECTION).where("problem_id", "==", problem_id)
    docs = discussions_ref.stream()
    
    comments = []
    for doc in docs:
        comment_data = doc.to_dict()
        comment_data["id"] = doc.id
        comments.append(comment_data)
        
    return comments

@router.post("/", response_model=ProblemComment)
async def create_problem_discussion(comment: ProblemCommentCreate):
    """
    Create a new problem discussion comment.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    comment_data = comment.model_dump()
    doc_ref = db.collection(PROBLEM_DISCUSSIONS_COLLECTION).document()
    doc_ref.set(comment_data)
    
    comment_data["id"] = doc_ref.id
    return comment_data
