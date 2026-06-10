// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ⚠️ Firebase Console se mila hua asli data yahan daalna hai:
const firebaseConfig = {
  apiKey: "AAaaBbBbCcCcDdDd_YOUR_REAL_KEY", // Apni asli Key paste karo
  authDomain: "driftcart-apna-id.firebaseapp.com", // Apna asli ID
  projectId: "driftcart-apna-id", // Apna asli ID
  storageBucket: "driftcart-apna-id.appspot.com",
  messagingSenderId: "123456789012", // Asli number
  appId: "1:123456789012:web:abcdef123456" // Asli App ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
