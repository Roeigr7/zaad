import React, { Fragment } from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "./fields/TextInput";
import { combineValidators, isRequired, composeValidators, matchesField } from "revalidate";
import { connect } from "react-redux";
import { startRegister} from "../Redux/actions/authActions";
import { Form, ModalIcon, FormTitle } from "../style/Form";
import { Button, FormButtons } from "../style/style";
import Spinner from "../components/features/Spinner";


const validate = combineValidators({
  email: isRequired({ message: "Insert email !" }),
  name: isRequired({ message: "Insert passowrd !" }),
  newPass: isRequired({ message: "הקש סיסמא חדשה" }),
  passTwo: composeValidators(
    isRequired({ message: "הכנס סיסמא חדשה בשנית" }),
    matchesField('password')({message: 'סיסמא לא זהה'})
  )()
});

const RegisterForm = ({
  handleSubmit,
  startRegister,
  closeModal,
  loading,
  reset,
  error
}) => {

  const registerSubmit=async(values)=>{
    await startRegister(values);
    closeModal();
  }
  return (
    <Fragment>
      <Form onSubmit={handleSubmit(registerSubmit)}>
      {loading? (<Spinner/>):(
          <>
      <ModalIcon onClick={() =>(closeModal())}><i class="fas fa-times"></i></ModalIcon>
  <FormTitle>הרשמה</FormTitle>
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
<Field
name='passTwo'
component={TextInput}
type='password'
ph='אישור סיסמא'
/>
        {error && <label>{error}</label>}

        <FormButtons>
    <Button cancel onClick={() =>(closeModal())}>בטל</Button>
        <Button  onClick={reset}>נקה הכל</Button>
        <Button success type='submit'>הירשם</Button> 
        </FormButtons>
        </>
        )}
      </Form>
    </Fragment>
  );
};
const mapStateToProps=(state)=>({
  loading: state.async.loading
 })

const actions = {
  startRegister
};
export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "RegisterForm", validate })(RegisterForm));
