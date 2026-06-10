// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Database ke liye import kiya

// Aapka asli Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjuvhSq1GLaCdocGvqEOQsH3qxNKqLnBk",
  authDomain: "driftcart-1af79.firebaseapp.com",
  projectId: "driftcart-1af79",
  storageBucket: "driftcart-1af79.firebasestorage.app",
  messagingSenderId: "1045663312566",
  appId: "1:1045663312566:web:0fd0deac004fa144b1d417"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Database ko export kiya taaki App.jsx ise use kar sake
export const db = getFirestore(app);

