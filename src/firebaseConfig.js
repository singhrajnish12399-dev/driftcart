import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjuvhSq1GLaCdocGvqE0QsH3qxNKqLnBk",
  authDomain: "driftcart-1af79.firebaseapp.com",
  projectId: "driftcart-1af79",
  storageBucket: "driftcart-1af79.appspot.com",
  messagingSenderId: "1045663312566",
  appId: "1:1045663312566:web:0fd0deac004fa144b1d417"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


