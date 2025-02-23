// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";  // ← Importar Firestore

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5FqPfVBovsLX600HnhcfbmEdYW6Od3xM",
  authDomain: "pelis-pochoclos.firebaseapp.com",
  projectId: "pelis-pochoclos",
  storageBucket: "pelis-pochoclos.firebasestorage.app",
  messagingSenderId: "75011334279",
  appId: "1:75011334279:web:bd450f46a79721f204d822",
  measurementId: "G-RDRKXWF2HV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//exporta el servicio de autenticacion
export { db };
export const auth = getAuth(app);
export default app;

