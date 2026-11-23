from pydantic import BaseModel
from typing import Optional, List

class ProblemCommentBase(BaseModel):
    problem_id: str
    author: str
    avatar: str
    time: str
    text: str
    upvotes: int = 0

class ProblemCommentCreate(ProblemCommentBase):
    pass

class ProblemComment(ProblemCommentBase):
    id: str

    class Config:
        from_attributes = True
