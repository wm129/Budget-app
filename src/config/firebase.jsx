import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

 const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "budgetbookapp.firebaseapp.com",
    projectId: "budgetbookapp",
    storageBucket: "budgetbookapp.appspot.com",
    messagingSenderId: "90737617013",
    appId: "1:90737617013:web:e6d559bb5e7559786df03c",
    measurementId: "G-VKXR6CW0QJ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase
export const auth = firebase.auth();
export const db = firebase.firestore();