// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaYAGXqzi7_34rXSsNyORxV33AlbFK-lw",
  authDomain: "coffee-store-87e53.firebaseapp.com",
  projectId: "coffee-store-87e53",
  storageBucket: "coffee-store-87e53.appspot.com",
  messagingSenderId: "346100819800",
  appId: "1:346100819800:web:4859b3e598b0d96685a72d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
