// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpRDpRefpwDSOIV71s_QUSZbmpSY4mL2w",
  authDomain: "cursoreactjs-6499f.firebaseapp.com",
  projectId: "cursoreactjs-6499f",
  storageBucket: "cursoreactjs-6499f.appspot.com",
  messagingSenderId: "407929547168",
  appId: "1:407929547168:web:01bdd78b0db59465ed5cc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)