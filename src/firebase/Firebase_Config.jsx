
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCt12tMTy2jzS5AWzj3HAiLhSOhNDWEks8",
    authDomain: "test-yourself-ca35f.firebaseapp.com",
    projectId: "test-yourself-ca35f",
    storageBucket: "test-yourself-ca35f.appspot.com",
    messagingSenderId: "589325609080",
    appId: "1:589325609080:web:dcdd9abf6f9b2fee56e58d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)