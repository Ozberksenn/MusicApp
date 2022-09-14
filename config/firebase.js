import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQcqw2jmBrwVoPgy7dcrZEeWEJW3Ovar4",
  authDomain: "spotify-917ac.firebaseapp.com",
  projectId: "spotify-917ac",
  storageBucket: "spotify-917ac.appspot.com",
  messagingSenderId: "499184962855",
  appId: "1:499184962855:web:354d1d973ac02f77c72d02",
};

const app = initializeApp(firebaseConfig);
getAuth(app);
const auth = getAuth(app);

export const Signup = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
};
