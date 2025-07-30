from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class TranslationRequest(BaseModel):
    text: str
    target_lang: str

@router.post("/")
async def dummy_translate(req: TranslationRequest):
    return {
        "original": req.text,
        "translated": f"(Translated to {req.target_lang}): {req.text}"
    }
