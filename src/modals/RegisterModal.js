import React from "react";
import {  ModalContainer } from "../style/style";
import { connect } from "react-redux";
import { closeModal } from "../Redux/actions/modalsActions";

import RegisterForm from "../forms/RegisterForm";

const RegisterModal = ({ closeModal }) => {
  return (
    <ModalContainer>
          <RegisterForm closeModal={closeModal} />
      </ModalContainer>

  );
};

const actions = {
  closeModal
};

export default connect(null, actions)(RegisterModal);
