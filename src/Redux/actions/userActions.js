import { firebase, firestore } from "../../firebase/firebase";
import { SubmissionError } from "redux-form";
import { toastr } from "react-redux-toastr";

export const setCurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
});

export const updateProfile = (user) => {
  return async () => {
    try {
      await firebase.updateProfile(user);
      toastr.success("Success", "Your profile has been updated");
    } catch (error) {
      throw new SubmissionError({
        _error: error.message,
      });
    }
  };
};

export const getAllUsers = () => async (dispatch) => {
  let usersRef = firestore.collection("users");
  let query = usersRef.orderBy("fullName", "desc");
  try {
    let querySnap = await query.get();
    let usersList = [];
    for (let i = 0; i < querySnap.docs.length; i++) {
 let user = {...querySnap.docs[i].data(), id: querySnap.docs[i].id };

 usersList.push(user);
    }

    dispatch({
      type: "GET_ALL_USERS",
      usersList,
    });
  } catch (error) {
    console.log("users list error", error);
  }
};
