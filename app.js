// Firebase imports (modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDDE4oFkx1NCOspiYjvssG0zpUjoM79WCY",
  authDomain: "weasel-messenger.firebaseapp.com",
  projectId: "weasel-messenger",
  storageBucket: "weasel-messenger.firebasestorage.app",
  messagingSenderId: "5201389357",
  appId: "1:5201389357:web:0aa5ec26d209979f5815a4",
  measurementId: "G-W1CD52FVK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Test Firebase connection
console.log("Firebase initialized:", app);
console.log("Auth ready:", auth);
console.log("Firestore ready:", db);
