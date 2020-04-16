import React from "react";

import { connect } from "react-redux";
import { closeModal } from "../Redux/actions/modalsActions";
import LoginForm from "../Form/LoginForm";
import { Button } from "../style/style";
import styled from "styled-components";
import Spinner from "../components/Spinner";

export const ModalContainer = styled.div`

position:fixed;
z-index:10;
left:0;
top:0;
height:100%;
width:100%;
box-sizing:border-box;
background-color:rgba(0,0,0,0.7);
`
const LoginModal =({closeModal})=> {
  return (
    <ModalContainer>

<LoginForm  closeModal={closeModal}/>

    </ModalContainer>


  );
};


const actions={
  closeModal
}

export default connect(null,actions)(LoginModal);
