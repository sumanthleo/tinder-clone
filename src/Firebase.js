// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYEdUo-FxDgHdYScfzH_WpBUD_RtZ95LU",
  authDomain: "hotstar-clone-27768.firebaseapp.com",
  databaseURL: "https://hotstar-clone-27768-default-rtdb.firebaseio.com",
  projectId: "hotstar-clone-27768",
  storageBucket: "hotstar-clone-27768.appspot.com",
  messagingSenderId: "417901012759",
  appId: "1:417901012759:web:49e9f46dd1d8b5b95f3952"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;