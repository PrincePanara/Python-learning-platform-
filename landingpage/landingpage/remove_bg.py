import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def remove_background(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    # Get the background color from the top-left pixel (should be the off-white/beige)
    bg_color = data[0]
    
    new_data = []
    tolerance = 40 # Tolerance for JPEG artifacts and anti-aliasing
    
    for item in data:
        if (abs(item[0] - bg_color[0]) < tolerance and
            abs(item[1] - bg_color[1]) < tolerance and
            abs(item[2] - bg_color[2]) < tolerance):
            new_data.append((255, 255, 255, 0)) # Make it completely transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print("Background removed successfully!")

if __name__ == "__main__":
    input_file = "/Users/princepanara/Desktop/py platform/yourlearner-landing/public/logo.png"
    output_file = "/Users/princepanara/Desktop/py platform/yourlearner-landing/public/logo_transparent.png"
    remove_background(input_file, output_file)
