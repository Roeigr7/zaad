import React, { Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "./TextInput";
import { combineValidators, isRequired } from "revalidate";
import { connect } from "react-redux";
import { startRegister} from "../Redux/actions/authActions";


const validate = combineValidators({
  email: isRequired({ message: "Insert email !" }),
  name: isRequired({ message: "Insert passowrd !" })
});

const RegisterForm = ({
  handleSubmit,
  startRegister,
  error
}) => {
  return (
    <Fragment>
      <form style={{backgroundColor:'blue'}} onSubmit={handleSubmit(startRegister)}>
      <Field
          name='fullName'
          component={TextInput}
          type='text'
          placeholder='Full Name'
        />
        <Field
          name='companyName'
          component={TextInput}
          type='text'
          placeholder='Company Name'
        />
          <Field
          name='phone'
          component={TextInput}
          type='text'
          placeholder='Phone'
        />
        
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
        {error && <label>{error}</label>}

        <button type='submit'>submit</button>
      </form>
    </Fragment>
  );
};

const actions = dispatch => ({
  startRegister: user => dispatch(startRegister(user)),

});
export default connect(
  null,
  actions
)(reduxForm({ form: "RegisterForm", validate })(RegisterForm));
