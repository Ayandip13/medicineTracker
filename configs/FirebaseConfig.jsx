import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDoXzeCZBRtpdbGx2hnHedxil3xUe7INpI",
  authDomain: "medicinetracker-d4c98.firebaseapp.com",
  projectId: "medicinetracker-d4c98",
  storageBucket: "medicinetracker-d4c98.firebasestorage.app",
  messagingSenderId: "560909023165",
  appId: "1:560909023165:web:37bc845b655430bb5044d4",
  measurementId: "G-DSGM60JLTS",
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Setup Auth with AsyncStorage Persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);
