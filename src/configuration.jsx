// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0R0O6ZnW2cqhacKqwugNhJGLsGTTR3fs",
  authDomain: "mailmessage-1625a.firebaseapp.com",
  projectId: "mailmessage-1625a",
  storageBucket: "mailmessage-1625a.appspot.com",
  messagingSenderId: "606723965547",
  appId: "1:606723965547:web:de6e6c4a2c1b0d8676672e",
  measurementId: "G-0N64N49NHV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Firestore kullanıyorsanız

export { db };
