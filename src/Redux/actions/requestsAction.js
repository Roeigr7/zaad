
import { firebase, firestore } from "../../firebase/firebase";

import { toastr } from "react-redux-toastr";
import { asyncActionStart, asyncActionFinish, asyncActionError } from "./asyncActions";

////////REQUESTS ACTIONS////////////


//////////GetAllToLocalredux//////////////
export const getRequestLocal = ()=>
  async(dispatch) => {
    let requestRef = firestore.collection("requests");
  try {
    dispatch(asyncActionStart());
    let querySnap = await requestRef.get();
    let requests = [];
    console.log('aaaaa2222221',querySnap.docs.length);
    for (let i = 0; i < querySnap.docs.length; i++) {
      let req = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id,open:false };
      requests.push(req);
    }

    dispatch({
      type: "FETCH_REQUESTS",
      requests
    });
    dispatch(asyncActionFinish());
  } catch (error) {
    dispatch(asyncActionError());
    console.log('error',error);
  }
};

export const addNewRequest = (projectRequest = {}) => {
    return async (dispatch) => {
      dispatch(asyncActionStart());
      await firestore
        .collection("requests")
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
          dispatch(asyncActionFinish());
          toastr.success("Success!", "New Project Added");
          console.log("Dcessfully written!",  projectRequest);
        });

      };
  
  };

  //DELETE_PROJECT_ACTION

export const deleteRequest = id => {

  return async (dispatch) => {
    try {
      dispatch(asyncActionStart());
      await firestore
        .collection("requests")
        .doc(id)
        .delete()
        .then(function() {
          toastr.success("Success!", "Request have been deleted");
        });
 dispatch(asyncActionFinish());
        console.log('idiid',id)
dispatch({
  type:'DELETE_REQUEST',
  id
})
    } catch (error) {
      dispatch(asyncActionError());
      console.log("lotob", error);
    }
  };
};
///////transfer to archive//////////
export const transferToArchive = (reqId,read)=>
  async(dispatch) => {
    console.log(reqId,'444444444')
    try {
      dispatch(asyncActionStart());
      console.log(reqId,'444444444aftretry')
      
      await firestore
        .collection("requests")
        .doc(reqId)
        .update({
          read: !read
        })
console.log('44444insread',read,!read)
          dispatch(asyncActionFinish());
  } catch (error) {
    dispatch(asyncActionError());
    console.log('4444error',error);
  }
};
//------------------------------------------------------//

