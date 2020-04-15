// import React, { Fragment } from "react";
// import { reduxForm, Field } from "redux-form";
// import TextInput from "../Form/TextInput";
// import { combineValidators, isRequired } from "revalidate";
// import { startEmailPasswordLogin } from "../Redux/actions/authActions";
// import { connect } from "react-redux";
// import { startSocialLogin } from "../Redux/actions/authActions";

// const validate = combineValidators({
//   email: isRequired({ message: "Insert email !" }),
//   name: isRequired({ message: "Insert passowrd !" })
// });

// const LoginPage = ({ handleSubmit, startEmailPasswordLogin, error }) => {
//   return (
//     <Fragment>
//       <form onSubmit={handleSubmit(startEmailPasswordLogin)}>
//         <Field
//           name='email'
//           component={TextInput}
//           type='text'
//           placeholder='email'
//         />
//         <Field
//           name='password'
//           component={TextInput}
//           type='password'
//           placeholder='password'
//         />
//         {error && <label>{error}</label>}

//         <button type='submit'>sjubmit</button>
//       </form>
//     </Fragment>
//   );
// };

// const actions = dispatch => ({
//   startSocialLogin: () => dispatch(startSocialLogin()),
//   startEmailPasswordLogin: creds => dispatch(startEmailPasswordLogin(creds))
// });
// export default connect(
//   null,
//   actions
// )(reduxForm({ form: "LoginPage", validate })(LoginPage));
