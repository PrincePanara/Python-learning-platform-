from pydantic import BaseModel
from typing import Optional, List, Dict, Any

class LessonBase(BaseModel):
    number: int
    title: str
    duration: str
    difficulty: str
    status: str = "draft"
    ai: bool = False
    module_id: str

class LessonCreate(LessonBase):
    pass

class LessonUpdate(BaseModel):
    number: Optional[int] = None
    title: Optional[str] = None
    duration: Optional[str] = None
    difficulty: Optional[str] = None
    status: Optional[str] = None
    ai: Optional[bool] = None
    module_id: Optional[str] = None

class Lesson(LessonBase):
    id: str

    class Config:
        from_attributes = True

class LessonContent(LessonBase):
    id: str
    courseTitle: str = ""
    chapterTitle: str = ""
    lessonNumber: int = 0
    totalLessons: int = 0
    courseProgress: int = 0
    xpReward: int = 0
    estimatedTime: str = ""
    readTime: str = ""
    
    topicOverview: Dict[str, Any] = {}
    objectives: List[Dict[str, Any]] = []
    conceptExplanation: Dict[str, Any] = {}
    flowDiagram: Optional[List[Dict[str, Any]]] = None
    keyTakeaways: List[str] = []
    syntax: Optional[Dict[str, Any]] = None
    codeExamples: List[Dict[str, Any]] = []
    realWorldUseCases: Optional[List[Dict[str, Any]]] = None
    features: Optional[List[Dict[str, Any]]] = None
    advantages: Optional[List[Dict[str, Any]]] = None
    commonMistakes: Optional[List[Dict[str, Any]]] = None
    bestPractices: Optional[Dict[str, Any]] = None
    comparisons: Optional[List[Dict[str, Any]]] = None
    interviewQuestions: Optional[List[Dict[str, Any]]] = None
    faqs: Optional[List[Dict[str, Any]]] = None
    assignment: Optional[Dict[str, Any]] = None
    practiceQuestions: Optional[List[Dict[str, Any]]] = None
    quizQuestions: Optional[List[Dict[str, Any]]] = None
    resourcesData: Optional[List[Dict[str, Any]]] = None
    initialCode: str = ""

    class Config:
        from_attributes = True
