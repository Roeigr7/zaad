import React from "react";
import { ModalContainer } from "../style/style";
import LoginForm from "../forms/LoginForm";
import { connect } from "react-redux";
import { closeModal } from "../Redux/actions/modalsActions";

const LoginModal = ({ closeModal }) => {
  return (
    <ModalContainer>
      <LoginForm closeModal={closeModal} />
    </ModalContainer>
  );
};

const actions = {
  closeModal,
};

export default connect(null, actions)(LoginModal);
