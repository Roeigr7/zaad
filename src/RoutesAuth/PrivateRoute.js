import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({
  
  isAuthenticated,
  comp: Component,
  ...rest

}) => (
  <Route
    {...rest}
    comp={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect exact to='/home' />
    
    }
  
  />

);

const mapStateToProps = state => ({
  isAuthenticated: !!state.firebase.auth
  
});

export default connect(mapStateToProps)(PrivateRoute);
