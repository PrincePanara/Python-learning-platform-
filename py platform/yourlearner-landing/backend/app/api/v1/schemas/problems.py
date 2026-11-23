from pydantic import BaseModel
from typing import List, Optional

class ProblemBase(BaseModel):
    id: str
    number: int
    title: str
    difficulty: str
    acceptance: str
    tags: List[str]
    company: str
    time: str
    xp: int

class ProblemListResponse(ProblemBase):
    status: str = "Unsolved"

class ProblemDetail(ProblemBase):
    description: str
    starter_code: str
    test_cases: List[dict]

class PracticeStats(BaseModel):
    solvedCount: int
    globalRank: int
    totalXp: int
    dailyGoal: dict # { "current": 3, "target": 5 }
    weeklyGoal: dict
    easySolved: int
    easyTotal: int
    mediumSolved: int
    mediumTotal: int
    hardSolved: int
    hardTotal: int
    xpThisWeek: int
    topPercentile: int
