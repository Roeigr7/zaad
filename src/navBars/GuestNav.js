import React from "react";
import { useLocation } from "react-router-dom";

import { StyledLink, Li } from "../style/style";

const GuestNav = ({ signIn, register }) => {
  const { pathname } = useLocation();
  return (
    <>
     <Li> <StyledLink onClick={signIn} to='/login' isActive={pathname === "/login"}>
        כניסה
      </StyledLink></Li>

      <Li> <StyledLink
        onClick={register}
        to='/register'
        isActive={pathname === "/register"}
      >
        הרשמה
      </StyledLink></Li>
    </>
  );
};

export default GuestNav;
