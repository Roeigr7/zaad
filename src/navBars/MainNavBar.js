import React, { useState } from "react";
import AnimateHeight from 'react-animate-height';
import { useLocation } from "react-router-dom";
import logo from "../utilities/logo.png";
import { openModal } from "../Redux/actions/modalsActions";
import { connect } from "react-redux";
import MemberNav from "./MemberNav";
import GuestNav from "./GuestNav";

import {
  HeaderWrapper,
  MobileMenuIcon,
  Menu,M,
  StyledLink,
  Logo,
  Ul,
  Li,
} from "../style/style";
import { logout } from "../Redux/actions/authActions";

const MainNavBar = ({ logout, profile, openModal, auth }) => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [height, setHeight] = useState(46);
  const handleSignIn = () => {
    openModal("LoginModal");
  };
  const handleRegister = () => {
    openModal("RegisterModal");
  };

  return (
    
    <HeaderWrapper>
       <AnimateHeight duration={800} height={height}>
      <MobileMenuIcon onClick={() => {setMenuOpen(s => !s);setHeight(height === 46 ? 'auto' : 46)}}>
        <M/>
      </MobileMenuIcon>

     
        <Menu open={menuOpen}>
        <Ul>
          <Li>

            <StyledLink logo to='/'>
              <Logo src={logo} />
            </StyledLink>
          </Li>

          {/* Member or Guest button if authenticated */}
          {auth ? (
            <MemberNav logout={logout} profile={profile} />
          ) : (
            <GuestNav signIn={handleSignIn} register={handleRegister} />
          )}

          {/* Add project button if authenticated */}
          {auth && (
            <Li><StyledLink style={{color:'yellow'}}
                to='/addproject'
                isActive={pathname === "/addproject"}
              >
                הוסף פרויקט
              </StyledLink></Li>   
          )}

          <Li right>
            {" "}
            <StyledLink to='/contact' isActive={pathname === "/contact"}>
              צור קשר
            </StyledLink>
          </Li>

          <Li>
            {" "}
            <StyledLink to='/about' isActive={pathname === "/about"}>
              עלינו
            </StyledLink>
          </Li>
          <Li>

            <StyledLink
              to='/sendrequest'
              isActive={pathname === "/sendrequest"}
            >
              שלח בקשה
            </StyledLink>
          </Li>

          <Li>
            {" "}
            <StyledLink to='/portfolio' isActive={pathname === "/portfolio"}>
              {" "}
              תיק עבודות
            </StyledLink>
          </Li>
          <Li>
            
            <StyledLink className='s' to='/home' isActive={pathname === "/home"}>
              ראשי
            </StyledLink>
          </Li>
        </Ul>

      </Menu>
      </AnimateHeight>
    </HeaderWrapper>

  );
};

const MapStateToProps = (state) => ({
  profile: state.auth.user,
  auth: state.auth.authenticated,
});
const actions = (dispatch) => ({
  openModal: (modalType, modalProps) => {
    dispatch(openModal(modalType, modalProps));
  },
  logout: () => dispatch(logout()),
});

export default connect(MapStateToProps, actions)(MainNavBar);
