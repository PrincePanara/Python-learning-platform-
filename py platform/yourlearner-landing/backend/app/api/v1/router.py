from fastapi import APIRouter
from app.api.v1.endpoints import courses, users, community, modules, lessons, problems, dashboard, auth, submissions, discussions, notes, upload
from app.api.v1.chat import router as chat_router

api_router = APIRouter()

api_router.include_router(courses.router, prefix="/courses", tags=["courses"])
api_router.include_router(modules.router, prefix="/modules", tags=["modules"])
api_router.include_router(lessons.router, prefix="/lessons", tags=["lessons"])
api_router.include_router(problems.router, prefix="/problems", tags=["problems"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(community.router, prefix="/community", tags=["community"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(submissions.router, prefix="/submissions", tags=["submissions"])
api_router.include_router(discussions.router, prefix="/discussions", tags=["discussions"])
api_router.include_router(notes.router, prefix="/notes", tags=["notes"])
api_router.include_router(upload.router, prefix="/upload", tags=["upload"])
api_router.include_router(chat_router, tags=["chat"])
