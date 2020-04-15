import React, { Fragment} from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "./TextInput";
import { combineValidators, isRequired } from "revalidate";

const validate = combineValidators({
  email: isRequired({ message: "Insert email !" }),
  name: isRequired({ message: "Insert passowrd !" })
});


const ProfileForm = ({updateProfile,handleSubmit,error}) => {

    return (

    <Fragment>
           <form
            onSubmit={handleSubmit(updateProfile)}> 
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
        {error&&<label>{error}</label>}

        <button type='submit'>sjubmit</button>
      </form>
    </Fragment>
  );
};

export default 
reduxForm({ form: "ProfileForm", validate,enableReinitialize:true,destroyOnUnmount:false} )(ProfileForm);

