// v9 compat packages are API compatible with v8 code
//import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCJG81mbR9LkAXQRT_NkpjHKvHkbokZOtg",
  authDomain: "linkedln-clone-99719.firebaseapp.com",
  projectId: "linkedln-clone-99719",
  storageBucket: "linkedln-clone-99719.appspot.com",
  messagingSenderId: "452563348101",
  appId: "1:452563348101:web:b6baa3407ce44da4de17ec",
};

//init firebase app
initializeApp(firebaseConfig);

//init services
const db = getFirestore();
const auth = getAuth();

export { db, auth };
