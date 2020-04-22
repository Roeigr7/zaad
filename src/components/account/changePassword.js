import React from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../Form/TextInput";
import { combineValidators, isRequired,matchesField,composeValidators } from "revalidate";
import { Form, FormTitle } from "../../style/Form";

const validate = combineValidators({
  newPass: isRequired({ message: "הקש סיסמא חדשה" }),
  newPassTwo: composeValidators(
    isRequired({ message: "הכנס סיסמא חדשה בשנית" }),
    matchesField('newPass')({message: 'סיסמא לא זהה'})
  )()
});


const ChangePassword = ({error,handleSubmit,updatePassword}) => {
    return (


           <Form
            onSubmit={handleSubmit(updatePassword)}> 
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
        {error&&<label>ko{error}</label>}

        <button type='submit'>submit</button>
      </Form>
  );
};


export default 
reduxForm({ form: "ChangePasswordForm", validate })(ChangePassword);

