from models.form_data import FormData

def process_form_data(data: FormData) -> str:
    # In real-world, we will save this data to DB.
    
    print("Received Form Data:", data)
    return "Form submitted successfully"
