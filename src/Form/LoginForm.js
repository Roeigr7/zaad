import React, { Fragment} from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "./TextInput";
import { combineValidators, isRequired } from "revalidate";

import { connect } from "react-redux";
import { startEmailPasswordLogin } from "../Redux/actions/authActions";

const validate = combineValidators({
  email: isRequired({ message: "Insert email !" }),
  name: isRequired({ message: "Insert passowrd !" })
});


const LoginForm = ({handleSubmit,startEmailPasswordLogin,error}) => {

    return (

    <Fragment>
           <form style={{backgroundColor:'blue'}}
            onSubmit={handleSubmit(startEmailPasswordLogin)}> 

        <Field 
          name='email'
          component={TextInput}
          type='text'
          placeholder='email'
        />
        <Field
          name='password'
          component={TextInput}
          type='password'
          placeholder='password'
        />
        {error&&<label>{error}</label>}

        <button type='submit'>sjubmit</button>
      </form>
    </Fragment>
  );
};

const actions=dispatch=>({
startEmailPasswordLogin: (creds)=>dispatch(startEmailPasswordLogin(creds))
})
export default connect(null,actions)
(reduxForm({ form: "LoginForm", validate })(LoginForm));

