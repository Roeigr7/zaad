import React from "react";

import { StyledLink } from "../../style/style";
import styled from "styled-components";


export const D = styled.div`
width:100%;
height:25%;
position:relative;
background-color:${p=>p.grey ? '#ededed' : '#d4d4d4'};
text-align:right;


`
const AccountDetails = ({user}) => {
  


  return (
<>
    
      <D>{user&&user.fullName}</D>
      <D grey>{user&&user.companyName}</D>
      <D> {user&&user.phone}</D>
      <D grey>  {user&&user.email}</D> 
        {/* // <MDBListGroupItem>{user.password}</MDBListGroupItem> */}
  <StyledLink to='/account/details/edit'>שנה פרטים</StyledLink>
  </>
    );
    };
    
export default AccountDetails;

