import React from "react";
import { connect } from "react-redux";
import { Option, Select } from "../../style/style";
import accontNav from '../../'


const AccountNav = ({user,history}) => {
 

  return (
<Select dir="rtl" 
        onChange={(e)=>{  
         history.push(`${e.target.value}`);  
  
          }}>

 <Option value='/account/details'>הפרטים שלי</Option>
  <Option value='/account/projects'>הפרויקטים שלי</Option>
  <Option value='/account/changepassword'>שנה סיסמא</Option>
  {user&& (
  <Option value='/account/requests'>הודעות מלקוחות</Option>
  )}
  </Select>
  );
};

const MapStateToProps = state => ({
  user: state.auth.user
 
});
export default connect(MapStateToProps,null)(AccountNav);