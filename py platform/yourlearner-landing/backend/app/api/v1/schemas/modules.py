from pydantic import BaseModel
from typing import Optional, List, Dict, Any

class ModuleBase(BaseModel):
    name: str
    course: str
    number: int
    lessons: int = 0
    practice: int = 0
    quiz: int = 0
    notes: int = 0
    resources: int = 0
    students: int = 0
    completion: int = 0
    status: str = "draft"
    created: str
    updated: str
    thumb: str
    
    # Real data fields
    notes_content: str = ""
    practice_questions: List[Dict[str, Any]] = []
    quiz_questions: List[Dict[str, Any]] = []
    resources_data: List[Dict[str, Any]] = []
    lessons_data: List[Dict[str, Any]] = []
    code_examples: List[Dict[str, Any]] = []

class ModuleCreate(ModuleBase):
    pass

class ModuleUpdate(BaseModel):
    name: Optional[str] = None
    course: Optional[str] = None
    number: Optional[int] = None
    lessons: Optional[int] = None
    practice: Optional[int] = None
    quiz: Optional[int] = None
    notes: Optional[int] = None
    resources: Optional[int] = None
    students: Optional[int] = None
    completion: Optional[int] = None
    status: Optional[str] = None
    updated: Optional[str] = None
    thumb: Optional[str] = None
    notes_content: Optional[str] = None
    practice_questions: Optional[List[Dict[str, Any]]] = None
    quiz_questions: Optional[List[Dict[str, Any]]] = None
    resources_data: Optional[List[Dict[str, Any]]] = None
    lessons_data: Optional[List[Dict[str, Any]]] = None
    code_examples: Optional[List[Dict[str, Any]]] = None

class Module(ModuleBase):
    id: str

    class Config:
        from_attributes = True
