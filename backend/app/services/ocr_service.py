import os
import time
from io import BytesIO
from dotenv import load_dotenv
from azure.cognitiveservices.vision.computervision import ComputerVisionClient
from msrest.authentication import CognitiveServicesCredentials
from azure.cognitiveservices.vision.computervision.models import OperationStatusCodes

load_dotenv()

AZURE_OCR_ENDPOINT = os.getenv("AZURE_OCR_ENDPOINT")
AZURE_OCR_KEY = os.getenv("AZURE_OCR_KEY")

if not AZURE_OCR_ENDPOINT or not AZURE_OCR_KEY:
    raise ValueError("Azure credentials missing")

client = ComputerVisionClient(
    AZURE_OCR_ENDPOINT, CognitiveServicesCredentials(AZURE_OCR_KEY)
)

def extract_text_from_image(file_bytes: bytes) -> str:
    stream = BytesIO(file_bytes)
    result = client.read_in_stream(stream, raw=True)
    operation_location = result.headers["Operation-Location"]
    operation_id = operation_location.split("/")[-1]

    while True:
        result_status = client.get_read_result(operation_id)
        if result_status.status not in ['notStarted', 'running']:
            break
        time.sleep(0.5)

    if result_status.status == OperationStatusCodes.succeeded:
        read_results = result_status.analyze_result.read_results
        lines = [line.text for page in read_results for line in page.lines]
        return "\n".join(lines)
    else:
        return "Text extraction failed"
