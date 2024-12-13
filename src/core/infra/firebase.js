// Import the functions you need from the SDKs you need
import { firebaseConfig } from "./firebase-config";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore-compat.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5aK1YnreCJm6M1UGO8N6H6lpgRXk0kzE",
  authDomain: "barbearia-33035.firebaseapp.com",
  projectId: "barbearia-33035",
  storageBucket: "barbearia-33035.firebasestorage.app",
  messagingSenderId: "185657390692",
  appId: "1:185657390692:web:57281c03b93a2586769171",
  measurementId: "G-CQFQH7CWVM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
//Firestore
export const db = getFirestore(app);
export { collection, addDoc, getDocs, setDoc, query, where };
