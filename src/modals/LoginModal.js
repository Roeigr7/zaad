import React from "react";

import { connect } from "react-redux";
import { closeModal } from "../Redux/actions/modalsActions";
import LoginForm from "../Form/LoginForm";
import { Button } from "../style/style";


const LoginModal =({closeModal})=> {
  return (
    <div>
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
       </div>
      </div>

    </div>
  );
};

const actions={
  closeModal
}

export default connect(null,actions)(LoginModal);
