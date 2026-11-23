from pydantic import BaseModel
from typing import List, Optional, Any

class CourseBase(BaseModel):
    name: str
    description: str
    instructor: str
    difficulty: str
    language: str
    price: float
    discount: int = 0
    status: str = "draft"
    duration: str
    modules: int = 0
    lessons: int = 0
    students: int = 0
    completion: int = 0
    rating: float = 0.0
    reviews: int = 0
    thumb: str

class CourseCreate(CourseBase):
    pass

class CourseUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None
    instructor: Optional[str] = None
    difficulty: Optional[str] = None
    language: Optional[str] = None
    price: Optional[float] = None
    discount: Optional[int] = None
    status: Optional[str] = None
    duration: Optional[str] = None
    modules: Optional[int] = None
    lessons: Optional[int] = None
    students: Optional[int] = None
    completion: Optional[int] = None
    rating: Optional[float] = None
    reviews: Optional[int] = None
    thumb: Optional[str] = None

class Course(CourseBase):
    id: str

    class Config:
        from_attributes = True

class LessonItem(BaseModel):
    id: str
    title: str
    durationStr: str
    isCompleted: bool = False
    isActive: Optional[bool] = False

class ModuleItem(BaseModel):
    id: str
    title: str
    lessons: List[LessonItem] = []
    notesCount: int = 0
    practiceCount: int = 0
    quizCount: int = 0
    resourcesCount: int = 0

class ReviewItem(BaseModel):
    id: str
    user: dict
    rating: int
    timeAgo: str
    comment: str

class CourseDetailsBase(BaseModel):
    title: str
    subtitle: str
    description: str
    videoThumbnail: str
    difficulty: str
    tags: List[str] = []
    rating: float = 0.0
    studentsCount: str
    lessonsCount: int = 0
    durationHours: int = 0
    durationMinutes: int = 0
    instructor: dict
    learningOutcomes: List[str] = []
    modules: List[ModuleItem] = []
    reviews: List[ReviewItem] = []
    progress: dict

class CourseDetails(CourseDetailsBase):
    id: str

    class Config:
        from_attributes = True
