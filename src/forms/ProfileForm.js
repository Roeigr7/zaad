import React from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "./fields/TextInput";
import { useHistory } from "react-router";
import { combineValidators, isRequired } from "revalidate";
import { Form, FormTitle } from "../style/Form";
import { FormButtons, Button } from "../style/style";

const validate = combineValidators({
  email: isRequired({ message: "Insert email !" }),
  name: isRequired({ message: "Insert passowrd !" })
});


const ProfileForm = ({cancel,updateProfile,handleSubmit,error}) => {

  let history = useHistory();
    
const submitProfile=async(values)=>{
  await updateProfile(values);
  history.goBack();
}
  
  return (

           <Form
            onSubmit={handleSubmit(submitProfile)}>
              <FormTitle>שנה פרטים</FormTitle> 
      <Field
          name='fullName'
          component={TextInput}
          type='text'
          ph='Full Name'
        />
        <Field
          name='companyName'
          component={TextInput}
          type='text'
          ph='Company Name'
        />


          <Field
          name='phone'
          component={TextInput}
          type='text'
          ph='Phone'
        />
        
        <Field
          name='email'
          component={TextInput}
          type='text'
          ph='email'
        />
        <Field
          name='password'
          component={TextInput}
          type='password'
          ph='password'
        />
        {error&&<label>{error}</label>}

        <FormButtons>

        <Button cancel onClick={cancel}>בטל</Button>
        <Button success type='submit'>שמור שינויים</Button>   
        </FormButtons>
      </Form>

  );
};

export default 
reduxForm({ form: "ProfileForm", validate,enableReinitialize:true,destroyOnUnmount:false} )(ProfileForm);

