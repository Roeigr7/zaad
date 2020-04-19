import React, { Component } from "react";
import Reviews from "../components/home/ReviewsPortfolio";
import ProjectsList from "../components/projects/projectsList";
import { connect } from "react-redux";
import { addReview, getReviewsLocal } from "../Redux/actions/reviewActions";
import { getHomePageProjects } from "../Redux/actions/projectsActions";
import Spinner from "../components/Spinner";
import {PageLayout,ContainerUp,ContainerMid, H1, P} from "../style/style";
import styled from "styled-components";
import logoTitle from "../utilities/logoTitle.png";

export const LogoTitle = styled.img`
width:55%;
`

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
         
         <LogoTitle src={logoTitle} alt='zaadlogo'/>
  
<P>אנחנו מתמחים בהפקות וידאו וסאונד בכל המישורים.
החל מכתיבת התסריט, תכנון הסטורי בורד, תוך בימוי, צילום ,הקלטות, הנפשות, עד רמת המוצר המוגמר. כמו כן, יש לנו אולפן הקלטות מקצועי המתמחה בהפקות מוזיקליות, הקלטות ומיקס לרמת סאונד המקסימלית. תציצו בתיק העבודות המשובח שלנו, ותמצאו טירוף של סרטי תדמית, סרטי מוצר, סרטים לקמפיינים ברשתות החברתיות, מוסיקה ועוד.

</P>
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
  auth:state.auth.authenticated,
  loading: state.async.loading

});
export default connect(
  mapStateToProps,
  actions
)(
    HomePage
  )

