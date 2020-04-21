import React, { Component } from "react";
import Reviews from "../components/home/ReviewsPortfolio";
import ProjectsList from "../components/projects/projectsList";
import { connect } from "react-redux";
import { addReview, getReviewsLocal } from "../Redux/actions/reviewActions";
import { getHomePageProjects } from "../Redux/actions/projectsActions";
import Spinner from "../components/Spinner";
import {PageLayout,ContainerUp,ContainerMid, H4, LogoTitle} from "../style/style";

import logoTitle from "../utilities/logoTitle.png";
import {titleText} from '../utilities/constAccessories'


///========================================================//////
class HomePage extends Component {

  async componentDidMount() {

await this.props.getHomePageProjects();
  }

  render() {
  const { loading,projects, reviews, addReview } = this.props;
if (loading) return <Spinner />;
    return (
      <PageLayout>
        
        <ContainerUp>
         
         <LogoTitle src={logoTitle} alt='zaadlogo'/>{titleText}
        </ContainerUp>
        <ContainerMid>
      <H4>פרויקטים אחרונים</H4>
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
  auth:state.auth.authenticated,
  loading: state.async.loading

});
export default connect(
  mapStateToProps,
  actions
)(
    HomePage
  )

