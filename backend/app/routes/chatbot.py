from fastapi import APIRouter
from app.models.chat import ChatRequest, ChatResponse
from app.services.chatbot_service import get_bot_reply

router = APIRouter()

@router.post("/", response_model=ChatResponse)
def chat_endpoint(req: ChatRequest):
    reply = get_bot_reply(req.message, req.language.value)
    return ChatResponse(response=reply)
