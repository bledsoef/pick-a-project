// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOae9p20AxhY0R_-MIUzximZsDGFMDq5I",
  authDomain: "pick-a-project.firebaseapp.com",
  projectId: "pick-a-project",
  storageBucket: "pick-a-project.appspot.com",
  messagingSenderId: "715785500690",
  appId: "1:715785500690:web:fa573fc93f2c2fb5ba40cb",
  measurementId: "G-XYRKKZ5Q95"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);