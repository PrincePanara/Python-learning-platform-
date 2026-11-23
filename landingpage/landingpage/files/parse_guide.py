import re
import json

def parse_guide():
    with open('/Users/princepanara/Desktop/py platform/files/guide.txt', 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by form feed character ()
    sections = content.split('\f')
    
    topics = []
    
    for section in sections:
        section = section.strip()
        if not section:
            continue
            
        # Extract title and id
        title_match = re.match(r'^(\d+)\.\s+(.*)$', section, re.MULTILINE)
        if not title_match:
            continue
            
        module_num = int(title_match.group(1))
        title = title_match.group(2).strip()
        topic_id = title.lower().replace(' ', '-').replace('?', '').replace('(', '').replace(')', '').replace('/', '-')
        
        # Extract description
        desc_start = title_match.end()
        kp_start = section.find('Key Points')
        description = section[desc_start:kp_start].strip().replace('\n', ' ') if kp_start != -1 else ""
        
        # Extract Key Points
        ex_start = section.find('Example')
        key_points = []
        if kp_start != -1 and ex_start != -1:
            kp_text = section[kp_start + len('Key Points'):ex_start].strip()
            key_points = [p.strip().lstrip('•').strip() for p in kp_text.split('\n') if p.strip()]
            
        # Extract Example Code
        pq_start = section.find('Practice Questions')
        initial_code = ""
        if ex_start != -1 and pq_start != -1:
            initial_code = section[ex_start + len('Example'):pq_start].strip()
            
        # Extract Practice Questions
        practice_questions = []
        if pq_start != -1:
            pq_text = section[pq_start + len('Practice Questions'):].strip()
            practice_questions = [re.sub(r'^\d+\.\s*', '', p.strip()) for p in pq_text.split('\n') if p.strip()]
            
        topics.append({
            "id": topic_id,
            "title": title,
            "module": module_num,
            "description": description,
            "keyPoints": key_points,
            "initialCode": initial_code,
            "practiceQuestions": practice_questions
        })
        
    ts_content = "export interface Topic {\n  id: string;\n  title: string;\n  module: number;\n  description: string;\n  keyPoints: string[];\n  initialCode: string;\n  practiceQuestions: string[];\n}\n\nexport const courseData: Topic[] = "
    ts_content += json.dumps(topics, indent=2) + ";\n"
    
    with open('/Users/princepanara/Desktop/py platform/yourlearner-landing/src/course/data/courseData.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print(f"Successfully generated courseData.ts with {len(topics)} topics.")

if __name__ == '__main__':
    parse_guide()
