import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBdsduGZ4eO3XHKdw1GA0OKrNAeess266w",
    authDomain: "insta-clone-5cc4a.firebaseapp.com",
    projectId: "insta-clone-5cc4a",
    storageBucket: "insta-clone-5cc4a.appspot.com",
    messagingSenderId: "207171615529",
    appId: "1:207171615529:web:426d0857b5fdaad7c29538"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage};

