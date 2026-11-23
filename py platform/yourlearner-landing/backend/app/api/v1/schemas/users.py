from pydantic import BaseModel
from typing import List, Optional, Dict

class StatItem(BaseModel):
    id: str
    label: str
    value: str
    trend: str
    icon: Optional[str] = None
    colorClass: Optional[str] = None

class Certificate(BaseModel):
    id: str
    title: str
    date: str
    issuer: str
    imageUrl: Optional[str] = None

class Goal(BaseModel):
    id: str
    title: str
    description: str
    progress: int
    daysLeft: int

class DailyTarget(BaseModel):
    title: str
    completed: bool

class UserStats(BaseModel):
    totalXp: str
    streak: str
    rank: str

class ActivityLog(BaseModel):
    title: str
    time: str
    type: str

class LeaderboardEntry(BaseModel):
    name: str
    points: int
    avatar: Optional[str] = None
    isCurrentUser: Optional[bool] = False

class Achievement(BaseModel):
    title: str
    icon: str
    color: str
    date: str

class WeeklyAnalytics(BaseModel):
    name: str
    study: float
    xp: int
    problems: int

class ActivityCalendar(BaseModel):
    date: str
    count: int

class LearningProgress(BaseModel):
    name: str
    progress: int
    total: int

class UserProfile(BaseModel):
    uid: str
    name: str
    email: Optional[str] = None
    role: str = "user"
    avatar: Optional[str] = None
    titles: Optional[List[str]] = []
    joinedDate: Optional[str] = None
    location: Optional[str] = None
    bio: Optional[str] = None
    stats: Optional[UserStats] = None
    statItems: Optional[List[StatItem]] = []
    certificates: Optional[List[Certificate]] = []
    goals: Optional[List[Goal]] = []
    dailyTargets: Optional[List[DailyTarget]] = []
    enrolledCourses: Optional[List[str]] = []
    
    # Dashboard Data
    recentActivity: Optional[List[ActivityLog]] = []
    leaderboard: Optional[List[LeaderboardEntry]] = []
    achievements: Optional[List[Achievement]] = []
    weeklyAnalytics: Optional[List[WeeklyAnalytics]] = []
    activityCalendar: Optional[List[ActivityCalendar]] = []
    learningProgress: Optional[List[LearningProgress]] = []
    lastActivityDate: Optional[str] = ""

class UserUpdate(BaseModel):
    name: Optional[str] = None
    bio: Optional[str] = None
    avatar: Optional[str] = None
    location: Optional[str] = None

class UserRoleUpdate(BaseModel):
    role: str

class ActivityPayload(BaseModel):
    type: str
    itemId: str
    title: str
