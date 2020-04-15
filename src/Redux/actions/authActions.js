import { firebase, firestore } from "../../firebase/firebase";
import { SubmissionError,reset } from "redux-form";
import { closeModal } from "./modalsActions";
import {toastr} from 'react-redux-toastr'


export const login = uid => {
return async (dispatch) => {
  try {
  let snap = await firestore.collection("users").doc(uid).get();
  let userAuth = {
    ...snap.data(),
    uid
  };
 console.log(userAuth,'32323232')
 dispatch({
  type: "LOGIN",
  userAuth

 }) 
  }catch(error){
console.log('wwwwwwwwwlogin errrrrr',error)
  }
}}


export const startEmailPasswordLogin = creds => {
  return async (dispatch) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
      dispatch(closeModal());
    
    } catch (error) {
      throw new SubmissionError({
        _error: error.message
      });
    }


  };

};
//////////logout/////////
export const logout = () => {
  console.log("start logout!!!!!!!!!!!!!!!!");
  return async(dispatch) => {
   firebase.auth().signOut();
  dispatch({
    type:'LOGOUT'
  })
};
}
/////////////////REGISTER ACTION///////////////////
export const startRegister = user => {

  return async () => {
    try {

      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
      await createdUser.user.updateProfile({
        name: user.fullName
      });

      await firestore
      .collection("users")
      .doc(createdUser.user.uid)
      .set({
        admin: false,
        email: user.email,
        fullName: user.fullName,
        companyName: user.companyName,
        phone: user.phone,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(function() {
          console.log("Dcessfully written!", user);
        });
    } catch (error) {
      console.log("lotob", error);
    }
  };
};

export const Register = user => ({
  type: "REGISTER",
  user
});


////////////////UPDATE PASSWORD/////////
export const updatePassword=(creds)=>{
 
  return async (dispatch)=>{
    const user=firebase.auth().currentUser
    try{
 
await user.updatePassword(creds.passOne)//לוקח בדיוק את הוואליוז שבפורם
    await dispatch(reset('ChangePasswordForm'));
    toastr.success('Success','your password been update')
        console.log('nienbien')
}catch (error) {
      throw new SubmissionError({
        _error: error.message
      });
    }

    }
  }
