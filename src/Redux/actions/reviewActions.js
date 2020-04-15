import { firebase, firestore } from "../../firebase/firebase";

import { toastr } from "react-redux-toastr";

/////add review comment new user to dataBase//////
export const addReview = async(comment) => {
    try {
       await firestore.collection("Reviews").doc().set({
        name: comment.name,
        content: comment.content,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      toastr.success("Success!", "Project have been deleted");

    } catch (error) {
      console.log("lotob", error);
    }
  };


///fetch reviews////////
export const getReviewsLocal = () => async (dispatch) => {
  let reviewsRef = firestore.collection("Reviews");
  let query;
  query = reviewsRef.orderBy("createdAt", "asc");
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
    console.log("errorrr", error);
  }
};
