import React from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "../forms/fields/TextInput";
import { combineValidators, isRequired } from "revalidate";
import TextAreaInput from "../forms/fields/TextArea";
import { connect } from "react-redux";

import {
  Button,
  Form,
  FormTitle,
  FormButtons,
} from "../style/style";
import { PageLayout } from "../style/style";
import { addNewRequest } from "../Redux/actions/requestsAction";


const SendRequestPage = ({ history,handleSubmit, reset, addNewRequest }) => {
  const handleRequestSubmit = (values) => {
    addNewRequest(values);
    history.goBack();

  };
  return (
    <PageLayout>

      <Form onSubmit={handleSubmit(handleRequestSubmit)}>
      <FormTitle>המסלול המהיר</FormTitle>
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

export default 
  connect(
    null,
    actions
  )(reduxForm({ form: "RequestForm" })(SendRequestPage));
