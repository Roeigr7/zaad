import { firebase, firestore } from "../../firebase/firebase";
import { SubmissionError } from "redux-form";
import { closeModal } from "./modalsActions";
import {toastr} from 'react-redux-toastr'
import { asyncActionStart, asyncActionFinish, asyncActionError } from "./asyncActions";


export const login = uid => {
return async (dispatch) => {
  try {
  
  dispatch(asyncActionStart());
  let snap = await firestore.collection("users").doc(uid).get();
  let userAuth = {
    ...snap.data(),
    uid
  };
  dispatch(asyncActionFinish());
 dispatch({
  type: "LOGIN",
  userAuth

 }) 
  }catch(error){
    dispatch(asyncActionError());
console.log('wwwwwwwwwlogin errrrrr',error)
  }
}}


export const startEmailPasswordLogin = creds => {
  return async (dispatch) => {
    try {
      dispatch(asyncActionStart());
      await firebase
        .auth()
        .signInWithEmailAndPassword(creds.email, creds.password);
        dispatch(asyncActionFinish());
      dispatch(closeModal());
    
    } catch (error) {
      dispatch(asyncActionError());
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

  return async (dispatch) => {
    try {
      dispatch(asyncActionStart());
      let createdUser = await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);
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
        .then(() =>{
          dispatch(asyncActionFinish());
        });
    } catch (error) {
      dispatch(asyncActionError());
      throw new SubmissionError({
        _error: error.message
      });
    }
  };
};

export const Register = user => ({
  type: "REGISTER",
  user
});


////////////////UPDATE PASSWORD///////////////////////
export const updatePassword=(creds)=>{
 
  return async (dispatch)=>{
    let reauthenticate=(currentPassword)=>{
      let currentUser=firebase.auth().currentUser;
      let cred=firebase.auth.EmailAuthProvider.credential(currentUser.email,currentPassword);
    return currentUser.reauthenticateWithCredential(cred)
    }

return  reauthenticate(creds.currentPassword).then(async()=>{
  console.log(creds.currentPassword,'222222222211curpassword')
const user=firebase.auth().currentUser
console.log(user,'222222222211curuser')
dispatch(asyncActionStart());
await user.updatePassword(creds.newPass)//לוקח בדיוק את הוואליוז שבפורם
console.log('222222222211AFTERUPDATE')
dispatch(asyncActionFinish());
toastr.success('Success','your password been update')

}).catch((error) =>{
    dispatch(asyncActionError());
   throw new SubmissionError({
      _error: error.message
    });
})
}
}
