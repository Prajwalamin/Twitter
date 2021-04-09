import firebase from "firebase";
import 'firebase/auth'

export{
    auth, 
    db
}

var firebaseConfig = {
    apiKey: "AIzaSyDEIk0aBwotmdwpCACA-evBLC8w4s9rq2M",
    authDomain: "twitter-4e4df.firebaseapp.com",
    projectId: "twitter-4e4df",
    storageBucket: "twitter-4e4df.appspot.com",
    messagingSenderId: "800419619039",
    appId: "1:800419619039:web:00e236afb4e5d95b5a496a",
    measurementId: "G-178JGKT554"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

