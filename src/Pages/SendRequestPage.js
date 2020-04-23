import React from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "../forms/fields/TextInput";
import { combineValidators, isRequired } from "revalidate";
import TextAreaInput from "../forms/fields/TextArea";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import {
  Button,
  Form,CON,
  FormTitle,
  FormButtons,
} from "../style/style";
import { PageLayout } from "../style/style";
import { addNewRequest } from "../Redux/actions/requestsAction";

const validater = combineValidators({
  contactname: isRequired({ message: "Insert Title !" }),
  // description:composeValidators(
  //   isRequired({message: 'Insert Description !'}),
  //   hasLengthGreaterThan(4)({message: 'description at least 5 characters !'})
  // )(),
  //   videoUrl:isRequired({message: 'Insert videoUrl !'}),
  // category:isRequired({message: 'Choose Category !'}),
});
const SendRequestPage = ({ history,handleSubmit, reset, addNewRequest }) => {
  const handleRequestSubmit = (values) => {
    addNewRequest(values);

  };
  console.log('kkkkkkkkkkkk',history)
  return (
    <PageLayout>

      <Form onSubmit={handleSubmit(handleRequestSubmit)}>
      <FormTitle>הגש בקשה</FormTitle>
        <Field
          name='contactname'
          component={TextInput}
          type='text'
          ph='שם איש קשר'
        />
        <Field
          name='companyname'
          component={TextInput}
          type='text'
          ph='שם החברה'
        />
        <Field
          name='phone'
          component={TextInput}
          type='text'
          ph='מספר פלאפון'
        />

        <Field
          name='email'
          type='email'
          component={TextInput}
          ph='כתובת מייל'
        />
        <Field
          name='story'
          type='text'
          component={TextAreaInput}
          ph='ספר קצת על העסק'
        />
        <Field
          name='projecttarget'
          type='text'
          component={TextAreaInput}
          ph='מטרת הפרויקט שתרצה'
        />
        <Field
          name='additional'
          type='text'
          component={TextInput}
          ph='?משהו נוסף'
        />
        <FormButtons>
     <Button cancel onClick={()=>history.goBack()}>בטל</Button>
        <Button  onClick={reset}>נקה הכל</Button>
        <Button success type='submit'>שלח</Button>  
        </FormButtons>
      </Form>

    </PageLayout>
  );
};

const actions = {
  addNewRequest,
};

export default withFirestore(
  connect(
    null,
    actions
  )(reduxForm({ form: "RequestForm", validater })(SendRequestPage))
);
