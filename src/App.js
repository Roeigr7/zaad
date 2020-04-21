import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import PageNotFound from "./notFoundPage";
import ContactPage from "./Pages/ContactPage";
import ProjectPage from "./Pages/ProjectPage";
import ScrollToTop from 'react-router-scroll-top'
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
import IconsBar from "./navBars/IconsBar";


export const history = createBrowserHistory();

const GlobalStyle = createGlobalStyle`
	body{
    background: linear-gradient(180deg, rgba(59, 113, 137,1) 0%, rgba(24, 48, 66,1) 85%);
    font-family: 'Heebo', sans-serif;
    background-repeat: no-repeat;
    background-size:cover;
 text-align: center;

height:100%;
		margin: 0;
    color: black;
    -webkit-tap-highlight-color: rgba(0,0,0,0);

	}
`;

const App=()=>{
    return (
<>
        <GlobalStyle />
        <ModalManager />

        <Router history={history}>
        <ScrollToTop>
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
            <Route path='/edit/:id' component={EditProjectPage} />{/*private*/}
            <Route path='/account' component={AccountPage} />{/*private*/}
            <Route component={PageNotFound} />
          </Switch>
          <IconsBar/>
          <BottomNavBar />
          </ScrollToTop>
        </Router>
</>
  );
  
}


export default App;
