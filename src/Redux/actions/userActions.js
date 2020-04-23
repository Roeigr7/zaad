import { firebase, firestore } from "../../firebase/firebase";

import { toastr } from "react-redux-toastr";
import { asyncActionStart, asyncActionFinish, asyncActionError } from "./asyncActions";

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

///////////////////UPDATE PROFILE/////////////////////////////
export const updateProfile = (user) => {
  return async (dispatch) => {
   
let reauthenticate=(currentPassword)=>{
  let currentUser=firebase.auth().currentUser;
  let cred=firebase.auth.EmailAuthProvider.credential(currentUser.email,currentPassword);
return currentUser.reauthenticateWithCredential(cred)
}
reauthenticate(user.password).then (async()=>{
    
        dispatch(asyncActionStart());
        await firebase.updateProfile({
          fullName:user.fullName,
          companyName:user.companyName,
          phone:user.phone,
          email:user.email,
        })
let currentUser=firebase.auth().currentUser;
currentUser.updateEmail(user.email).then(() => {

}).catch(() =>{
  dispatch(asyncActionError());
  toastr.error("אופס" , "קרתה בעיה בעדכון הפרטים");
});
          dispatch(asyncActionFinish());
           toastr.success("מעולה", "הפרטים עודכנו");
   }).catch (() =>{
    dispatch(asyncActionError());
    toastr.error("אופס","הקשת סיסמא לא נכונה");
    })
  }
}
  
export const getAllUsers = () => async (dispatch) => {
  let usersRef = firestore.collection("users");
  let query = usersRef.orderBy("fullName", "desc");
  try {
    dispatch(asyncActionStart());
    let querySnap = await query.get();
    let usersList = [];
    for (let i = 0; i < querySnap.docs.length; i++) {
 let user = {...querySnap.docs[i].data(), id: querySnap.docs[i].id };

 usersList.push(user);
    }
    dispatch(asyncActionFinish());
    dispatch({
      type: "GET_ALL_USERS",
      usersList,
    });
  } catch (error) {
    dispatch(asyncActionError());
  }
};
