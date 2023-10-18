from datetime import timedelta, datetime
from fastapi import APIRouter, Request, status, Depends, HTTPException, Form
from sqlalchemy.orm import Session, joinedload
from techapp import starter, models, schemas
from techapp import dependencies
from techapp.dependencies import get_db, get_user_from_session
from techapp.authourize import decode_token, create_access_token, ACCESS_TOKEN_EXPIRE_MINUTES
from fastapi.security import OAuth2PasswordRequestForm
from typing import Optional, List
from techapp.models import User, Blog, BlogCategory
from sqlalchemy import func

tech_starter = APIRouter()


#     --   G E T   R E Q U E S T S   --

@starter.get("/")
async def get_index():
    return {"message": "Welcome to Techie API"}


@starter.get("/users", response_model=List[schemas.UserResponse])
async def get_users(db: Session = Depends(get_db)):
    users = await db.query(User).all()

    if not users:
        raise HTTPException(status_code=404, detail="Users not available!")

    return users


@starter.get("/user/id", response_model=schemas.UserResponse)
async def get_user(ID: int, db: Session = Depends(get_db)):
    user = await db.query(User).filter(User.user_id == ID).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not available!")

    return user


@starter.get("/blogs", response_model=List[schemas.BlogResponse])
async def get_blogs(db: Session = Depends(get_db)):
    blogs = await db.query(Blog).options(joinedload(Blog.author_info)).all()
    if not blogs:
        raise HTTPException(status_code=404, detail="Blog posts not available!")

    result = []
    for blog_deets in blogs:
        user_data = await db.query(User).filter(User.user_id == blog_deets.blog_author_id).all()
        post_info = {
            "id": blog_deets.blog_id,
            "blog_title": blog_deets.blog_title, 
            "blog_author": [user.user_fname for user in user_data]
        }
        result.append(post_info)

    return result



@starter.get("/blog/id", response_model=schemas.BlogResponse)
async def get_blog(ID: int, db: Session = Depends(get_db)):
    blog_post = await db.query(Blog).filter(Blog.blog_id == ID).first()
    if not blog_post:
        raise HTTPException(status_code=404, detail="Blog post not available!")

    author_data = await db.query(User, BlogCategory).\
        join(Blog, User.user_id == Blog.blog_author_id).\
        join(BlogCategory, Blog.blog_category_id == BlogCategory.blog_category_id).\
        filter(User.user_id == blog_post.blog_author_id).all()

    blogpost = {
        "id": blog_post.blog_id,
        "blog_title": blog_post.blog_title,
        "blog_author": [{
            "user_fname": user.user_fname,
            "user_lname": user.user_lname,
            "blog_category_name": blog_category.blog_category_name
        } for user, blog_category in author_data],
    }

    return blogpost


@starter.get("/blogger-posts/{user_id}", response_model=List[schemas.BlogResponse])
async def get_blogger_posts(user_id: int, db: Session = Depends(get_db)):
    blogs = await db.query(Blog).filter(Blog.blog_author_id == user_id).all()

    if not blogs:
        raise HTTPException(status_code=404, detail=f"No posts found for user with ID {user_id}")

    result = []
    for blog_deets in blogs:
        user_data = await db.query(User).filter(User.user_id == blog_deets.blog_author_id).first()
        post_info = {
            "id": blog_deets.blog_id,
            "blog_title": blog_deets.blog_title,
            "blog_author": f"{user_data.user_fname} {user_data.user_lname}",
            "blog_category": blog_deets.blog_category,
        }
        result.append(post_info)

    return result


#     --   P R O T E C T E D   R O U T E S   --

@starter.get("/dashboard")
async def dashboard(user_id: int = Depends(get_user_from_session), db: Session = Depends(get_db)):
    if not userID:
        raise HTTPException(status_code=302, detail="Redirect to /login")

    user = db.query(models.User).filter(models.User.user_id == user_id).first()
    return {"message": f"Welcome to the dashboard, {user.fname}!"}




