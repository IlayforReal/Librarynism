// firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqLM31LMvTI2uaqCZXOWmNtmycPDoY44s",
  authDomain: "library-25061.firebaseapp.com",
  databaseURL: "https://library-25061-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "library-25061",
  storageBucket: "library-25061.appspot.com",
  messagingSenderId: "831818678031",
  appId: "1:831818678031:web:6f84c6cf4bef834399487a",
  measurementId: "G-8N2PTYPZXP",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };