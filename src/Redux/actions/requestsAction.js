
import { firebase, firestore } from "../../firebase/firebase";

import { toastr } from "react-redux-toastr";

////////REQUESTS ACTIONS////////////


export const getRequestLocal = ()=>
  async(dispatch) => {
    let requestRef = firestore.collection("ProjectRequest");

  try {
    let querySnap = await requestRef.get();
    let requests = [];
    console.log('aaaaa',querySnap.docs.length);
    for (let i = 0; i < querySnap.docs.length; i++) {
      let req = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id,key: i };
      requests.push(req);

    }
 
    dispatch({
      type: "FETCH_REQUESTS",
      requests
    });
  } catch (error) {
    console.log('error',error);
  }
};

export const addNewRequest = (projectRequest = {}) => {
    return async (dispatch) => {
      await firestore
        .collection("ProjectRequest")
  
        .doc()
        .set({
          contactname: projectRequest.contactname? projectRequest.contactname:null,
          companyname: projectRequest.companyname? projectRequest.companyname:null,
          phone: projectRequest.phone ?projectRequest.phone :null,
          email: projectRequest.email?projectRequest.email: null,
          projecttarget: projectRequest.projecttarget ?projectRequest.projecttarget:null,
          additional: projectRequest.additional?projectRequest.additional:null,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          admin:projectRequest.admin?projectRequest.admin:false,
        })
        .then(function() {
          toastr.success("Success!", "New Project Added");
          console.log("Dcessfully written!",  projectRequest);
        });

      };
  
  };

  //DELETE_PROJECT_ACTION

export const deleteRequest = id => {

  return async (dispatch) => {
    try {
      await firestore
        .collection("Requests")
        .doc(id)
        .delete()
        .then(function() {
          toastr.success("Success!", "Request have been deleted");
        });
        console.log('idiid',id)
dispatch({
  type:'DELETE_REQUEST',
  id
})
    } catch (error) {
      console.log("lotob", error);
    }
  };
};

//------------------------------------------------------//
