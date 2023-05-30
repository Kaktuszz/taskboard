import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyDzCDBz575Ztr_DHdyI3P6S_i5fFWgtF_o",
    authDomain: "react-project8-53a24.firebaseapp.com",
    databaseURL: "https://react-project8-53a24-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-project8-53a24",
    storageBucket: "react-project8-53a24.appspot.com",
    messagingSenderId: "861833486386",
    appId: "1:861833486386:web:3ba31ab769c3aff8e31c2b"
  };
    
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
  
export default database;