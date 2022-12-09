import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnxzEq2JwPL6ryGZfZm8ve07G5ekXSBZI",
    authDomain: "crud-852c6.firebaseapp.com",
    projectId: "crud-852c6",
    storageBucket: "crud-852c6.appspot.com",
    messagingSenderId: "298746738579",
    appId: "1:298746738579:web:1d4cf52894c2e387afda66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);