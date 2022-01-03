// Import the functions you need from the SDKs you need
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

document.getElementById("signup").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass").value;
  const name = document.getElementById("name").value;

  createUserWithEmailAndPassword(auth, email, password, name)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log("created");
      updateProfile(auth.currentUser, {
        displayName: document.getElementById("name").value,
      })
        .then(() => {
          // Profile updated!
          console.log(`tqveni saxelia ` + user.displayName);
          window.location = "home.html";
        })
        .catch((error) => {
          // An error occurred
          // ...
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode + errorMessage);
    });
});

//sign in

// document.getElementById("signout").addEventListener("click", function () {
//   signOut(auth)
//     .then(() => {
//       console.log("warmatebit gamoxvedi accdan");
//     })
//     .catch((error) => {
//       console.log("ragac veraris kargad");
//     });
// });

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(user.email);
    console.log(user.displayName);
    // ...
  } else {
    // User is signed out
    // ...
  }
});
