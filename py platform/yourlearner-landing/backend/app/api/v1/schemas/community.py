from pydantic import BaseModel
from typing import List, Optional, Any

class Author(BaseModel):
    name: str
    avatar: str
    role: Optional[str] = "User"

class Reply(BaseModel):
    id: str
    author: Author
    timeAgo: str
    text: str
    likes: int
    replies: Optional[List[Any]] = [] # For nested replies

class Comment(BaseModel):
    id: str
    author: Author
    timeAgo: str
    text: str
    likes: int
    isAcceptedAnswer: bool = False
    replies: Optional[List[Reply]] = []

class DiscussionBase(BaseModel):
    title: str
    content: str
    tag: str
    isSolved: bool = False
    author: Author
    timeAgo: str
    createdAt: int
    replies: int = 0
    views: int = 0
    likes: int = 0

class DiscussionCreate(DiscussionBase):
    pass

class DiscussionUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None
    tag: Optional[str] = None
    isSolved: Optional[bool] = None

class Discussion(DiscussionBase):
    id: str
    comments: Optional[List[Comment]] = []

    class Config:
        from_attributes = True
