import firebase_admin
from firebase_admin import credentials, firestore, auth
import os
import logging

logger = logging.getLogger(__name__)

# Initialize Firebase Admin SDK
def init_firebase():
    if not firebase_admin._apps:
        try:
            # Look for a service account key file
            key_path = os.getenv("FIREBASE_SERVICE_ACCOUNT_KEY", "serviceAccountKey.json")
            if os.path.exists(key_path):
                cred = credentials.Certificate(key_path)
                firebase_admin.initialize_app(cred)
                logger.info(f"Firebase Admin SDK initialized using {key_path}")
            else:
                # Fallback to default credentials (e.g., GOOGLE_APPLICATION_CREDENTIALS)
                firebase_admin.initialize_app()
                logger.info("Firebase Admin SDK initialized using default credentials")
        except Exception as e:
            logger.error(f"Failed to initialize Firebase Admin SDK: {e}")

# Initialize immediately when this module is imported
init_firebase()

# Export Firestore client and Auth module
db = None
try:
    if firebase_admin._apps:
        db = firestore.client()
except Exception as e:
    logger.error(f"Failed to initialize Firestore client: {e}. Please ensure FIREBASE_SERVICE_ACCOUNT_KEY is set or default credentials exist.")

