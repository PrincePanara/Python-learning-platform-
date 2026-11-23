import os
import re

admin_dir = r"C:\Users\SHYAM\Downloads\Python-learning-platform--main\Python-learning-platform--main\Admin Panal\frontend\src"
dashboard_file = os.path.join(admin_dir, "pages", "Dashboard.tsx")

with open(dashboard_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the fetch call to include a cache buster
content = content.replace(
    'await fetch("http://localhost:8000/api/v1/dashboard/");',
    'await fetch(`http://localhost:8000/api/v1/dashboard/?t=${Date.now()}`);'
)

with open(dashboard_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Added cache-buster to Dashboard.tsx fetch.")
