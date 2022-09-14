import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQcqw2jmBrwVoPgy7dcrZEeWEJW3Ovar4",
  authDomain: "spotify-917ac.firebaseapp.com",
  projectId: "spotify-917ac",
  storageBucket: "spotify-917ac.appspot.com",
  messagingSenderId: "499184962855",
  appId: "1:499184962855:web:354d1d973ac02f77c72d02",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
