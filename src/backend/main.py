from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from dotenv import load_dotenv
import os
import smtplib
from email.message import EmailMessage

load_dotenv()
EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_PASS = os.getenv("EMAIL_PASS")
EMAIL_RECEIVER = os.getenv("EMAIL_RECEIVER")
print("LOADED RECEIVER:", EMAIL_RECEIVER)



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
    source: str = "contact"

def send_email(name: str, email: str, tel: str, address: str, message: str, source: str):
    try:
        subject_map = {
            "order-form": f"New Order Request from {name}",
            "quote": f"Quote Request from {name}",
            "contact": f"New Contact Inquiry from {name}"
        }
        subject = subject_map.get(source, f"Message from {name}")

        msg = EmailMessage()
        msg["subject"] = subject
        msg["From"] = EMAIL_USER
        msg["To"] = EMAIL_RECEIVER
        msg.set_content(f"""
        Name: {name}
        Email: {email}
        Phone: {tel}
        Property Address: {address}
        Message:
        {message}
        """)
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
            print("Loaded user/pass:", EMAIL_USER, EMAIL_PASS)
            smtp.login(EMAIL_USER, EMAIL_PASS)
            smtp.send_message(msg)
    except Exception as e:
        print("Email send faild:", e)
        raise

@app.post("/contact")

def get_content(form: ContactForm):
    send_email(
        name=form.name,
        email=form.email,
        tel=form.tel,
        address=form.address,
        message=form.message,
        source=form.source
    )
    return{"status": "true"}
