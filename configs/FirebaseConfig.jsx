// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoXzeCZBRtpdbGx2hnHedxil3xUe7INpI",
  authDomain: "medicinetracker-d4c98.firebaseapp.com",
  projectId: "medicinetracker-d4c98",
  storageBucket: "medicinetracker-d4c98.firebasestorage.app",
  messagingSenderId: "560909023165",
  appId: "1:560909023165:web:37bc845b655430bb5044d4",
  measurementId: "G-DSGM60JLTS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
