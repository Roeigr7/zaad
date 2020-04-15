import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button,ButtonsContainer } from "../../style/style";



const AccountNav = ({user}) => {
console.log('q',user)
  return (
    <ButtonsContainer>
  <Link to='/account/details'>
    <Button>הפרטים שלי</Button>
  </Link>
  <Link to='/account/projects'>
    <Button>הפרויקטים שלי</Button>
  </Link>

  <Link to='/account/settings'>
    <Button>הגדרות</Button>
  </Link>

  
  {user&& (
  <Link to='/account/requests'>
  <Button>בקשות מלקוחות</Button>
</Link>
  )}
</ButtonsContainer>
  );
};

const MapStateToProps = state => ({
  user: state.auth.user
 
});
export default connect(MapStateToProps,null)(AccountNav);