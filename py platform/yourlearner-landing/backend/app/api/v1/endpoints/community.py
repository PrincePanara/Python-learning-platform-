from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.api.v1.schemas.community import Discussion, DiscussionCreate, DiscussionUpdate
from app.core.firebase import db
from datetime import datetime

router = APIRouter()
DISCUSSIONS_COLLECTION = "discussions"

@router.get("/", response_model=List[Discussion])
async def get_discussions(category: str = None):
    """
    Retrieve all discussions, optionally filtered by category.
    """
    discussions_ref = db.collection(DISCUSSIONS_COLLECTION)
    
    if category and category != "All Discussions":
        discussions_ref = discussions_ref.where("category", "==", category)
        
    docs = discussions_ref.stream()
    discussions = []
    for doc in docs:
        data = doc.to_dict()
        data["id"] = doc.id
        discussions.append(data)
    return discussions

@router.get("/{discussion_id}", response_model=Discussion)
async def get_discussion(discussion_id: str):
    """
    Retrieve a specific discussion post.
    """
    doc_ref = db.collection(DISCUSSIONS_COLLECTION).document(discussion_id)
    doc = doc_ref.get()
    if not doc.exists:
        raise HTTPException(status_code=404, detail="Discussion not found")
    
    data = doc.to_dict()
    data["id"] = doc.id
    return data

@router.post("/", response_model=Discussion)
async def create_discussion(discussion: DiscussionCreate):
    """
    Create a new discussion post.
    """
    discussion_data = discussion.model_dump()
    discussion_data["time"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    discussion_data["upvotes"] = 0
    discussion_data["replies"] = 0
    discussion_data["isPinned"] = False
    discussion_data["comments"] = []
    
    doc_ref = db.collection(DISCUSSIONS_COLLECTION).document()
    doc_ref.set(discussion_data)
    
    discussion_data["id"] = doc_ref.id
    return discussion_data

@router.put("/{discussion_id}", response_model=Discussion)
async def update_discussion(discussion_id: str, discussion_update: DiscussionUpdate):
    """
    Update a discussion post (Admin or Author endpoint).
    """
    doc_ref = db.collection(DISCUSSIONS_COLLECTION).document(discussion_id)
    doc = doc_ref.get()
    
    if not doc.exists:
        raise HTTPException(status_code=404, detail="Discussion not found")
        
    update_data = discussion_update.model_dump(exclude_unset=True)
    doc_ref.update(update_data)
    
    updated_doc = doc_ref.get().to_dict()
    updated_doc["id"] = doc_ref.id
    return updated_doc

@router.delete("/{discussion_id}")
async def delete_discussion(discussion_id: str):
    """
    Delete a discussion post (Admin endpoint).
    """
    doc_ref = db.collection(DISCUSSIONS_COLLECTION).document(discussion_id)
    if not doc_ref.get().exists:
        raise HTTPException(status_code=404, detail="Discussion not found")
        
    doc_ref.delete()
    return {"message": "Discussion deleted successfully"}
