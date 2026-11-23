from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.api.v1.schemas.modules import Module, ModuleCreate, ModuleUpdate
from app.core.firebase import db

router = APIRouter()
MODULES_COLLECTION = "modules"

@router.get("/", response_model=List[Module])
async def get_modules(course: str = None):
    """
    Retrieve all modules, optionally filtered by course name.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    
    modules_ref = db.collection(MODULES_COLLECTION)
    if course:
        modules_ref = modules_ref.where("course", "==", course)
        
    docs = modules_ref.stream()
    modules = []
    for doc in docs:
        module_data = doc.to_dict()
        module_data["id"] = doc.id
        modules.append(module_data)
    return modules

@router.get("/{module_id}", response_model=Module)
async def get_module(module_id: str):
    """
    Retrieve a specific module by ID.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    doc_ref = db.collection(MODULES_COLLECTION).document(module_id)
    doc = doc_ref.get()
    if not doc.exists:
        raise HTTPException(status_code=404, detail="Module not found")
    
    module_data = doc.to_dict()
    module_data["id"] = doc.id
    return module_data

@router.post("/", response_model=Module)
async def create_module(module: ModuleCreate):
    """
    Create a new module (Admin endpoint).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    module_data = module.model_dump()
    
    # Add to Firestore
    doc_ref = db.collection(MODULES_COLLECTION).document()
    doc_ref.set(module_data)
    
    module_data["id"] = doc_ref.id
    return module_data

@router.put("/{module_id}", response_model=Module)
async def update_module(module_id: str, module_update: ModuleUpdate):
    """
    Update an existing module (Admin endpoint).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    doc_ref = db.collection(MODULES_COLLECTION).document(module_id)
    doc = doc_ref.get()
    
    if not doc.exists:
        raise HTTPException(status_code=404, detail="Module not found")
        
    update_data = module_update.model_dump(exclude_unset=True)
    doc_ref.update(update_data)
    
    updated_doc = doc_ref.get().to_dict()
    updated_doc["id"] = doc_ref.id
    return updated_doc

@router.delete("/{module_id}")
async def delete_module(module_id: str):
    """
    Delete a module (Admin endpoint).
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    doc_ref = db.collection(MODULES_COLLECTION).document(module_id)
    if not doc_ref.get().exists:
        raise HTTPException(status_code=404, detail="Module not found")
        
    doc_ref.delete()
    return {"message": "Module deleted successfully"}
