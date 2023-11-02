// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7Za98L4HQYY_hcQWX6nha8LD0JQ-J1Ek",
  authDomain: "twitter-d29c0.firebaseapp.com",
  projectId: "twitter-d29c0",
  storageBucket: "twitter-d29c0.appspot.com",
  messagingSenderId: "311204996636",
  appId: "1:311204996636:web:ea7d4c4c429eba5e6b61d9",
  measurementId: "G-9EZWJCEYGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
export default auth;