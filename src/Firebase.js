import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_rGWRc5iCSxI8gAWbpYNjoDxD8yWPMGk",
    authDomain: "linkedin-206a3.firebaseapp.com",
    projectId: "linkedin-206a3",
    storageBucket: "linkedin-206a3.appspot.com",
    messagingSenderId: "334234502668",
    appId: "1:334234502668:web:c432eb640ac98e13b91029"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth}; 

