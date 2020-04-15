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
  return async () => {
    try {
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
      toastr.success("!מעולה", "נוצר פרויקט חדש");
    } catch (error) {
      toastr.error("!אופס", "פרויקט לא התווסף");
    }
  };
};
//------------------------------------------------------//
//DELETE_PROJECT_ACTION

export const deleteProject = (id) => {
  console.log("sssssssssssssssssssssss", id);
  return async (dispatch) => {
    try {
      await firestore
        .collection("projects")
        .doc(id)
        .delete()
        .then(function () {
          toastr.success("Success!", "Project have been deleted");
        });
      console.log("idiid", id);
      dispatch({
        type: "DELETE_PROJECTS",
        id,
      });
    } catch (error) {
      console.log("lotob", error);
    }
  };
};

//------------------------------------------------------//
//UPDATE_PROJECT_ACTION
export const updateProject = (project = {}) => {
  console.log("dsdsd", project);
  return async (dispatch) => {
    try {
      await firestore
        .collection("projects")
        .doc(project.id)
        .update({
          title: project.title,
          description: project.description,
          videoUrl: project.videoUrl,
          category: project.category,
          date: project.date,
        })
        .then(function () {
          console.log("up written!", project);
          toastr.success("Success!", "Project have been updated");
        });
      dispatch({
        type: "EDIT_PROJECT",
        project,
      });
    } catch (error) {
      console.log("NOTGOOD----UpdateProject", error);
    }
  };
};

//////GET project filter AND FETCH///////////
export const getProjectsFilter = (lastProject, category) => async (
  dispatch
) => {
  console.log("222222", lastProject, "222", category);
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

    dispatch({
      type: "FETCH_PROJECTS",
      projects,
    });
    dispatch(asyncActionFinish());
    return querySnap;
  } catch (error) {
    dispatch(asyncActionError());
    console.log(error);
  }
};

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa//GET project filter AND FETCH///////////
export const getHomePageProjects = () => async (dispatch) => {
    let projectRef = firestore.collection("projects");
    let query;
  try {
  dispatch(asyncActionStart());
      query = projectRef.orderBy("date", "desc").limit(4);
  let querySnap=await query.get()
    let projects = [];
      for (let i = 0; i < querySnap.docs.length; i++) {
        let proj = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
        projects.push(proj);
      }
      dispatch({
        type: "FETCH_PROJECTS",
        projects
      });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };

//////////////////////  getUserProjects////////////////////////
  export const getUserProjects = (currentUid) => async (dispatch) => {
    let projectRef = firestore.collection("projects");
    let query;
    console.log('66666666666beforetry current uid', currentUid)
  try {
    console.log('66666666666tryyyyy')
  dispatch(asyncActionStart());
      query = projectRef.where("userOwn", "==", currentUid).orderBy("date", "desc")
  let querySnap=await query.get()
    let projects = [];
      for (let i = 0; i < querySnap.docs.length; i++) {
        let proj = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id, key: i };
        projects.push(proj);
      }
    console.log('66666666666biforedispaych', projects)  
      dispatch({
        type: "USER_PROJECTS",
        projects
      });
      dispatch(asyncActionFinish());
    } catch (error) {
      dispatch(asyncActionError());
      console.log(error);
    }
  };