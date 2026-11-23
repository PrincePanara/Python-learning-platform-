from openai import OpenAI
import os

# Initialize the OpenAI client with Groq's base URL
# It reads the GROQ_API_KEY environment variable by default, but you can also provide it directly.
client = OpenAI(
    api_key=os.environ.get("GROQ_API_KEY"),
    base_url="https://api.groq.com/openai/v1",
)

# Use the standard chat completions method
response = client.chat.completions.create(
    messages=[
        {"role": "user", "content": "Explain the importance of fast language models"}
    ],
    # Groq models include "llama3-8b-8192", "llama3-70b-8192", "mixtral-8x7b-32768", etc.
    model="llama3-8b-8192", 
)

print(response.choices[0].message.content)
