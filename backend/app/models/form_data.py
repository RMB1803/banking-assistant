from pydantic import BaseModel

class FormData(BaseModel):
    name: str
    age: int
    gender: str
    phone_number: str
