from pydantic import BaseModel
from typing import List, Dict, Any, Optional

class Stat(BaseModel):
    id: str
    label: str
    value: str
    delta: float
    trend: str
    icon: Optional[str] = None
    series: Optional[List[int]] = None
    status: Optional[str] = None

class CompactStat(BaseModel):
    id: str
    label: str
    value: str
    delta: float
    trend: str

class StudentGrowth(BaseModel):
    month: str
    students: int
    active: int

class DashboardData(BaseModel):
    heroStats: List[Stat]
    compactStats: List[CompactStat]
    studentGrowth: List[StudentGrowth]
    learningHours: List[Dict[str, Any]]
    quizPerformance: List[Dict[str, Any]]
    deviceUsage: List[Dict[str, Any]]
    popularCourses: List[Dict[str, Any]]
    completionFunnel: List[Dict[str, Any]]
    countryDistribution: List[Dict[str, Any]]
    revenueSeries: List[Dict[str, Any]]
    heatmap: List[List[int]]
    heatmapDays: List[str]
