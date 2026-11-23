from pydantic import BaseModel
from typing import Optional, List

class SubmissionBase(BaseModel):
    problem_id: str
    user_id: str
    status: str
    language: str
    runtime: str
    memory: str
    time: str
    code: str

class SubmissionCreate(SubmissionBase):
    pass

class Submission(SubmissionBase):
    id: str

    class Config:
        from_attributes = True
