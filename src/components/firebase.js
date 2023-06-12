import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

  
const firebaseConfig = {
  apiKey: "AIzaSyCuy5afcimnOLigmay4H-F3_9ZGBmTuFJI",
  authDomain: "task-board-prj.firebaseapp.com",
  projectId: "task-board-prj",
  storageBucket: "task-board-prj.appspot.com",
  messagingSenderId: "618415838308",
  appId: "1:618415838308:web:f8ae13745ed9c77572fb71",
  measurementId: "G-0V6FYT1XMP"
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth(app);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const database = firebase.firestore();

// export const analytics = getAnalytics(app);
// b



