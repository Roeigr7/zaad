import React from "react";

import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Button,ButtonsContainer, Option, Select } from "../../style/style";
import styled from "styled-components";





const AccountNav = ({user}) => {
 
let history = useHistory();
  const place=(value)=>{
    history.push(`${value}`);
  }

  return (
<Select portfolio dir="rtl" 
        onChange={(e)=>{
          return place(e.target.value)
          }}>
 <Option portfolio value={'/account/details'} >הפרטים שלי</Option>
  <Option portfolio value={'/account/projects'}  >הפרויקטים שלי</Option>
  <Option portfolio value={'/account/changepassword'} >שנה סיסמא</Option>
  {user&& (
  <Option portfolio value={'/account/requests'} >הודעות לקוחות</Option>
  )}
  </Select>
  );
};

const MapStateToProps = state => ({
  user: state.auth.user
 
});
export default connect(MapStateToProps,null)(AccountNav);