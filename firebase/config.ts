import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn9nt-7mC_CP2Cqf1oY1tyt5nx063Wqzw",
  authDomain: "cln-leetcode.firebaseapp.com",
  projectId: "cln-leetcode",
  storageBucket: "cln-leetcode.appspot.com",
  messagingSenderId: "188549416040",
  appId: "1:188549416040:web:25d765adfd42782680e7dd",
};

// Initialize new Firebase instance if none exists else use already existing.
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
