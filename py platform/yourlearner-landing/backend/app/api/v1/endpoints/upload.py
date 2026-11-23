import os
import cloudinary
import cloudinary.uploader
from fastapi import APIRouter, UploadFile, File, HTTPException
from pydantic import BaseModel

router = APIRouter()

# Configure Cloudinary
cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET"),
    secure=True
)

class UploadResponse(BaseModel):
    url: str
    public_id: str

@router.post("/image", response_model=UploadResponse)
async def upload_image(file: UploadFile = File(...)):
    """
    Upload an image file to Cloudinary and return the secure URL.
    """
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="File must be an image")
    
    try:
        # Read the file contents
        contents = await file.read()
        
        # Upload to Cloudinary
        result = cloudinary.uploader.upload(
            contents,
            folder="yourlearner",
            resource_type="image"
        )
        
        return UploadResponse(
            url=result.get("secure_url"),
            public_id=result.get("public_id")
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Image upload failed: {str(e)}")
