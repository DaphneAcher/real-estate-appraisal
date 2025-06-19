from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ContactForm (BaseModel):
    name: str
    email: EmailStr
    tel: str
    address: str
    message: str

@app.post("/contact")

def get_content(form: ContactForm):
    print(f"new message from {form.name} <{form.email}>")
    print(f"message: {form.message}")
    return{"status": "true"}
