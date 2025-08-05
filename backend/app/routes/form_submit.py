from fastapi import APIRouter
from models.form_data import FormData
from services.form_submit_service import process_form_data

router = APIRouter()

@router.post("/submit-form")
def submit_form(data: FormData):
    result = process_form_data(data)
    return {"message": result}
