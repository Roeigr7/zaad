import React from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "./fields/TextInput";
import { combineValidators, isRequired } from "revalidate";

import { connect } from "react-redux";
import { startEmailPasswordLogin } from "../Redux/actions/authActions";
import { ModalIcon,Button, Form, FormTitle, FormButtons } from "../style/style";
import Spinner from "../components/features/Spinner";



const validate = combineValidators({
  email: isRequired({ message: "Insert email !" }),
  name: isRequired({ message: "Insert passowrd !" })
});


const LoginForm = ({loading,closeModal,reset,handleSubmit,startEmailPasswordLogin,error}) => {
    return (
    
 
           <Form small
            onSubmit={handleSubmit(startEmailPasswordLogin)}> 
        {loading? (<Spinner/>):(
          <>
  <ModalIcon onClick={() =>(closeModal())}><i className="fas fa-times"></i></ModalIcon>
  <FormTitle>התחבר</FormTitle>

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

        <FormButtons>
    <Button cancel onClick={() =>(closeModal())}>בטל</Button>
        <Button  onClick={reset}>נקה הכל</Button>
        <Button success type='submit'>התחבר</Button>   
        </FormButtons>
        </>
        )}
      </Form>   

  );
};

const mapStateToProps=(state)=>({
  loading: state.async.loading
 })
const actions=dispatch=>({
startEmailPasswordLogin: (creds)=>dispatch(startEmailPasswordLogin(creds))
})
export default connect(mapStateToProps,actions)
(reduxForm({ form: "LoginForm", validate })(LoginForm));

