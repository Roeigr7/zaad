import React from "react";

import { connect } from "react-redux";
import { closeModal } from "../Redux/actions/modalsActions";
import LoginForm from "../Form/LoginForm";
import { Button } from "../style/style";
import styled from "styled-components";

export const ModalContainer = styled.div`

position:fixed;
z-index:11;
left:0;
top:0;
height:100%;
width:100%;
background-color:rgba(0,0,0,0.5);
`
export const ModalContent = styled.div`
background-color: #33627a;
margin:15% auto;
padding:20px;
width:50%;
border:2px solid gold;
@media(max-width: 768px){
width:80%;
}
`
const LoginModal =({closeModal})=> {
  return (
    <ModalContainer>
      <ModalContent>
      <div
        toggle={() => (closeModal())}
        isOpen={true}
        size='sm'
      >
        <header>loginlogin</header>
        <div>

<LoginForm />
      
        </div>
        <div>
          <Button
            onClick={() =>(closeModal())}
            color='secondary'
          >
            Close
          </Button>
          <Button color='primary'>Save changes</Button>
       </div>    </div>
     </ModalContent>
      </ModalContainer>


  );
};

const actions={
  closeModal
}

export default connect(null,actions)(LoginModal);
