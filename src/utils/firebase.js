// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "clone-76b54.firebaseapp.com",
  projectId: "clone-76b54",
  storageBucket: "clone-76b54.appspot.com",
  messagingSenderId: "758552234327",
  appId: "1:758552234327:web:77dd66a4258cc8d5e19612",
  measurementId: "G-J41H30DRX9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
