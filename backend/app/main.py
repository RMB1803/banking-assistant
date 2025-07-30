from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import chatbot, ocr, translate

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",  
    "http://127.0.0.1:8000",   
    "http://localhost:8000",  
] # add frontend and backend links after deployment

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chatbot.router, prefix="/chat")
app.include_router(ocr.router, prefix="/ocr")
app.include_router(translate.router, prefix="/translate")