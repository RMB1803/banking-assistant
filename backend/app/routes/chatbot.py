from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/")
async def chat_endpoint(req: ChatRequest):
    return {"response": "Hi, I'm your assistant!"}