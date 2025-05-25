// Import the functions you need from the SDKs you need
import { initializeApp,  getApp , getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7_UXAUpCQqjzilS_zmQJwb_a9wdhMFrM",
  authDomain: "interviewprepper-3cef9.firebaseapp.com",
  projectId: "interviewprepper-3cef9",
  storageBucket: "interviewprepper-3cef9.firebasestorage.app",
  messagingSenderId: "567986691346",
  appId: "1:567986691346:web:f32d2fe200cf6144fc27cb",
  measurementId: "G-RZEDY2WH1D"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);