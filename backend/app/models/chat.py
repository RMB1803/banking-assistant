from enum import Enum
from pydantic import BaseModel

class SupportedLanguage(str, Enum):
    en = "en"  # English
    hi = "hi"  # Hindi
    mr = "mr"  # Marathi
    ta = "ta"  # Tamil
    te = "te"  # Telugu
    kn = "kn"  # Kannada
    gu = "gu"  # Gujarati
    bn = "bn"  # Bengali
    ml = "ml"  # Malayalam
    or_ = "or"  # Odia (renamed because "or" is a Python keyword)
    pa = "pa"  # Punjabi
    ur = "ur"  # Urdu

class ChatRequest(BaseModel):
    message: str
    language: SupportedLanguage = SupportedLanguage.en

class ChatResponse(BaseModel):
    response: str
