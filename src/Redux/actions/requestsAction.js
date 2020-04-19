
import { firebase, firestore } from "../../firebase/firebase";

import { toastr } from "react-redux-toastr";

////////REQUESTS ACTIONS////////////


export const getRequestLocal = ()=>
  async(dispatch) => {
    let requestRef = firestore.collection("projectRequest");

  try {
    let querySnap = await requestRef.get();
    let requests = [];
    console.log('aaaaa2222221',querySnap.docs.length);
    for (let i = 0; i < querySnap.docs.length; i++) {
      let req = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id,open:false,index:i };

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
    return async () => {
      await firestore
        .collection("projectRequest")
  
        .doc()
        .set({
          contactname: projectRequest.contactname? projectRequest.contactname:'',
          companyname: projectRequest.companyname? projectRequest.companyname:'',
          phone: projectRequest.phone ?projectRequest.phone :'',
          email: projectRequest.email?projectRequest.email: '',
          projecttarget: projectRequest.projecttarget ?projectRequest.projecttarget:'',
          additional: projectRequest.additional?projectRequest.additional:'',
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          read: false,
        })
        .then(()=>{
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
