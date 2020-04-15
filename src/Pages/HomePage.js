import React, { Component } from "react";
import Reviews from "../components/home/ReviewsPortfolio";
import ProjectsList from "../components/projects/projectsList";
import { connect } from "react-redux";
import {
  isLoaded
} from "react-redux-firebase";
import { addReview, getReviewsLocal } from "../Redux/actions/reviewActions";
import { getHomePageProjects } from "../Redux/actions/projectsActions";
import Spinner from "../components/Spinner";
import {PageLayout,ContainerUp,ContainerMid, H1, P} from "../style/style";
import styled from "styled-components";
import logoTitle from "../utilities/logoTitle.png";


export const LogoTitle = styled.img`
width:50%;
`


///========================================================//////
class HomePage extends Component {

  async componentDidMount() {
    console.log('111144444-homePageDidMoount')
await this.props.getHomePageProjects();
  }

  render() {
    console.log('111144444-render')

  const { projects, reviews, addReview } = this.props;

    if (!isLoaded(projects)) return <Spinner />;
    return (
      <PageLayout>
        
        <ContainerUp>
         
         <LogoTitle src={logoTitle} alt='zaadlogo'/>
  
<P>שלום לכולם צעד הפקות בשטח כולם במתח כאן יהיה כל העדגכונים והסרטונים שלנו</P>
        </ContainerUp>
        <ContainerMid>
      <H1>פרויקטים אחרונים</H1>
          <ProjectsList projects={projects} />
        </ContainerMid>

          <Reviews reviews={reviews}
           addReview={addReview} />

      </PageLayout>
    );
  }
}

const actions = {
  getHomePageProjects,
  addReview,
  getReviewsLocal
};
const mapStateToProps = state => ({
  projects: state.projects,
  reviews: state.reviews,
  auth:state.auth.authenticated

});
export default connect(
  mapStateToProps,
  actions
)(
    HomePage
  )

