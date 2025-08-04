import os
import requests
from dotenv import load_dotenv

load_dotenv()

AZURE_TRANSLATOR_KEY = os.getenv("AZURE_TRANSLATOR_KEY")
AZURE_TRANSLATOR_ENDPOINT = os.getenv("AZURE_TRANSLATOR_ENDPOINT")

def translate_text(text: str, target_language: str) -> str:
    url = f"{AZURE_TRANSLATOR_ENDPOINT}translate?api-version=3.0&to={target_language}"
    headers = {
        "Ocp-Apim-Subscription-Key": AZURE_TRANSLATOR_KEY,
        "Ocp-Apim-Subscription-Region": "centralindia", 
        "Content-type": "application/json"
    }
    body = [{"text": text}]
    try:
        response = requests.post(url, headers=headers, json=body)
        response.raise_for_status()
        return response.json()[0]["translations"][0]["text"]
    except Exception as e:
        return f"Translation error: {str(e)}"
