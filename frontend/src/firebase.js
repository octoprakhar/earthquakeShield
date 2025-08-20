// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD80sZvhpM6xRL5xyc6fvRv7upII-YPviw",
  authDomain: "earthquake-project-ecdc2.firebaseapp.com",
  projectId: "earthquake-project-ecdc2",
  storageBucket: "earthquake-project-ecdc2.firebasestorage.app",
  messagingSenderId: "879577459092",
  appId: "1:879577459092:web:194e275c1cb22ae90d8781",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
