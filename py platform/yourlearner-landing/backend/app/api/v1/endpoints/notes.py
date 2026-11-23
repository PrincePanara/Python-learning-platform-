from fastapi import APIRouter, HTTPException
from typing import List
from pydantic import BaseModel
from app.core.firebase import db

router = APIRouter()
NOTES_COLLECTION = "notes"

class NoteBase(BaseModel):
    problem_id: str
    user_id: str
    content: str

class Note(NoteBase):
    id: str

    class Config:
        from_attributes = True

@router.get("/{problem_id}/{user_id}", response_model=Note)
async def get_note(problem_id: str, user_id: str):
    """
    Retrieve note for a specific problem and user.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    notes_ref = db.collection(NOTES_COLLECTION).where("problem_id", "==", problem_id).where("user_id", "==", user_id)
    docs = list(notes_ref.stream())
    
    if docs:
        doc = docs[0]
        sub_data = doc.to_dict()
        sub_data["id"] = doc.id
        return sub_data
    
    # Return empty note if none exists
    return {"id": "", "problem_id": problem_id, "user_id": user_id, "content": ""}

@router.post("/", response_model=Note)
async def save_note(note: NoteBase):
    """
    Save or update a note.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    notes_ref = db.collection(NOTES_COLLECTION).where("problem_id", "==", note.problem_id).where("user_id", "==", note.user_id)
    docs = list(notes_ref.stream())
    
    if docs:
        doc = docs[0]
        doc_ref = doc.reference
        doc_ref.update({"content": note.content})
        return {"id": doc.id, **note.model_dump()}
    else:
        doc_ref = db.collection(NOTES_COLLECTION).document()
        note_data = note.model_dump()
        doc_ref.set(note_data)
        return {"id": doc_ref.id, **note_data}
