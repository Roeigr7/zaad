import React, {  Component } from "react";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../Form/TextInput";
import {composeValidators,hasLengthLessThan,combineValidators,isRequired} from 'revalidate'
import SelectInput from "../../Form/SelectInput";
import TextAreaInput from "../../Form/TextArea";
import DateInput from "../../Form/DateInput";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import { Form,FlexFields , FormTitle, SelectWrapper } from "../../style/Form";
import {Button, FormButtons} from "../../style/style";
import {getAllUsers} from '../../Redux/actions/userActions';

import { categories } from "../../Redux/actions/CategoryList";



const validate=combineValidators({

  title:
  composeValidators(
  isRequired({message: 'לא הוכנסה כותרת'}),
  hasLengthLessThan(75)({message: 'מקסימום 75 תווים'})
  )(),
  description:
  composeValidators(
  isRequired({message: "חובה להכניס תיאור"}),
  hasLengthLessThan(361)({message: 'מקסימום 360 תווים'})
  )(),
    videoUrl:isRequired({message: "לא הוכנס סרטון"}),
  category:isRequired({message: "בחר קטגוריה"}),
  date:isRequired({message: "בחר תאריך"}),
  userId:isRequired({message: "בחר לקוח"}),
})



class FormProject extends Component {

  async componentDidMount(){
    await this.props.getAllUsers();

    }
  onSubmit = values => {
    this.props.onSubmit(values);

  };

  render() {
const {users,reset}= this.props;
  
    return (
  
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <FormTitle>הוסף פרויקט</FormTitle>
          <Field
            name='title'
            component={TextInput}
            type='text'
            ph='תן כותרת'
          />
          <Field
            name='description'
            component={TextAreaInput}
            type='text'
            ph='כתוב תיאור'
          />
          <Field
            name='videoUrl'
            component={TextInput}
            type='text'
            ph='הכנס כתובת סרטון'
            placeholder='Enter Url of the project'
          />
<FlexFields >
<Field
     dateFormat="dd LLL yyyy"
            name='date'
            component={DateInput}
          placeholder='Date'
          ph='הכנס תאריך'
          />
         <SelectWrapper> <Field 
          name='category' type='text'  component={SelectInput} options={categories} placeholder='בחר קטגוריה'>
          </Field></SelectWrapper> 
         
          <SelectWrapper>   <Field 
          name='userId' type='text'  component={SelectInput} options={users} placeholder='שייך לקוח'>
          </Field></SelectWrapper> 
          </FlexFields>
          <FormButtons>
     
    
      <Button cancel onClick={this.props.cancel}>בטל</Button>
      <Button  onClick={reset}>נקה הכל</Button>
      <Button success type='submit'>הוסף פרויקט</Button>
      </FormButtons>
       </Form>


 

    );
  }
}

const actions={
  getAllUsers
}
const mapStateToProps = state => ({
users: state.user.allUsers
})
export default withFirestore(connect(mapStateToProps,actions)
  (reduxForm({ form: "projectForm",validate,enableReinitialize:true })(FormProject)))
