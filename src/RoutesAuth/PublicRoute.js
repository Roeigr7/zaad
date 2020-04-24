import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Spinner from "../components/features/Spinner";

export const PublicRoute = ({
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
        return isAuthenticated.uid ?  <Redirect exact to='/home' /> :<Component {...props} /> 
  }}/>)}
  
  const mapStateToProps = state => ({
    isAuthenticated: state.firebase.auth,
    loading: !state.firebase.auth.isLoaded
  });

export default connect(mapStateToProps)(PublicRoute);
