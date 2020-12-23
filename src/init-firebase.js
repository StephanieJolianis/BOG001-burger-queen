import firebase from "firebase";

import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCwrlBuYJwWaVLbtIJwEELHMRwcJYR0bL0",
    authDomain: "burguer-queen-f77ac.firebaseapp.com",
    databaseURL: "https://burguer-queen-f77ac.firebaseio.com",
    projectId: "burguer-queen-f77ac",
    storageBucket: "burguer-queen-f77ac.appspot.com",
    messagingSenderId: "600440303838",
    appId: "1:600440303838:web:a3a359ee03f71ca562924f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.firestore();
const storage = firebase.storage().ref();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp();

const arrayUnionFunction = (userId) => {
    return firebase.firestore.FieldValue.arrayUnion(userId);
}

const arrayRemoveFunction = (userId) => {
    return firebase.firestore.FieldValue.arrayRemove(userId);
}

export default { auth, database, storage, timeStamp, arrayUnionFunction, arrayRemoveFunction, firebase }