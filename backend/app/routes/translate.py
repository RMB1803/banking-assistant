from fastapi import APIRouter
from pydantic import BaseModel
from app.services.translate_service import translate_text

router = APIRouter()

class TranslationRequest(BaseModel):
    text: str
    target_language: str  

class TranslationResponse(BaseModel):
    translated_text: str

@router.post("/", response_model=TranslationResponse)
def translate(req: TranslationRequest):
    translated = translate_text(req.text, req.target_language)
    return {"translated_text": translated}
