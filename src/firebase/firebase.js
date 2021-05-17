// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDqk6X7Xfw2LdQ5HHR0rMD_E07o3Sw6_zM",
    authDomain: "todos-app-eeab5.firebaseapp.com",
    projectId: "todos-app-eeab5",
    storageBucket: "todos-app-eeab5.appspot.com",
    messagingSenderId: "451403002731",
    appId: "1:451403002731:web:82d784701d9d7c1374922e",
    measurementId: "G-8H13J13CVP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    firebase,
    database,
    googleAuthProvider
};
