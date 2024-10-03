// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCyWsgy-ZwxJeVDOnUgx6EEd_etbqUj0E",
  authDomain: "netflix-gpt-6ad83.firebaseapp.com",
  projectId: "netflix-gpt-6ad83",
  storageBucket: "netflix-gpt-6ad83.appspot.com",
  messagingSenderId: "699410812299",
  appId: "1:699410812299:web:32fcedddb95dbc6204738e",
  measurementId: "G-BRRDLNC3DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();