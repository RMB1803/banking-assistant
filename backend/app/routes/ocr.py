from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.ocr_service import extract_text_from_image

router = APIRouter()

@router.post("/")
async def perform_ocr(file: UploadFile = File(...)):
    try:
        contents = await file.read()
        extracted_text = extract_text_from_image(contents)
        return {"extracted_text": extracted_text}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
