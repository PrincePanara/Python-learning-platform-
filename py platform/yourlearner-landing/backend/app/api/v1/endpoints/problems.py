from fastapi import APIRouter, HTTPException
from typing import List
from app.api.v1.schemas.problems import ProblemListResponse, ProblemDetail, PracticeStats
from app.core.firebase import db

router = APIRouter()
PROBLEMS_COLLECTION = "problems"
PRACTICE_STATS_COLLECTION = "practice_stats"

@router.get("/", response_model=List[ProblemListResponse])
async def get_all_problems():
    """
    Retrieve all practice problems.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
    
    problems_ref = db.collection(PROBLEMS_COLLECTION)
    docs = problems_ref.stream()
    problems = []
    for doc in docs:
        problems.append(doc.to_dict())
    
    return problems


@router.post("/", response_model=ProblemDetail)
async def create_problem(problem: ProblemDetail):
    """
    Create a new practice problem.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    problem_data = problem.model_dump()
    # Use the problem ID as the document ID
    doc_ref = db.collection(PROBLEMS_COLLECTION).document(problem.id)
    doc_ref.set(problem_data)
    
    return problem_data

@router.get("/stats/{uid}", response_model=PracticeStats)
async def get_user_practice_stats(uid: str):
    """
    Retrieve practice stats for a specific user.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    doc_ref = db.collection(PRACTICE_STATS_COLLECTION).document(uid)
    doc = doc_ref.get()
    
    if not doc.exists:
        # Create default practice stats for new users
        default_stats = PracticeStats(
            solvedCount=0,
            globalRank=0,
            totalXp=0,
            dailyGoal={"current": 0, "target": 3},
            weeklyGoal={"current": 0, "target": 15},
            easySolved=0,
            easyTotal=0,
            mediumSolved=0,
            mediumTotal=0,
            hardSolved=0,
            hardTotal=0,
            xpThisWeek=0,
            topPercentile=100
        )
        stats_data = default_stats.model_dump()
        doc_ref.set(stats_data)
        return stats_data
        
    return doc.to_dict()

@router.post("/stats/{uid}", response_model=PracticeStats)
async def create_user_practice_stats(uid: str, stats: PracticeStats):
    """
    Create or update practice stats for a specific user.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    stats_data = stats.model_dump()
    doc_ref = db.collection(PRACTICE_STATS_COLLECTION).document(uid)
    doc_ref.set(stats_data)
    
    return stats_data

@router.get("/{problem_id}", response_model=ProblemDetail)
async def get_problem_detail(problem_id: str):
    """
    Retrieve details for a specific problem.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    doc_ref = db.collection(PROBLEMS_COLLECTION).document(problem_id)
    doc = doc_ref.get()
    
    if not doc.exists:
        raise HTTPException(status_code=404, detail="Problem not found")
        
    return doc.to_dict()
