import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9vTH_uo-VWqc7sn0GLLbkPDEH5ViS0xQ",
  authDomain: "tribal-method-wdw77.firebaseapp.com",
  projectId: "tribal-method-wdw77",
  storageBucket: "tribal-method-wdw77.firebasestorage.app",
  messagingSenderId: "1042901112863",
  appId: "1:1042901112863:web:74852134b9948678461d2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore with custom databaseId
export const db = initializeFirestore(app, {}, "ai-studio-95ff542e-22c2-43c1-b3e2-9991b0337245");

// Initialize Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
