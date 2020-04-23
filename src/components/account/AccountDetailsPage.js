import React from "react";
import { P, BoxContent, FormTitle, Button, Link, Span } from "../../style/style";

const AccountDetails = ({ user }) => {
  
  
  return (
    <>
      <BoxContent style={{paddingRight:'2px'}} >
        <FormTitle>הפרטים שלי</FormTitle>
        <P bold right>שם: <Span big thin>{user && user.fullName}</Span></P>
        <P bold marg  right>חברה: <Span big thin>{user && user.companyName}</Span></P>
        <P bold marg  right>טלפון: <Span big thin>{user && user.phone}</Span></P>
        <P bold marg right>אימייל: <Span big thin>{user && user.email}</Span></P>

        <Link to='/account/details/edit'>
          <Button>שנה פרטים</Button>
        </Link>
      </BoxContent>
    </>
  );
};

export default AccountDetails;
