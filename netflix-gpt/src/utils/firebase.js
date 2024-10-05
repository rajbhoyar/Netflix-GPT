// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDe1WUR3wvRBMp4cLDsDeyLLVbNkLfJ-Es",
  authDomain: "netflixgpt-b7e84.firebaseapp.com",
  projectId: "netflixgpt-b7e84",
  storageBucket: "netflixgpt-b7e84.appspot.com",
  messagingSenderId: "684278121800",
  appId: "1:684278121800:web:78ccb6073fe31073a05f7d",
  measurementId: "G-N8XCSSTMDR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
