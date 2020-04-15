import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Butt,ButtonsContainer } from "../../style/style";



const AccountNav = ({user}) => {
console.log('q',user)
  return (
    <ButtonsContainer>
  <Link to='/account/details'>
    <Butt>details</Butt>
  </Link>
  <Link to='/account/projects'>
    <Butt>projects</Butt>
  </Link>

  <Link to='/account/settings'>
    <Butt>settings</Butt>
  </Link>

  
  {user&& (
  <Link to='/account/requests'>
  <Butt>request</Butt>
</Link>
  )}
</ButtonsContainer>
  );
};

const MapStateToProps = state => ({
  user: state.auth.user
 
});
export default connect(MapStateToProps,null)(AccountNav);