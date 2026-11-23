from fastapi import APIRouter, HTTPException
from typing import List
from app.api.v1.schemas.submissions import Submission, SubmissionCreate
from app.core.firebase import db

router = APIRouter()
SUBMISSIONS_COLLECTION = "submissions"

@router.get("/{problem_id}", response_model=List[Submission])
async def get_submissions(problem_id: str):
    """
    Retrieve submissions for a specific problem.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    submissions_ref = db.collection(SUBMISSIONS_COLLECTION).where("problem_id", "==", problem_id)
    docs = submissions_ref.stream()
    
    submissions = []
    for doc in docs:
        sub_data = doc.to_dict()
        sub_data["id"] = doc.id
        submissions.append(sub_data)
        
    return submissions

@router.post("/", response_model=Submission)
async def create_submission(submission: SubmissionCreate):
    """
    Create a new submission.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    sub_data = submission.model_dump()
    doc_ref = db.collection(SUBMISSIONS_COLLECTION).document()
    doc_ref.set(sub_data)
    
    sub_data["id"] = doc_ref.id
    return sub_data
