import React from "react";

import { StyledLink, P, BoxContent, FormTitle, Button, Link } from "../../style/style";
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
    <BoxContent>
      <FormTitle>הפרטים שלי</FormTitle>
      <P bigspace right>{user&&user.fullName} <b>:שם</b>
      <br/>
{user&&user.companyName} <b>:שם חברה</b>
<br/>
  {user&&user.phone} <b>:טלפון</b>
  <br/>
 {user&&user.email} <b>:אימייל</b>
     </P>
  <Link to='/account/details/edit'><Button>שנה פרטים</Button></Link>
      </BoxContent>
        {/* // <MDBListGroupItem>{user.password}</MDBListGroupItem> */}
  
  </>
    );
    };
    
export default AccountDetails;

