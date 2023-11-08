import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATb18TOr4El5btAitY4pFNAspbzXrAE_k",
  authDomain: "chat-1-b505b.firebaseapp.com",
  projectId: "chat-1-b505b",
  storageBucket: "chat-1-b505b.appspot.com",
  messagingSenderId: "759992662490",
  appId: "1:759992662490:web:9aad8376f1091587b928e3",
  measurementId: "G-Q2FYM5R6XH"
};
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

export default firebase;