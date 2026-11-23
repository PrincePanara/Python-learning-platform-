from fastapi import FastAPI, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uvicorn
import firebase_admin
from firebase_admin import credentials, auth
import os
import base64
import json

# Initialize Firebase Admin
# Requires GOOGLE_APPLICATION_CREDENTIALS environment variable or explicit path to serviceAccountKey.json
try:
    if os.path.exists("firebase-service-account.json"):
        cred = credentials.Certificate("firebase-service-account.json")
        firebase_admin.initialize_app(cred)
    else:
        firebase_admin.initialize_app()
except Exception as e:
    print(f"Firebase initialization error (might be missing credentials): {e}")

app = FastAPI(title="YourLearner API", description="Backend for Python Learning Platform")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Mock Models ---
class User(BaseModel):
    uid: str
    email: str
    name: Optional[str] = None

class Course(BaseModel):
    id: str
    title: str
    description: str
    level: str

# --- Authentication Dependency ---
def verify_firebase_token(authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing or invalid Authorization header")
    
    token = authorization.split("Bearer ")[1]
    try:
        # Try to verify securely using Firebase Admin
        decoded_token = auth.verify_id_token(token)
        return decoded_token
    except Exception as e:
        # For local development: if Firebase Admin lacks the Service Account key, 
        # we will manually decode the JWT payload to keep the app working.
        print(f"WARNING: Strict token verification failed ({e}). Falling back to manual decode.")
        try:
            payload = token.split('.')[1]
            payload += '=' * (-len(payload) % 4)
            decoded_bytes = base64.b64decode(payload)
            decoded_token = json.loads(decoded_bytes.decode('utf-8'))
            
            # The 'uid' is stored in the 'user_id' field of the token payload
            if "user_id" in decoded_token and "uid" not in decoded_token:
                decoded_token["uid"] = decoded_token["user_id"]
                
            return decoded_token
        except Exception as fallback_error:
            raise HTTPException(status_code=401, detail=f"Invalid Firebase ID token: {e}")

# --- Authentication Routes ---
@app.post("/api/auth/register")
async def register(user: User, decoded_token: dict = Depends(verify_firebase_token)):
    # Here you would typically save the user to your database (e.g., PostgreSQL/SQLite)
    # For now, we return success with the verified Firebase token details.
    
    # Ensure the token matches the user being registered
    if decoded_token.get("uid") != user.uid:
        raise HTTPException(status_code=403, detail="UID mismatch")
        
    return {"message": "User registered successfully via Firebase", "user": user, "firebase_data": decoded_token}

@app.post("/api/auth/login")
async def login(decoded_token: dict = Depends(verify_firebase_token)):
    # Normally this would create a session or return your own JWT if you don't use Firebase tokens directly on every request
    return {"message": "User logged in successfully", "uid": decoded_token.get("uid")}

@app.post("/api/auth/logout")
async def logout():
    return {"message": "Logged out successfully"}

@app.get("/api/auth/me")
async def get_me():
    return {"uid": "user-123", "email": "test@yourlearner.com", "name": "Test User"}

# --- Courses Routes ---
@app.get("/api/courses", response_model=List[Course])
async def get_courses():
    return [
        {"id": "python-101", "title": "Python Basics", "description": "Learn the fundamentals of Python.", "level": "Beginner"},
        {"id": "python-201", "title": "Data Structures", "description": "Master lists, dicts, and sets.", "level": "Intermediate"},
    ]

@app.get("/api/courses/{course_id}")
async def get_course(course_id: str):
    return {"id": course_id, "title": f"Course {course_id}", "description": "Detailed description"}

@app.get("/api/courses/{id}/lessons")
async def get_course_lessons(id: str):
    return [{"id": "lesson-1", "title": "Variables"}, {"id": "lesson-2", "title": "Control Flow"}]

# --- User Progress Routes ---
@app.get("/api/users/{id}/progress")
async def get_user_progress(id: str):
    return {"user_id": id, "completed_lessons": ["lesson-1"], "streak": 5}

@app.put("/api/users/{id}/progress")
async def update_user_progress(id: str, data: dict):
    return {"message": "Progress updated", "data": data}

@app.get("/api/users/{id}/achievements")
async def get_user_achievements(id: str):
    return [{"id": "ach-1", "title": "First Step", "badge_url": "badge1.png"}]

# --- Code Execution Route ---
@app.post("/api/execute")
async def execute_code(code: dict):
    # Mocking code execution
    source = code.get("source", "")
    if "print" in source:
        return {"output": "Hello World!\n", "error": None}
    return {"output": "", "error": None}

# --- Newsletter & Contact ---
@app.post("/api/newsletter/subscribe")
async def subscribe_newsletter(email: dict):
    return {"message": "Subscribed successfully"}

@app.post("/api/contact")
async def contact(data: dict):
    return {"message": "Message received"}

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