#     --   C R E A T E   R E Q U E S T S   --

@starter.post("/user", response_model=schemas.UserRequest)
async def create_user(user: schemas.UserRequest, db: Session = Depends(dependencies.get_db)):
    available_user = await db.query(models.User).filter(func.lower(models.User.user_email) == func.lower(Email)).first()
    if available_user:
        raise HTTPException(status_code=400, detail="This email is taken!")

    db_user = models.User(user_fname=FirstName, user_lname=LastName, user_email=Email, user_password=Password, user_hashed_password=hashed_password)
    if not all([FirstName, LastName, Email, Password, hashed_password]):
        raise HTTPException(status_code=400, detail="All fields are required!")

    else:
        try:
            db.commit()
            db.refresh(db_user)
            return db_user
        except Exception as e:
            db.rollback()
            raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}") 
        

@starter.post("/blog", response_model=schemas.BlogRequest)
async def create_blog(blog: schemas.BlogRequest, db: Session = Depends(dependencies.get_db)):
    available_article = await db.query(models.blog).filter(func.lower(models.blog.blog_title) == func.lower(Title)).first()
    if available_article:
        raise HTTPException(status_code=400, detail="This blog post has been published already!")

    db_blogger = models.Blog(blog_title=Title, blog_category=Category, blog_author=Author, blog_img=FeaturedImage)
    if Title and Category and Author and FeaturedImage:
        try:
            db.add(db_blogger)
            db.commit()
            db.refresh(db_blogger)
            return db_blogger
        except Exception as e:
            db.rollback()
            raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")

    else:
        raise HTTPException(status_code=400, detail="All fields are required!")


@starter.post("/blog-category", response_model=schemas.BlogCategoryRequest)
async def create_user(user: schemas.BlogCategoryRequest, db: Session = Depends(dependencies.get_db)):
    available_category = await db.query(models.BlogCategory).filter(func.lower(models.BlogCategory.blog_category_name) == func.lower(Name)).first()
    if available_user:
        raise HTTPException(status_code=400, detail="This email is taken!")

    db_category = models.User(blog_category_name=Name, blog_category_description=Description)
    if Name and Description:
        try:
            db.add(db_category)
            db.commit()
            db.refresh(db_category)
            return db_category
        except Exception as e:
            db.rollback()
            raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}") 

    else:
        raise HTTPException(status_code=400, detail="All fields are required!")


@tech_starter.post("/register", response_model=schemas.UserResponse)
async def register_user(
    fname: str = Form("fname"),
    lname: str = Form("lname"),
    email: str = Form("mail"),
    password: str = Form("pwd"),
    confirm_password: str = Form("cpwd"),
    db: Session = Depends(get_db)
):
    if password != confirm_password:
        raise HTTPException(status_code=400, detail="Passwords do not match")

    hashed_password = hash_password(password)
    existing_user = await db.query(models.User).filter(models.User.email == email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email is already taken")

    if not all([fname, lname, email, password, confirm_password]):
        raise HTTPException(status_code=400, detail="All fields are required")

    new_user = models.User(
        fname=fname,
        lname=lname,
        email=email,
        hashed_password=hashed_password
    )
    db.add(new_user)
    db.commit()

    userID = new_user.id
    create_user_session(userID)

    return new_user


@tech_starter.post("/login", response_model=schemas.Token)
async def login_user(
    email: str = Form("mail"),
    password: str = Form("pwd"),
    db: Session = Depends(get_db)
):
    if not all([email, password]):
        raise HTTPException(status_code=400, detail="All fields are required")

    user = db.query(models.User).filter(models.User.email == email).first()
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_access_token(data={"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}

@tech_starter.post("/logout")
async def logout_user():
    userID = get_user_from_session()
    if userID:
        remove_user_from_session(userID)
        return {"message": "Logout successful"}
    else:
        raise HTTPException(status_code=401, detail="User not in session")







#     --   U P D A T E   R E Q U E S T S   --