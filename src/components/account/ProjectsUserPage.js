import React, { Component } from "react";
import { ContainerMid } from "../../style/style";
import Spinner from "../features/Spinner";
import ProjectsList from "../portfolio/ProjectsList";
import { connect } from "react-redux";
import { getUserProjects } from "../../Redux/actions/projectsActions";

class ProjectsContainer extends Component {
  async componentDidMount() {
    const { userId } = this.props;
    if (userId) {

      await this.props.getUserProjects(userId);
    }
  }

  render() {
    if (this.props.loading) return <Spinner />;
    const { projects } = this.props;
    return (
      <ContainerMid>
        <ProjectsList projects={projects} />
      </ContainerMid>
    );
  }
}
const actions = {
  getUserProjects,
};
const mapStateToProps = (state) => ({
  projects: state.projects,
  userId: state.firebase.auth.uid,
  loading: state.async.loading,
});
export default connect(mapStateToProps, actions)(ProjectsContainer);
