import React from "react";

import { connect } from "react-redux";
import { closeModal } from "../Redux/actions/modalsActions";

import RegisterForm from "../Form/RegisterForm";
import { PageLayout, Button } from "../style/style";
import { ModalContainer, ModalContent } from "./LoginModal";
console.log("COMPONENT ->LoginModal");

const RegisterModal = ({ closeModal }) => {
  return (
    <ModalContainer>
<ModalContent>
      <div toggle={() => closeModal()} isOpen={true} size='sm'>
        <div>regreg</div>
        <div>
          <RegisterForm />
        </div>
        <div>
          <Button onClick={() => closeModal()} color='secondary'>
           בטל
          </Button>

      </div></div>
      </ModalContent>

</ModalContainer>
  );
};

const actions = {
  closeModal
};

export default connect(null, actions)(RegisterModal);
