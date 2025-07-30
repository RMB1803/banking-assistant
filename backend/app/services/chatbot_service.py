import os
import requests
from dotenv import load_dotenv

load_dotenv()

OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")

def clean_response(text: str) -> str:
    if "</think>" in text:
        return text.split("</think>", 1)[1].strip()
    return text.strip()

def get_bot_reply(user_message: str, selected_language: str) -> str:
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json"
    }

    system_prompt = (f"You are a multilingual banking assistant. "
    f"Respond to the user message strictly in '{selected_language}' without showing thoughts or internal reasoning. "
    f"Only return the final, structured answer in that language."
    )

    payload = {
        #"model": "mistralai/mistral-7b-instruct:free",
        "model": "sarvamai/sarvam-m:free",
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_message}
        ]
    }

    try:
        response = requests.post("https://openrouter.ai/api/v1/chat/completions", headers=headers, json=payload)
        response.raise_for_status()
        raw_reply = response.json()["choices"][0]["message"]["content"]
        return clean_response(raw_reply)
    except Exception as e:
        return f"Error: {str(e)}"

