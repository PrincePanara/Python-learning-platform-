from fastapi import APIRouter, HTTPException
from app.api.v1.schemas.dashboard import DashboardData
from app.core.firebase import db

router = APIRouter()
DASHBOARD_COLLECTION = "admin"
DASHBOARD_DOC = "dashboard_analytics"

@router.get("/", response_model=DashboardData)
async def get_dashboard_analytics():
    """
    Retrieve all analytics data for the Admin Dashboard.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    # Count real documents from Firestore
    users_ref = db.collection("users").get()
    courses_ref = db.collection("courses").get()
    modules_ref = db.collection("modules").get()
    
    total_users = len(users_ref)
    total_courses = len(courses_ref)
    total_modules = len(modules_ref)
    
    # Calculate some dynamic values
    heroStats = [
        {
            "id": "1",
            "label": "Total Students",
            "value": str(total_users),
            "delta": 0.0,
            "trend": "up",
            "icon": "Users",
            "series": [0, total_users],
            "status": "normal"
        },
        {
            "id": "2",
            "label": "Active Courses",
            "value": str(total_courses),
            "delta": 0.0,
            "trend": "up",
            "icon": "BookOpen",
            "series": [0, total_courses],
            "status": "success"
        },
        {
            "id": "3",
            "label": "Total Modules",
            "value": str(total_modules),
            "delta": 0.0,
            "trend": "up",
            "icon": "Layout",
            "series": [0, total_modules],
            "status": "normal"
        },
        {
            "id": "4",
            "label": "Revenue",
            "value": "$0",
            "delta": 0.0,
            "trend": "up",
            "icon": "DollarSign",
            "series": [0],
            "status": "normal"
        }
    ]

    compactStats = [
        {
            "id": "c1",
            "label": "Avg. Completion",
            "value": "0%",
            "delta": 0.0,
            "trend": "up"
        },
        {
            "id": "c2",
            "label": "Active Sessions",
            "value": "0",
            "delta": 0.0,
            "trend": "down"
        }
    ]
    
    # Placeholder for timeseries data
    return {
        "heroStats": heroStats,
        "compactStats": compactStats,
        "studentGrowth": [{"month": "Jan", "students": 0, "active": 0}],
        "learningHours": [{"day": "Mon", "hours": 0}],
        "quizPerformance": [{"band": "0-20", "learners": 0}],
        "deviceUsage": [{"name": "Desktop", "value": 1}],
        "popularCourses": [{"name": "None", "learners": 0}],
        "completionFunnel": [{"stage": "Enrolled", "value": 1}, {"stage": "Completed", "value": 0}],
        "countryDistribution": [{"country": "None", "learners": 0, "share": 0}],
        "revenueSeries": [{"month": "Jan", "revenue": 0, "refunds": 0}],
        "heatmap": [[0]],
        "heatmapDays": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    }

@router.post("/seed", response_model=DashboardData)
async def seed_dashboard_analytics(data: DashboardData):
    """
    Seed the dashboard analytics.
    """
    if db is None:
        raise HTTPException(status_code=500, detail="Database connection not initialized")
        
    doc_ref = db.collection(DASHBOARD_COLLECTION).document(DASHBOARD_DOC)
    doc_ref.set(data.model_dump())
    
    return doc_ref.get().to_dict()
