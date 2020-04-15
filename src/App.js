import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import PageNotFound from "./notFoundPage";
import ContactPage from "./Pages/ContactPage";
import ProjectPage from "./Pages/ProjectPage";

import AboutPage from "./Pages/AboutPage";
import AccountPage from "./Pages/AccountPage";
import SendRequestPage from "./Pages/SendRequestPage";
import AddProjectPage from "./Pages/addProjectPage";
import EditProjectPage from "./Pages/EditProjectPage";
import { createBrowserHistory } from "history";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import ModalManager from "./modals/ModalManager";
import { createGlobalStyle } from "styled-components";
import MainNavBar from "./navBars/MainNavBar";
import BottomNavBar from "./navBars/BottomNavBar";
import StartPage from "./StartPage";


export const history = createBrowserHistory();

const GlobalStyle = createGlobalStyle`
	body{
    background: linear-gradient(180deg, rgba(60,115,140,1) 0%, rgba(15,31,47,1) 84%);
    font-family: 'Heebo', sans-serif;
    background-repeat: no-repeat;
    background-size:cover;
 text-align: center;
height:100%;
		margin: 0;
		color: black;

	}
`;

const App=()=>{
    return (
<>
        <GlobalStyle />
        <ModalManager />

        <Router history={history}>

          <MainNavBar />
          <Switch>
          <Route exact path='/' component={StartPage} />
            <Route exact path='/home' component={HomePage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/about' component={AboutPage} />
            <Route exact path='/portfolio' component={PortfolioPage} />
            <Route path='/portfolio/:id' component={ProjectPage} />
            <Route path='/sendrequest' component={SendRequestPage} />

            <PrivateRoute path='/addproject' component={AddProjectPage} />
            <PublicRoute path='/register' component={HomePage} />
            <PublicRoute path='/login' component={HomePage} />
            <PrivateRoute path='/edit/:id' component={EditProjectPage} />
            <PrivateRoute path='/account' component={AccountPage} />
            <Route component={PageNotFound} />
          </Switch>
          <BottomNavBar />
        </Router>
</>
  );
  
}


export default App;