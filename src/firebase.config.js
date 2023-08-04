// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPeHO3KF0acY9yaaNxFXBG8YaHrYG7lJQ",
  authDomain: "countdown-timer-5d62f.firebaseapp.com",
  databaseURL: "https://countdown-timer-5d62f-default-rtdb.firebaseio.com",
  projectId: "countdown-timer-5d62f",
  storageBucket: "countdown-timer-5d62f.appspot.com",
  messagingSenderId: "1012792226650",
  appId: "1:1012792226650:web:051d941cd1e3b9aafeb963"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };
