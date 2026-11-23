import os
import glob

def refactor_imports(directory):
    count = 0
    # recursively find all ts and tsx files
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.ts') or file.endswith('.tsx'):
                filepath = os.path.join(root, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Replace imports
                new_content = content.replace('"@/', '"@/landing-page/')
                new_content = new_content.replace("'@/", "'@/landing-page/")
                
                if new_content != content:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    count += 1
                    print(f"Updated: {filepath}")
                    
    print(f"Finished updating {count} files.")

if __name__ == "__main__":
    landing_page_dir = "/Users/princepanara/Desktop/py platform/yourlearner-landing/src/landing-page"
    refactor_imports(landing_page_dir)
