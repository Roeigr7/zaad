import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export const PublicRoute = ({
  isAuthenticated,
  comp: Component,
  ...rest
}) => (
  <Route
    {...rest}
    comp={(props )=>(
      isAuthenticated ? (<Redirect exact to='/home' />) :
      (<Component {...props} />)
    )}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !state.firebase.auth
});

export default connect(mapStateToProps)(PublicRoute);
