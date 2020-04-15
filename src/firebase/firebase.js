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


export const createUserProfileDocument=async(userAuth,additionalData)=>{
  if(!userAuth) return;

  const userRef=firestore.doc(`users/${userAuth.uid}`)
  
  const snapShot=await userRef.get();

  if(!snapShot.exists){
    const {displayName,email}=userAuth;
    const createdAt=new Date();

    try{
await userRef.set({
  displayName,
  email,
  createdAt,
  ...additionalData
})
    }catch(error){
console.log('error creating user',error.message)
    }
  }
return userRef;
}


const firestore=firebase.firestore();
const database=firebase.database();
const googleProvider=new firebase.auth.GoogleAuthProvider();
const facebookProvider=new firebase.auth.FacebookAuthProvider();
const auth=firebase.auth();
export{auth,firestore,firebase,facebookProvider,googleProvider,database as default}

