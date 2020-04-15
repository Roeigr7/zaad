import React from "react";

import { connect } from "react-redux";
import { closeModal } from "../Redux/actions/modalsActions";

import RegisterForm from "../Form/RegisterForm";
import { PageLayout, Button } from "../style/style";
console.log("COMPONENT ->LoginModal");

const RegisterModal = ({ closeModal }) => {
  return (
    <PageLayout>
      <div toggle={() => closeModal()} isOpen={true} size='sm'>
        <div>regreg</div>
        <div>
          <RegisterForm />
        </div>
        <div>
          <Button onClick={() => closeModal()} color='secondary'>
            Close
          </Button>
          <Button color='primary'>Save changes</Button>

      </div></div>
    </PageLayout>
  );
};

const actions = {
  closeModal
};

export default connect(null, actions)(RegisterModal);
