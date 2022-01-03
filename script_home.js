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
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const displayName = user.displayName;
    const uid = user.uid;
    document.getElementById(
      "greeter"
    ).textContent = `Gamarjoba ${displayName}, rogor xart?`;
    // ...
  } else {
    document.getElementById(
      "greeter"
    ).textContent = `oe ${displayName}, aq rogor agmochndi?!`;
    // User is signed out
    // ...
  }
});

document.getElementById("signout").addEventListener("click", function () {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      window.location = "index.html";
    })
    .catch((error) => {
      // An error happened.
    });
});
