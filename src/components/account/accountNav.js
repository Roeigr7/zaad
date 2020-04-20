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
<Option value=''>details</Option>
 <Option value='/account/details'>details</Option>
  <Option value='/account/projects'>projects</Option>
  <Option value='/account/changepassword'>pass</Option>
  {user&& (
  <Option value='/account/requests'>messages</Option>
  )}
  </Select>
  );
};

const MapStateToProps = state => ({
  user: state.auth.user
 
});
export default connect(MapStateToProps,null)(AccountNav);