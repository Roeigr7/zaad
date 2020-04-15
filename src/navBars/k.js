import { PageLayout } from "../style";

import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import NoticeBoard from "../components/home/noticeBoard";
import Reviews from "../components/home/ReviewsPortfolio";

import ProjectsList from "../components/projects/projectsList";
import { connect } from "react-redux";
import {
  firebaseConnect,
  firestoreConnect,
  isLoaded,
  withFirestore
} from "react-redux-firebase";
import { compose } from "redux";
import { addReview } from "../Redux/actions/reviewActions";
import { getProjectsFilter } from "../Redux/actions/projectsActions";
import Spinner from "../components/Spinner";

//////////////BUTTON/////////////


  &:hover {
    background: linear-gradient(to bottom, #4279b8 5%, #5277b3 100%);
    background-color: #4279b8;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

const DivLineStyle = styled.div`
  position: relative;
  left: 20px;
  display: flex;
  box-sizing: border-box;
  margin: 0 auto;
  height: 3px;
  background-image: linear-gradient(to right, rgb(63, 114, 155), #d1d1d1);
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    position: relative;
    left: 0px;
  }
`;

const H3 = styled.h3`
  text-align: ${p => (p.center ? "center" : "left")};
`;
const P = styled.p`
  text-align: ${p => (p.center ? "center" : "left")};
  font-family: "Roboto", sans-serif;
`;

///////////UP CONTENT///////////////
const UpContent = styled.div`
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 10px;
  border: 3px solid yellow;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
/////////////////////1-CONTAINER UP///////////////////
const ContainerUp = styled.div`
  border: 3px solid orange;
  display: block;
  position: relative;
  width: 100%;
  margin: 0;
  padding: 15px;
  /* background-color: rgb(209, 209, 209); */
  min-height: 30%;
  box-sizing: border-box;
  font-family: "Open Sans";
  text-align: center;

  @media (max-width: 768px) {
    position: relative;
  }
`;

const ContainerMid = styled(ContainerUp)`
  text-align: left;
  padding: 0;
  min-height: 30%;
  border: 3px solid red;
  overflow: hidden;
  /* background-color: rgb(168, 168, 168); */
`;

const ContainerBot = styled(ContainerUp)`
  min-height: 30%;
  clear: left;
`;

const Footer = styled.div`
  height: 10%;
  background-color: black;
  position: relative;
  display: block;

  width: 100%;
  @media (max-width: 768px) {
    position: relative;
  }
`;
const Square = styled.div`
  border: 1px solid yellow;
  position: relative;
  width: 25%;
  float: left;
  background-color: ${p => (p.dif ? "rgb(11,101,3)" : "rgb(57,111,0)")};
  height: 200px;

  font-family: "Open Sans";
  @media (max-width: 768px) {
    width: 50%;
  }
`;

///========================================================//////
class HomePage extends Component {
  async componentDidMount() {
    let projects = await this.props.getProjectsFilter(3);
  }
  render() {
    console.log("lil", this.props.reviews);
    const { projects, reviews, addReview } = this.props;
    console.log("23", reviews);
    if (!isLoaded(projects)) return <Spinner />;
    return (
      <PageLayout>
        <ContainerUp>
          <NoticeBoard />
          <UpContent>
            <H3 center>
              ZAAD PRODUCTIONS
              <DivLineStyle />
            </H3>
            <TextArea name='d'>
              dssssssssssssssshjd dskjh jsdkhj khdsj sdkjh{" "}
            </TextArea>
            {/* <P>here i put full of con i put full of contenthere i put full of contentllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll</P> */}
            <Button>Submit</Button>
          </UpContent>
        </ContainerUp>
        <ContainerMid>
          <ProjectsList projects={projects} />
        </ContainerMid>
        <ContainerBot>
          <Reviews reviews={reviews} addReview={addReview} />
        </ContainerBot>
        <Footer />
      </PageLayout>
    );
  }
}

const actions = {
  getProjectsFilter,
  addReview
};
const mapStateToProps = state => ({
  projects: state.projects,
  reviews: state.firestore.ordered.Reviews
});
export default connect(
  mapStateToProps,
  actions
)(
  firestoreConnect([{ collection: "Projects" }, { collection: "Reviews" }])(
    HomePage
  )
);
