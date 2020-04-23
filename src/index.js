import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import App from "./App";

import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import "@fortawesome/fontawesome-free/css/all.min.css";

import configureStore, { rrfConfig } from "./Redux/store/configureStore";
import  {firebase}  from "./firebase/firebase";
import { createFirestoreInstance} from 'redux-firestore'
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { logout, login } from "./Redux/actions/authActions";

const store = configureStore();
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  updateProfileOnLogin:false
  // createFirestoreInstance // <- needed if using firestore
}


// Setup react-redux so that connect HOC can be used

const jsx = (
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
    <ReduxToastr
    position='bottom-right'
    transitionIn='fadeIn'
    transitionOut='fadeOut'
    />
    <App/>
  </ReactReduxFirebaseProvider>
</Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

 ReactDOM.render(jsx, document.getElementById("root"));

      


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
      renderApp();
    //   if (history.location.pathname === '/') {
    //     history.push('/');
    // }
  }
   else {
    store.dispatch(logout());
    renderApp();
    // history.push('/');
  }
})


// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
