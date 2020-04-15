import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";
import AccountNav from "../components/account/accountNav";
import AccountDetails from "../components/account/accountDetails";
// import AccountProjects from "../components/account/containers/ProjectsContainer";
import AccountSettings from "../components/account/accountSettings";
import ProfileForm from '../Form/ProfileForm';
import { connect } from "react-redux";
import { updatePassword } from "../Redux/actions/authActions";
// import { updateProfile } from "../Redux/actions/userActions";
import { PageLayout,ContainerLeft,ContainerRight,ContainerTogether } from "../style/style";
import RequestsContainer from "../components/account/containers/requestsContainer";
import styled from "styled-components";
import ProjectsContainer from "../components/account/containers/ProjectsContainer";

//////container details//////
export const CDetails  = styled.div`

width:30%;
display:flex;
flex-direction: column;
border: 1px solid yellow;

margin: 30px 55px 0px 25px;
text-align:right;

@media (max-width: 768px) {
  width:100%;
  margin: 0;
}`


//////container project///////////
export const CProject= styled.div`
  margin: 30px 55px 0px 25px;
  text-align:right;
  float:right;
  width:50%;
  margin-left:10%;
padding:0;
border: 6px solid white;
border-radius: 4px;
box-shadow:0 2px 10px rgba(100,255,150,.8);
  @media (max-width: 768px) {
  width:100%;
  margin: 0;


}`
export const Cont= styled.div`
 border: 1px solid green;
 display:flex;

justify-content:right;

 @media (max-width: 768px) {
   width:100%;
   display:flex;
   flex-direction:column;

 }`
  


const AccountPage = ({user,updatePassword,updateProfile,requests }) => {
console.log("666666user",user)
  console.log('gggg',requests)
  return (
    <PageLayout>
      <ContainerTogether>
        <ContainerLeft>
        <Switch>
          <Redirect exact from='/account' to='/account/details' />
  <Route exact path='/account/details' render={()=><AccountDetails user={user}/> }/>
  <Route path='/account/projects' render={()=><ProjectsContainer user={user}/>}/>  
<Route path='/account/requests' render={()=>( <RequestsContainer/>)}
          
           />
          <Route
            path='/account/settings'
            render={() => (
              <AccountSettings
                updatePassword={updatePassword}
              />
            )}
          />
     <Route path='/account/details/edit' render={()=><ProfileForm initialValues={user} updateProfile={updateProfile}/> }/>
     
        </Switch>
        </ContainerLeft>

        <ContainerRight>

          <AccountNav />
          </ContainerRight>
          </ContainerTogether>


    </PageLayout>
  );
};

const actions = dispatch => ({
  updatePassword: creds => dispatch(updatePassword(creds)),
  //  updateProfile: user=>dispatch(updateProfile(user)),
    // deleteRequest: id=>dispatch(deleteRequest(id))

  });

const mapStateToProps = state => ({
  projects:state.projects,
  user: state.auth.user

  
});
export default connect(mapStateToProps, actions)(AccountPage)

