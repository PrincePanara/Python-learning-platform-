import firebase_admin
import json
from firebase_admin import credentials, firestore

cred = credentials.Certificate('serviceAccountKey.json')
firebase_admin.initialize_app(cred)
db = firestore.client()

courses = [{'id': c.id, **c.to_dict()} for c in db.collection('courses').stream()]
modules = [{'id': m.id, 'course': m.to_dict().get('course'), 'name': m.to_dict().get('name')} for m in db.collection('modules').stream()]

print(json.dumps({'courses': courses, 'modules': modules}, indent=2))
