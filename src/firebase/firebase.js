import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

// web app's Firebase configuration
var config = {
  apiKey: "AIzaSyCyypg3GqMfBPUqJG1lM-On3lt9bYpCt9g",
  authDomain: "zaad-b5b7e.firebaseapp.com",
  databaseURL: "https://zaad-b5b7e.firebaseio.com",
  projectId: "zaad-b5b7e",
  storageBucket: "zaad-b5b7e.appspot.com",
  messagingSenderId: "170093527443",
  appId: "1:170093527443:web:d71b5b902c1afa14142866",
  measurementId: "G-CCQ455YZT2"
};


firebase.initializeApp(config);

const firestore=firebase.firestore();
const database=firebase.database();
const auth=firebase.auth();
export{auth,firestore,firebase,database as default}

