from datetime import datetime
from pydantic import BaseModel
from typing import List, Optional, Dict, Union



class Token(BaseModel):
    access_token: str
    token_type: str

class UserRequest(BaseModel):
    user_fname: str
    user_lname: str
    user_email: str
    user_hashed_password: str

class UserResponse(BaseModel):
    id: int
    user_fname: str
    user_lname: str
    user_email: str
    user_hashed_password: str


class BlogRequest(BaseModel):
    blog_title: str
    blog_category_id: int
    blog_author: Optional[int]
    blog_date: datetime

class BlogResponse(BaseModel):
    id: int
    blog_title: str
    blog_category_id: int
    blog_author: Optional[int]
    blog_date: datetime

class BlogResponse(BaseModel):
    id: int
    blog_title: str
    blog_author: List[str]

class BlogCategoryRequest(BaseModel):
    blog_category_name: str
    blog_category_description: str

class BlogCategoryResponse(BaseModel):
    id: int
    blog_category_name: str
    blog_category_description: str

