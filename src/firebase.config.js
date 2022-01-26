import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCF1oad0irhszB2neY6mJ16AUjPi4vdHgc",
  authDomain: "react-recipe-dc035.firebaseapp.com",
  projectId: "react-recipe-dc035",
  storageBucket: "react-recipe-dc035.appspot.com",
  messagingSenderId: "636536844675",
  appId: "1:636536844675:web:6a13e43de41dcb6f2ec6b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }