import React from "react";
import "./App.css";
import { Router, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PortfolioPage from "./Pages/PortfolioPage";
import PageNotFound from "./notFoundPage";
import ContactPage from "./Pages/ContactPage";
import CustomersPage from "./Pages/CustomersPage";
import ProjectPage from "./Pages/ProjectPage";
import ScrollToTop from 'react-router-scroll-top'
import AboutPage from "./Pages/AboutPage";
import AccountPage from "./Pages/AccountPage";
import SendRequestPage from "./Pages/SendRequestPage";
import AddProjectPage from "./Pages/addProjectPage";
import EditProjectPage from "./Pages/EditProjectPage";
import { createBrowserHistory } from "history";
import PrivateRoute from "./RoutesAuth/PrivateRoute";
import AdminRoute from "./RoutesAuth/AdminRoute";
import PublicRoute from "./RoutesAuth/PublicRoute";
import ModalManager from "./modals/ModalManager";
import MainNavBar from "./navBars/MainNavBar";
import BottomNavBar from "./navBars/BottomNavBar";
import StartPage from "./StartPage";
import IconsBar from "./navBars/IconsBar";
import { GlobalStyle, SiteContainer } from "./style/style";

export const history = createBrowserHistory();

const App=()=>{
    return (
<>
        <GlobalStyle />
        <ModalManager />

        <Router history={history}>
        <ScrollToTop>
          <SiteContainer>
          <MainNavBar />
          <Switch>
          <Route exact path='/' component={StartPage} />
            <Route exact path='/home' component={HomePage} />
            <Route path='/contact' component={ContactPage} />
            <Route path='/about' component={AboutPage} />
            <Route exact path='/portfolio' component={PortfolioPage} />
            <Route path='/portfolio/:id' component={ProjectPage} />
            <Route path='/sendrequest' component={SendRequestPage} />
            <Route path='/customers' component={CustomersPage} />
            <AdminRoute path='/addproject' component={AddProjectPage} />
            <PublicRoute path='/register' component={HomePage} />
            <PublicRoute path='/login' component={HomePage} />
            <PrivateRoute path='/edit/:id' component={EditProjectPage} />
            <PrivateRoute path='/account' component={AccountPage} />
            <Route component={PageNotFound} />
          </Switch>
          </SiteContainer>
          <IconsBar/>
          <BottomNavBar />
          </ScrollToTop>
        </Router>
</>
  );
  
}


export default App;
