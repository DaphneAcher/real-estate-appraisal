from fastapi import FastAPI
from pydantic import BaseModel, EmailStr

app = FastAPI()

class ContactForm (BaseModel):
    name: str
    email: EmailStr
    message: str

@app.post("/contact")

def get_content(form: ContactForm):
    print(f"new message from {form.name} <{form.email}>")
    print(f"message: {form.message}")
    return{"status": "true"}
