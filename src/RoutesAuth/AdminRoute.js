import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const AdminRoute = ({
  
  isAdmin,
  comp: Component,
  ...rest

}) => (
  <Route
    {...rest}
    comp={props =>
      isAdmin ? <Component {...props} /> : <Redirect exact to='/home' />
    
    }
  
  />

);

const mapStateToProps = state => ({
  isAdmin: !!state.firebase.profile.admin
  
});

export default connect(mapStateToProps)(AdminRoute);
