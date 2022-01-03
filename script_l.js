import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVvaH1SoONF42y8SJ-TlKcLm5fTKQqwT0",
  authDomain: "authe-79437.firebaseapp.com",
  projectId: "authe-79437",
  storageBucket: "authe-79437.appspot.com",
  messagingSenderId: "5232545382",
  appId: "1:5232545382:web:40bfc3301f0bb7b1ce27a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
document.getElementById("login").addEventListener("click", function () {
  var email = document.getElementById("email1").value;
  var password = document.getElementById("pass1").value;
  console.log("clicked");

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location = "home.html";
      const user = userCredential.user;
      // ...
      console.log(`gamarjoba mister ${user.email}`);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Araswori Paroli!");
    });
});
