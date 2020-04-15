import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import requestsReducer from "../reducers/requestsReducer";
import projectsReducer from "../reducers/projectsReducer";
import filtersReducer from "../reducers/filtersReducer";

import { reducer as FormReducer } from "redux-form";
import authReducer from "../reducers/authReducer";
import modalsReducer from '../reducers/modalsReducer';
import asyncReducer from "../reducers/asyncReducer";
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
import {reducer as ToastrReducer} from 'react-redux-toastr'
import reviewsReducer from "../reducers/reviewsReducer";
import userReducer from "../reducers/userReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
}

//Store Creation
export default () => {
  const store = createStore(
    combineReducers({
      projects: projectsReducer,
      filters: filtersReducer,
      modals: modalsReducer,
      auth: authReducer,
      async: asyncReducer,
      form: FormReducer,
      firebase:firebaseReducer,
      firestore:firestoreReducer,
      toastr: ToastrReducer,
      requests: requestsReducer,
      reviews: reviewsReducer,
      user:userReducer,
      
    
    }),
    composeEnhancers(applyMiddleware(thunk))
    //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
