import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQnDQHgzVnWuV79ss0og4qbCZ-KrJxmC0",
    authDomain: "crud-users-e2075.firebaseapp.com",
    projectId: "crud-users-e2075",
    storageBucket: "crud-users-e2075.appspot.com",
    messagingSenderId: "826269478392",
    appId: "1:826269478392:web:5cbae1573d0aff1db77a0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);