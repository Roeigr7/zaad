import React, { useState } from "react";
import AnimateHeight from 'react-animate-height';
import { useLocation } from "react-router-dom";
import logo from "../utilities/logo.png";
import logoRes from "../utilities/logoRes.png";
import { openModal } from "../Redux/actions/modalsActions";
import { connect } from "react-redux";
import MemberNav from "./MemberNav";
import GuestNav from "./GuestNav";

import {
  HeaderWrapper,
  MobileMenuIcon,
  Menu,Hamburger,
  StyledLink,
  Logo,LogoRes,
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

  const toggle=()=>{
    setMenuOpen(s => !s);
    setHeight(height === 46 ? 'auto' : 46);
  }
 
  return (
    
    <HeaderWrapper>
       <AnimateHeight duration={700} height={height}>
       <LogoRes src={logoRes} />
      <MobileMenuIcon onClick={toggle}>
        <Hamburger/>
     
      </MobileMenuIcon>

     
        <Menu open={menuOpen}>
        <Ul onClick={()=>menuOpen ? toggle() : undefined}>
          <Li>
            <StyledLink logo to='/home'>
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
            <Li><StyledLink yellow
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

            <StyledLink yellow
              to='/sendrequest'
              isActive={pathname === "/sendrequest"}
            >
              מסלול מהיר
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
