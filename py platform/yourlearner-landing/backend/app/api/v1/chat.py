from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
import os
import logging
from openai import AsyncOpenAI, APIError, PermissionDeniedError, NotFoundError

router = APIRouter(
    prefix="/chat",
    tags=["chat"],
)

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# System prompt to restrict the AI to Python only
SYSTEM_PROMPT = """You are an expert Python programming tutor powered by Groq.
Your primary goal is to help users learn Python, debug Python code, write efficient Python scripts, and understand computer science concepts directly related to Python.

CRITICAL INSTRUCTION: You MUST ONLY answer questions related to Python programming, software development involving Python, or computer science concepts directly related to Python.
If the user asks about ANY other topic (e.g., history, geography, other programming languages unless comparing them to Python, personal advice, etc.), you must politely decline and state that you are a Python tutor and can only assist with Python-related queries.

Always provide clear explanations, well-commented Python code examples, and helpful best practices."""

class ChatRequest(BaseModel):
    message: str
    history: list[dict] = []  # format: [{"role": "user", "parts": ["hi"]}, {"role": "model", "parts": ["hello"]}]

class ChatResponse(BaseModel):
    response: str
    model: str = "llama-3.1-8b-instant"


def get_openai_client():
    api_key = os.getenv("GROQ_API_KEY")
    if not api_key:
        logger.warning("GROQ_API_KEY is not set in environment variables.")
        return None
    return AsyncOpenAI(
        api_key=api_key,
        base_url="https://api.groq.com/openai/v1",
    )


@router.post("", response_model=ChatResponse)
async def chat_with_bot(request: ChatRequest):
    client = get_openai_client()

    if not client:
        # Fallback mock when no API key is configured
        logger.info(f"Received message (No API Key): {request.message}")
        lower_msg = request.message.lower()
        if any(kw in lower_msg for kw in ["python", "code", "print", "function", "class", "variable", "list", "dict", "loop", "def"]):
            return ChatResponse(
                response="This is a response from Python Tutor (Mock mode). To enable real Groq AI responses, please set GROQ_API_KEY in backend/.env.",
                model="mock-groq"
            )
        else:
            return ChatResponse(
                response="As a Python tutor, I can only help with Python-related questions. Please configure GROQ_API_KEY to ask Groq!",
                model="mock-groq"
            )

    try:
        # Build conversation history in the format OpenAI SDK expects
        messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        
        for msg in request.history:
            role = "assistant" if msg.get("role") in ["model", "assistant"] else "user"
            content_text = ""
            
            if "text" in msg and isinstance(msg["text"], str):
                content_text = msg["text"]
            elif "content" in msg and isinstance(msg["content"], str):
                content_text = msg["content"]
            elif "parts" in msg and isinstance(msg["parts"], list):
                for p in msg["parts"]:
                    if isinstance(p, str):
                        content_text += p + "\n"
                    elif isinstance(p, dict) and "text" in p:
                        content_text += p["text"] + "\n"
            
            if content_text.strip():
                messages.append({"role": role, "content": content_text.strip()})

        # Append the new user message
        messages.append({"role": "user", "content": request.message})

        primary_model = os.getenv("GROQ_MODEL", "llama-3.1-8b-instant")
        fallback_model = "llama3-8b-8192"

        try:
            response = await client.chat.completions.create(
                model=primary_model,
                messages=messages,
            )
            used_model = primary_model
        except NotFoundError:
            logger.warning(f"Model {primary_model} not found on Groq, falling back to {fallback_model}")
            response = await client.chat.completions.create(
                model=fallback_model,
                messages=messages,
            )
            used_model = fallback_model

        reply_content = response.choices[0].message.content or ""
        return ChatResponse(response=reply_content, model=used_model)

    except PermissionDeniedError as e:
        error_msg = str(e)
        logger.error(f"Groq API Permission Denied (403): {error_msg}")
        raise HTTPException(status_code=403, detail=f"Groq API Permission Denied: {error_msg}")
    except APIError as e:
        logger.error(f"Error communicating with Groq AI API: {str(e)}")
        detail_msg = getattr(e, 'message', str(e))
        raise HTTPException(status_code=502, detail=f"Groq AI service error: {detail_msg}")
    except Exception as e:
        logger.error(f"Unexpected error in Groq chatbot: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to get response from Groq AI: {str(e)}")
