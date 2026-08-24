// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { 
  getFirestore, 
  doc, 
  setDoc, 
  serverTimestamp 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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
const auth = getAuth(app);
const db = getFirestore(app);

// UI elements
const loginBox = document.getElementById("login-box");
const signupBox = document.getElementById("signup-box");

document.getElementById("show-signup").onclick = () => {
  loginBox.classList.add("hidden");
  signupBox.classList.remove("hidden");
};

document.getElementById("show-login").onclick = () => {
  signupBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
};

// SIGNUP
document.getElementById("signup-btn").onclick = async () => {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const username = document.getElementById("signup-username").value;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCred.user.uid;

    // Create user profile in Firestore
    await setDoc(doc(db, "users", uid), {
      username: username,
      email: email,
      createdAt: serverTimestamp(),
      description: "",
      friends: [],
      lastOnline: serverTimestamp()
    });

    alert("Account created! You can now log in.");
    signupBox.classList.add("hidden");
    loginBox.classList.remove("hidden");

  } catch (error) {
    alert(error.message);
  }
};

// LOGIN
document.getElementById("login-btn").onclick = async () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Logged in!");
    console.log("User logged in:", auth.currentUser.uid);

    // Later you will redirect to your chat page
  } catch (error) {
    alert(error.message);
  }
};
