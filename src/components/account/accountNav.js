import React from "react";
import { Option, Select } from "../../style/style";
import { connect } from "react-redux";


const AccountNav = ({ user, history }) => {
  return (
    <Select
      dir='rtl'
      onChange={(e) => {
        history.push(`${e.target.value}`);
      }}
    >
      <Option value='/account/details'>הפרטים שלי</Option>
      <Option value='/account/projects'>הפרויקטים שלי</Option>
      <Option value='/account/changepassword'>שנה סיסמא</Option>
      {user && user.admin && (
        <Option value='/account/requests'>הודעות מלקוחות</Option>
      )}
    </Select>
  );
};

const MapStateToProps = (state) => ({
  user: state.firebase.profile,
});
export default connect(MapStateToProps, null)(AccountNav);
