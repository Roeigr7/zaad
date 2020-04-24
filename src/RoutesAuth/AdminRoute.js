import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Spinner from "../components/features/Spinner";

export const AdminRoute = ({
  
  isAuthenticated,
  loading,
  comp: Component,
  ...rest

}) => {

return(
  <Route
    {...rest}
    comp={props =>{
      if (loading) return <Spinner />;
      return isAuthenticated.admin? <Component {...props} /> : <Redirect exact to='/home' /> 
}}/>)}

const mapStateToProps = state => ({
  isAuthenticated: state.firebase.profile,
  loading: !state.firebase.profile.isLoaded,

});

export default connect(mapStateToProps)(AdminRoute);
