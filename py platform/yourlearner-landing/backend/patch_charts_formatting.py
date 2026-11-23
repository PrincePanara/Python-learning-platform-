import os
import re

admin_dir = r"C:\Users\SHYAM\Downloads\Python-learning-platform--main\Python-learning-platform--main\Admin Panal\frontend\src"
charts_file = os.path.join(admin_dir, "components", "charts", "Charts.tsx")

with open(charts_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace any .toLocaleString() on learners with optional chaining and fallback
content = content.replace(
    'c.learners.toLocaleString()',
    '(c.learners || 0).toLocaleString()'
)
content = content.replace(
    '{item.learners} {unit}',
    '{item.learners || 0} {unit}'
)

with open(charts_file, 'w', encoding='utf-8') as f:
    f.write(content)

print("Made formatting bulletproof in Charts.tsx")
