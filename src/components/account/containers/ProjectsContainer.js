import React, { Component } from "react";
import { BookContainer, ContainerMid } from "../../../style/style";
import { connect } from "react-redux";
import { getUserProjects} from '../../../Redux/actions/projectsActions';
import styled, { css } from "styled-components";
import Spinner from "../../Spinner";
import ProjectsList from "../../projects/projectsList";


class ProjectsContainer extends Component {

  async componentDidMount(){
    console.log('11118888------didmount PROJPROJContainer',this.props.user.uid)
   await this.props.getUserProjects(this.props.user.uid)
   console.log('11112222------didmount PROJPOROJContainer',this.props.projects)
  }

render(){
  if (this.props.loading) return <Spinner/>
  const { projects} = this.props;
  return (
  <ContainerMid>
<ProjectsList
projects={projects} />
</ContainerMid>
  );
};

}
const actions={
  getUserProjects
  }
  const mapStateToProps=(state)=>({
   projects: state.projects,
   loading: state.async.loading
  })
  export default connect(mapStateToProps,actions)(ProjectsContainer);