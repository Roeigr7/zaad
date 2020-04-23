import { firebase, firestore } from "../../firebase/firebase";

import { toastr } from "react-redux-toastr";
import { asyncActionStart, asyncActionFinish, asyncActionError } from "./asyncActions";
import { SubmissionError } from "redux-form";

/////add review comment new user to dataBase//////
export const addReview = (comment) => async (dispatch) => {
    try {
      dispatch(asyncActionStart())
       await firestore.collection("reviews").doc().set({
        name: comment.name,
        content: comment.content,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      dispatch(asyncActionFinish())
      toastr.success("מצוין", "תגובתך נוספה בהצלחה");

    } catch (error) {
      dispatch(asyncActionError())
      toastr.error("אופס", "קרתה תקלה אנא נסה שנית");
    }
  };


///fetch reviews////////
export const getReviewsLocal = () => async (dispatch) => {
  let reviewsRef = firestore.collection("reviews");
  let query;
  query = reviewsRef.orderBy("createdAt", "desc");
  try {
    
    let querySnap = await query.get();
    let reviews = [];
    for (let i = 0; i < querySnap.docs.length; i++) {
      let rev = {
        ...querySnap.docs[i].data(),
        id: querySnap.docs[i].id,
        key: i,
      };
      reviews.push(rev);
    }

    dispatch({
      type: "FETCH_REVIEWS",
      reviews,
    });
  } catch (error) {

    toastr.error("אופס", "קרתה תקלה בטעינה אנא נסה לרענן");
};
}

//DELETE_REVIEW_ACTION

export const deleteReview = (id) => {
console.log('dddddddddddd2112112',id)
  return async (dispatch) => {
    try {
      dispatch(asyncActionStart());
      await firestore
        .collection("reviews")
        .doc(id)
        .delete()
        toastr.success("מצוין", "התגובה נמחקה בהצלחה");
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      toastr.error("אופס", "קרתה תקלה אנא נסה שנית");
      
  }  
}
}