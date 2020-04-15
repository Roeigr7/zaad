import React, { Fragment} from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "./TextInput";
import { combineValidators, isRequired } from "revalidate";

import { connect } from "react-redux";
import { startEmailPasswordLogin } from "../Redux/actions/authActions";
import { Button, Form } from "../style/style";

const validate = combineValidators({
  email: isRequired({ message: "Insert email !" }),
  name: isRequired({ message: "Insert passowrd !" })
});


const LoginForm = ({handleSubmit,startEmailPasswordLogin,error}) => {

    return (

    <Fragment>
           <Form
            onSubmit={handleSubmit(startEmailPasswordLogin)}> 

        <Field 
          name='email'
          component={TextInput}
          type='text'
          placeholder='email'
          ph='אימייל'
        />
        <Field
          name='password'
          component={TextInput}
          type='password'
          placeholder='password'
          ph='סיסמא'
        />
        {error&&<label>{error}</label>}

        <Button success  type='submit'>כנס</Button>
      </Form>
    </Fragment>
  );
};

const actions=dispatch=>({
startEmailPasswordLogin: (creds)=>dispatch(startEmailPasswordLogin(creds))
})
export default connect(null,actions)
(reduxForm({ form: "LoginForm", validate })(LoginForm));

