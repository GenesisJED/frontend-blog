// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-ba956.firebaseapp.com",
  projectId: "mern-blog-ba956",
  storageBucket: "mern-blog-ba956.firebasestorage.app",
  messagingSenderId: "137572649270",
  appId: "1:137572649270:web:732408f13a57041bb68b97"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);