import React, { Fragment} from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../Form/TextInput";
import { combineValidators, isRequired,matchesField,composeValidators } from "revalidate";

const validate = combineValidators({
  passOne: isRequired({ message: "require password !" }),
  passTwo: composeValidators(
    isRequired({ message: "plese confirm passowrd !" }),
    matchesField('passOne')({message: 'pasord dont match!'})
  )()
});


const AccountSettings = ({providerId,error,handleSubmit,updatePassword}) => {
  console.log(providerId)
    return (

    <Fragment>
      {providerId&&providerId==='password'&&

           <form
            onSubmit={handleSubmit(updatePassword)}> 

        <Field
          name='passOne'
          component={TextInput}
          type='password'
          placeholder='pokokl'
        />
        <Field
          name='passTwo'
          component={TextInput}
          type='password'
          placeholder='password'
        />
        {error&&<label>ko{error}</label>}

        <button type='submit'>submit</button>
      </form>
}
    </Fragment>
  );
};


export default 
reduxForm({ form: "ChangePasswordForm", validate })(AccountSettings);

