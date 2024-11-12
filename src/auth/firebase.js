// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged as firebaseOnAuthStateChanged, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZCWnJe_F4S4Gj1NPU7vtR2BNCu0YrhQE",
  authDomain: "spotlight-4b264.firebaseapp.com",
  projectId: "spotlight-4b264",
  storageBucket: "spotlight-4b264.firebasestorage.app",
  messagingSenderId: "877911542817",
  appId: "1:877911542817:web:512c5c8056f8b5c0432760",
  measurementId: "G-06N5XWD1MD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Google Auth provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Helper function for authentication state change
export const onAuthStateChanged = (callback) => {
  return firebaseOnAuthStateChanged(auth, callback);
};

// Exports for sign-in, sign-up, and sign-out
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);

export default app;
