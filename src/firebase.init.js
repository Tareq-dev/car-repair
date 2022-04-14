// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABOnikvRP__QEm64ugx5iDht7Gzv1bovE",
  authDomain: "car-repair-1e5a2.firebaseapp.com",
  projectId: "car-repair-1e5a2",
  storageBucket: "car-repair-1e5a2.appspot.com",
  messagingSenderId: "938737681924",
  appId: "1:938737681924:web:bd1ad8101590ebfe275751",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
