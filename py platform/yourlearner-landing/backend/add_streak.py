import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate(r"C:\Users\SHYAM\Desktop\py platform\py platform\yourlearner-landing\backend\serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

def add_streak():
    users_ref = db.collection("users")
    docs = users_ref.stream()
    
    for doc in docs:
        user_data = doc.to_dict()
        stat_items = user_data.get("statItems", [])
        
        # Remove existing streak if any, just in case
        stat_items = [item for item in stat_items if item.get("id") != "streak"]
        
        stat_items.append({
            "id": "streak",
            "label": "Current Streak",
            "value": "7 Days",
            "trend": "+2 days",
            "colorClass": "text-orange-500 bg-orange-500/10",
            "icon": "Flame"
        })
        
        doc.reference.update({"statItems": stat_items})
        
    print("Added streak to all users.")

if __name__ == '__main__':
    add_streak()
