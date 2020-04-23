import React from "react";
import { Button, FormButtons,Form, FormTitle } from "../../style/style";
import TextInput from "../../forms/fields/TextInput";
import { reduxForm, Field } from "redux-form";
import { combineValidators, isRequired,matchesField,composeValidators } from "revalidate";
import { useHistory } from "react-router";

const validate = combineValidators({
  newPass: isRequired({ message: "הקש סיסמא חדשה" }),
  newPassTwo: composeValidators(
    isRequired({ message: "הכנס סיסמא חדשה בשנית" }),
    matchesField('newPass')({message: 'סיסמא לא זהה'})
  )()
});


const ChangePassword = ({reset,error,handleSubmit,updatePassword}) => {
  let history = useHistory();
  
 const submitUpdate=async(values)=>{
  await updatePassword(values)
  history.goBack()
 }
  return (
           <Form
            onSubmit={handleSubmit(submitUpdate)}> 
<FormTitle>שנה סיסמא</FormTitle>
        <Field
          name='currentPassword'
          component={TextInput}
          type='password'
          ph='סיסמא נוכחית'
        />
        <Field
          name='newPass'
          component={TextInput}
          type='password'
          ph='סיסמא חדשה'
        />
       <Field
          name='newPassTwo'
          component={TextInput}
          type='password'
          ph='אישור סיסמא חדשה'
        />
        {error&&<label>{error}</label>}

        <FormButtons>
     <Button  onClick={reset}>נקה הכל</Button>
     <Button success type='submit'>שנה סיסמא</Button>
     </FormButtons>
      </Form>
  );
};


export default 
reduxForm({ form: "ChangePasswordForm", validate })(ChangePassword);

