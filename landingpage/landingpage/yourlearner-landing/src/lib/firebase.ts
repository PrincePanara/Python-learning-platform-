import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXGQzRLcHehzU3COzjWB3tAc-s_mJ0jCM",
  authDomain: "pylearing-4ea97.firebaseapp.com",
  projectId: "pylearing-4ea97",
  storageBucket: "pylearing-4ea97.firebasestorage.app",
  messagingSenderId: "388330641707",
  appId: "1:388330641707:web:53cd9cb7d88765b8a0cd6e",
  measurementId: "G-MCF2EJ86ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Auth Providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export { auth, db, googleProvider, githubProvider };
