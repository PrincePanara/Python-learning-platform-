import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("c:/Users/SHYAM/Desktop/py platform/py platform/yourlearner-landing/backend/serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

lesson_id = "1786563269992" # example lesson id

modules_ref = db.collection("modules").stream()
found = False
for m in modules_ref:
    m_data = m.to_dict()
    lessons_data = m_data.get("lessons_data", [])
    if isinstance(lessons_data, list):
        for l_data in lessons_data:
            if str(l_data.get("id")) == lesson_id:
                print("FOUND in list!", m.id, l_data)
                found = True
    elif isinstance(lessons_data, dict):
        for k, l_data in lessons_data.items():
            if str(l_data.get("id")) == lesson_id:
                print("FOUND in dict!", m.id, l_data)
                found = True

if not found:
    print("NOT FOUND!")
