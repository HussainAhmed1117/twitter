// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDTGuV5b2HfULttQa31FhF-rzarulK-7o",
  authDomain: "create-a-website-like-tw-bd29a.firebaseapp.com",
  projectId: "create-a-website-like-tw-bd29a",
  storageBucket: "create-a-website-like-tw-bd29a.appspot.com",
  messagingSenderId: "786363303625",
  appId: "1:786363303625:web:f3dca95489aec1ee7e6f18",
  measurementId: "G-JHNZ612PGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
export default auth;