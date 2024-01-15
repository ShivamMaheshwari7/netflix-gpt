// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeW4GWyZOGPgVngYqFncrhqsr4mBTS1v0",
  authDomain: "netflixgpt-6d015.firebaseapp.com",
  projectId: "netflixgpt-6d015",
  storageBucket: "netflixgpt-6d015.appspot.com",
  messagingSenderId: "16738605996",
  appId: "1:16738605996:web:7848793d050fd3c81db809",
  measurementId: "G-BHD16DWLL1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
