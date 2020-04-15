import React, { Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "./TextInput";
import { combineValidators, isRequired } from "revalidate";
import { connect } from "react-redux";
import { startRegister} from "../Redux/actions/authActions";
import { Form } from "../style/Form";
import { Button } from "../style/style";


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
      <Form onSubmit={handleSubmit(startRegister)}>
      <Field
          name='fullName'
          component={TextInput}
          type='text'
          ph='שם מלא'
        />
        <Field
          name='companyName'
          component={TextInput}
          type='text'
          ph='שם החברה'
        />
          <Field
          name='phone'
          component={TextInput}
          type='text'
          ph='טלפון'
        />
        
        <Field
          name='email'
          component={TextInput}
          type='text'
          ph='אימייל'
        />
        <Field
          name='password'
          component={TextInput}
          type='password'
          ph='סיסמא'
        />
        {error && <label>{error}</label>}

        <Button type='submit'>הירשם</Button>
      </Form>
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
