// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcwore1ww8nLd3XEzqhKwIEXa6pgibStA",
  authDomain: "fir-auth-1-a995e.firebaseapp.com",
  projectId: "fir-auth-1-a995e",
  storageBucket: "fir-auth-1-a995e.appspot.com",
  messagingSenderId: "737666003720",
  appId: "1:737666003720:web:cac44a5102af10c9b232bd",
  measurementId: "G-S1VQEYHZB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export {app,auth}