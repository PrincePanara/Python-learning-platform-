import requests

url = "http://127.0.0.1:8000/api/v1/upload/image"
file_path = r"c:\Users\SHYAM\Desktop\py platform\py platform\yourlearner-landing\frontend\public\favicon.ico"

with open(file_path, "rb") as f:
    files = {"file": ("favicon.ico", f, "image/x-icon")}
    response = requests.post(url, files=files)

print("Status Code:", response.status_code)
print("Response:", response.text)
