////////PROJECTS ACTIONS////////////

import { firebase, firestore } from "../../firebase/firebase";
import {
  asyncActionStart,
  asyncActionFinish,
  asyncActionError,
} from "./asyncActions";
import { toastr } from "react-redux-toastr";


/////////////////ADD_PROJECT_ACTION////////////
export const addNewProject = (project = {}) => {
  return async (dispatch) => {
    try {
      dispatch(asyncActionStart());
      await firestore
        .collection("projects")
        .doc()
        .set({
          title: project.title ? project.title : "null",
          description: project.description ? project.description : "null",
          videoUrl: project.videoUrl
            ? project.videoUrl
            : "https://vimeo.com/383475685",
          category: project.category ? project.category : "",
          date: project.date ? project.date : "null",
          userOwn: project.userId ? project.userId : "",
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        dispatch(asyncActionFinish());
      toastr.success("!מעולה", "נוצר פרויקט חדש");
    } catch (error) {
      toastr.error("אופס", "קרתה תקלה במערכת, אנא נסה שנית");
    }
  };
};
//------------------------------------------------------//
//DELETE_PROJECT_ACTION

export const deleteProject = (id) => {
  return async (dispatch) => {
    try {
 
      dispatch(asyncActionStart());
      await firestore
        .collection("projects")
        .doc(id)
        .delete()
        .then(function () {
          toastr.success("מצוין", "הפרויקט נמחק בהצלחה");
        });
 
      dispatch({
        type: "DELETE_PROJECTS",
        id,
      });
      dispatch(asyncActionFinish());
    } catch (error) {
         dispatch(asyncActionError());
      toastr.error("אופס", "קרתה תקלה אנא נסה שנית");
    }
  };
};

//------------------------------------------------------//
//UPDATE_PROJECT_ACTION


export const updateProject = (project) => {
  return async (dispatch) => {
  try {
    dispatch(asyncActionStart());
    await firestore
      .collection("projects")
      .doc(project.id)
      .update({
        title: project.title ? project.title : "null",
        description: project.description ? project.description : "null",
        videoUrl: project.videoUrl
          ? project.videoUrl
          : "https://vimeo.com/383475685",
        category: project.category ? project.category : "",
        date: project.date ? project.date : "null",
        userOwn: project.userId ? project.userId : "",
      });
      dispatch(asyncActionFinish());
      toastr.success("מצוין", "הפרויקט עודכן בהצלחה");
  } catch (error) {
    dispatch(asyncActionError());
    toastr.error("אופס", "קרתה תקלה אנא נסה שנית");
  }
};
}
//////GET project filter AND FETCH///////////
export const getProjectsFilter = (lastProject, category) => async (
  dispatch
) => {
  let projectRef = firestore.collection("projects");
  let query;
  try {
    dispatch(asyncActionStart());

    let startAfter =
      lastProject &&
      (await firestore.collection("projects").doc(lastProject.id).get());
    category
      ? lastProject
        ? (query = projectRef
            .where("category", "==", category)
            .orderBy("date", "desc")
            .startAfter(startAfter)
            .limit(8))
        : (query = projectRef
            .where("category", "==", category)
            .orderBy("date", "desc")
            .limit(8))
      : startAfter
      ? (query = projectRef
          .orderBy("date", "desc")
          .startAfter(startAfter)
          .limit(8))
      : (query = projectRef.orderBy("date", "desc").limit(8));
    let querySnap = await query.get();
   
    if (querySnap.docs.length === 0) {
      dispatch(asyncActionFinish());
      return querySnap;
    }
  
    let projects = [];
    for (let i = 0; i < querySnap.docs.length; i++) {
      let proj = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      projects.push(proj);
    }
    dispatch(asyncActionFinish());
    dispatch({
      type: "FETCH_PROJECTS",
      projects,
    });
    return querySnap;
  } catch (error) {
    dispatch(asyncActionError());
    toastr.error("אופס", "קרתה תקלה בטעינת העמוד אנא נסה לרענן");
  }
};

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa//GET HOMEEEEEEEEEEEE filter AND FETCH///////////
export const getHomePageProjects = () => async (dispatch) => {
  let projectRef = firestore.collection("projects");
  let query;
  try {
    dispatch(asyncActionStart());
    query = projectRef.orderBy("date", "desc").limit(4);
    let querySnap = await query.get();
    let projects = [];
    for (let i = 0; i < querySnap.docs.length; i++) {
      let proj = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      projects.push(proj);
    }
    dispatch(asyncActionFinish());
    dispatch({
      type: "FETCH_PROJECTS",
      projects,
    });

  } catch (error) {
    dispatch(asyncActionError());
    toastr.error("אופס", "קרתה תקלה בטעינה אנא נסה לרענן");
  }
};

//////////////////////  getUserProjects////////////////////////
export const getUserProjects = (currentUid) => async (dispatch) => {
  let projectRef = firestore.collection("projects");
  let query;
  try {
    dispatch(asyncActionStart());
    query = projectRef
      .where("userOwn", "==", currentUid)
      .orderBy("date", "desc");
    let querySnap = await query.get();
    let projects = [];
    for (let i = 0; i < querySnap.docs.length; i++) {
      let proj = {
        ...querySnap.docs[i].data(),
        id: querySnap.docs[i].id,
        key: i,
      };
      projects.push(proj);
    }
    dispatch(asyncActionFinish());
    dispatch({
      type: "USER_PROJECTS",
      projects,
    });

  } catch (error) {
    dispatch(asyncActionError());
    toastr.error("אופס", "קרתה תקלה בטעינה אנא נסה לרענן");
  }
};

//////////GET SINGLE PROJECT IF HARD REFRESH//////////////////
export const getSingleProject = (projectId)=>{
  return async (dispatch) => {
  console.log('sssssssssss88888')
  let projectRef = firestore.collection("projects").doc(projectId);
  try {
    console.log('sssssssssss88888after')
    dispatch(asyncActionStart());
    let querySnap = await projectRef.get();
    let singleProject = { ...querySnap.data(), id: querySnap.id, key: 0 };
    dispatch(asyncActionFinish());
    dispatch({
      type: "SINGLE_PROJECT",
      singleProject,
    });

  } catch (error) {
    dispatch(asyncActionError());
    toastr.error("אופס", "הסרטון שהינך מחפש לא נמצא")
  }
};
}
