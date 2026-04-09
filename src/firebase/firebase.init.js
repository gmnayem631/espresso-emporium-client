// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRSzYfSPLpe8Doej1f0SflWoy7tPuImeQ",
  authDomain: "espresso-emporium-43af7.firebaseapp.com",
  projectId: "espresso-emporium-43af7",
  storageBucket: "espresso-emporium-43af7.firebasestorage.app",
  messagingSenderId: "576479520687",
  appId: "1:576479520687:web:1f732d1a110d081dce715a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
