import React from "react";

import { connect } from "react-redux";
import { closeModal } from "../Redux/actions/modalsActions";

import RegisterForm from "../Form/RegisterForm";
import {  Button } from "../style/style";
import { ModalContainer} from "./LoginModal";
console.log("COMPONENT ->LoginModal");

const RegisterModal = ({ closeModal }) => {
  return (
    <ModalContainer>

      <div toggle={() => closeModal()} isOpen={true} size='sm'>
        <div>regreg</div>
        <div>
          <RegisterForm closeModal={closeModal} />
        </div>
        <div>
          <Button onClick={() => closeModal()} color='secondary'>
           בטל
          </Button>

      </div></div>
      </ModalContainer>

  );
};

const actions = {
  closeModal
};

export default connect(null, actions)(RegisterModal);
