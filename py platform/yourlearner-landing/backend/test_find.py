import firebase_admin
from firebase_admin import credentials, firestore
cred = credentials.Certificate('serviceAccountKey.json')
firebase_admin.initialize_app(cred)
db = firestore.client()
for m in db.collection('modules').stream():
    d = m.to_dict()
    if '1786711017' in str(d):
        print(f"FOUND IN MODULE: {m.id}")
        print(d)
