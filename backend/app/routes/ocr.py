from fastapi import APIRouter, UploadFile, File

router = APIRouter()

@router.post("/")
async def dummy_ocr(file: UploadFile = File(...)):
    return {"extracted_text": "Name: Ravi Kumar\nAccount Number: 1234567890"}