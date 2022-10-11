import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBcO6eTvXxQP9JUQi_My8am4q4OasJsOD8",
  authDomain: "glamour-lingerie.firebaseapp.com",
  projectId: "glamour-lingerie",
  storageBucket: "glamour-lingerie.appspot.com",
  messagingSenderId: "539604908536",
  appId: "1:539604908536:web:fc5de129488b643eb7fe0d",
  measurementId: "G-MHH2FZ91M6"
};


const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);