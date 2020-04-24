import React from "react";
import {PageLayout, ContainerUp,} from "../style/style";
import { Switch,  Redirect, Route } from "react-router-dom";
import AccountNav from "../components/account/AccountNav";
import AccountDetailsPage from "../components/account/AccountDetailsPage";
import ChangePasswordPage from "../components/account/ChangePasswordPage";
import RequestsPage from "../components/account/requests/RequestsPage";
import ProjectsUserPage from "../components/account/ProjectsUserPage";
import ProfileForm from "../forms/ProfileForm";
import { connect } from "react-redux";
import { updatePassword } from "../Redux/actions/authActions";
import { updateProfile } from "../Redux/actions/userActions";


const AccountPage = ({history , user, updatePassword, updateProfile, requests }) => {

  const detailsCancel=()=>{
    history.push("/account/details");
  }
  return (
    <PageLayout>
<ContainerUp>
          <AccountNav history={history} />
          </ContainerUp>
{/* ///////////////////LEFT---->PAGES/////////////////////////////////// */}

          <Switch>
            <Redirect exact from='/account' to='/account/details' />
          
            <Route
               exact path='/account/details'
              render={() => <AccountDetailsPage user={user} />}
            />
            <Route
              path='/account/projects'
              render={() => <ProjectsUserPage user={user} />}
            />
            <Route
              path='/account/requests'
              render={() => <RequestsPage />}
            />
            <Route
              path='/account/changepassword'
              render={() => <ChangePasswordPage updatePassword={updatePassword} />}
            />
            <Route
              path='/account/details/edit'
              render={() => (
         
                <ProfileForm cancel={detailsCancel}
                  initialValues={user}
                  updateProfile={updateProfile}
                />
              )}
            />
          </Switch>

  
    </PageLayout>
  );
};

const actions = {
  updatePassword,
   updateProfile,
};

const mapStateToProps = (state) => ({
  projects: state.projects,
user:state.firebase.profile
});
export default connect(mapStateToProps, actions)(AccountPage);
