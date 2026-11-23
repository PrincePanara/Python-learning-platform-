import firebase_admin
from firebase_admin import credentials, firestore
from datetime import datetime, timedelta
import random

cred = credentials.Certificate(r"C:\Users\SHYAM\Desktop\py platform\py platform\yourlearner-landing\backend\serviceAccountKey.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

def generate_activity_calendar():
    # Generate 365 days of activity
    data = []
    end_date = datetime.now()
    start_date = end_date - timedelta(days=364)
    
    for i in range(365):
        current_date = start_date + timedelta(days=i)
        # Randomize activity, higher probability for recent days
        prob = 0.2 + (i / 365) * 0.6
        if random.random() < prob:
            count = random.randint(1, 4)
        else:
            count = 0
            
        data.append({
            "date": current_date.strftime("%Y-%m-%d"),
            "count": count
        })
    return data

def generate_weekly_analytics():
    days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return [
        {
            "name": day,
            "study": random.randint(0, 10) * 0.5,
            "xp": random.randint(50, 500),
            "problems": random.randint(0, 15)
        } for day in days
    ]

def generate_leaderboard():
    return [
        {"name": "Sarah Chen", "points": 2450, "avatar": "https://i.pravatar.cc/150?u=sarah", "isCurrentUser": False},
        {"name": "Alex Kumar", "points": 2320, "avatar": "https://i.pravatar.cc/150?u=alex", "isCurrentUser": False},
        {"name": "You", "points": 2150, "avatar": "", "isCurrentUser": True},
        {"name": "Maria Garcia", "points": 1980, "avatar": "https://i.pravatar.cc/150?u=maria", "isCurrentUser": False},
        {"name": "James Wilson", "points": 1840, "avatar": "https://i.pravatar.cc/150?u=james", "isCurrentUser": False}
    ]

def generate_recent_activity():
    return [
        {"title": "Completed Module: Lists and Tuples", "time": "2 hours ago", "type": "course"},
        {"title": "Solved: Matrix Multiplication", "time": "5 hours ago", "type": "problem"},
        {"title": "Earned Badge: Fast Learner", "time": "1 day ago", "type": "achievement"},
        {"title": "Started Module: Dictionaries", "time": "2 days ago", "type": "course"}
    ]

def generate_achievements():
    return [
        {"title": "7 Day Streak", "icon": "Flame", "color": "text-orange-500", "date": "Today"},
        {"title": "Problem Solver I", "icon": "Code2", "color": "text-blue-500", "date": "2 days ago"},
        {"title": "Fast Learner", "icon": "Zap", "color": "text-yellow-500", "date": "1 week ago"}
    ]

def generate_learning_progress():
    return [
        {"name": "Python Basics", "progress": 100, "total": 100},
        {"name": "Data Structures", "progress": 65, "total": 100},
        {"name": "Algorithms", "progress": 20, "total": 100}
    ]

def update_all_users():
    users_ref = db.collection("users")
    docs = users_ref.stream()
    count = 0
    
    for doc in docs:
        user_data = doc.to_dict()
        
        # We also need to fix missing 'name' field that causes the API to crash
        if "name" not in user_data:
            user_data["name"] = "Anonymous Learner"
            
        update_data = {
            "name": user_data["name"],
            "activityCalendar": generate_activity_calendar(),
            "weeklyAnalytics": generate_weekly_analytics(),
            "leaderboard": generate_leaderboard(),
            "recentActivity": generate_recent_activity(),
            "achievements": generate_achievements(),
            "learningProgress": generate_learning_progress(),
            "stats": {
                "totalXp": "2150",
                "streak": "7",
                "rank": "Intermediate"
            },
            "statItems": [
                {"id": "courses", "label": "Courses Completed", "value": "2", "trend": "+1 this week", "colorClass": "text-blue-500"},
                {"id": "hours", "label": "Learning Hours", "value": "18.5", "trend": "+4.5h this week", "colorClass": "text-emerald-500"},
                {"id": "problems", "label": "Problems Solved", "value": "42", "trend": "+12 this week", "colorClass": "text-purple-500"},
                {"id": "certificates", "label": "Certificates Earned", "value": "1", "trend": "+1 this month", "colorClass": "text-amber-500"}
            ]
        }
        
        doc.reference.update(update_data)
        count += 1
        
    print(f"Updated {count} users.")

if __name__ == '__main__':
    update_all_users()
