import React, { Component } from "react";

import { connect } from "react-redux";
import FormProject from "../components/projectPage/FormProject";
import { withFirestore } from "react-redux-firebase";
import { toastr } from "react-redux-toastr";
import { updateProject } from "../Redux/actions/projectsActions";
import { PageLayout } from "../style/style";

class EditProjectPage extends Component {
  async componentDidMount() {
    console.log('baaaaaaaa')
    const { firestore, match, history } = this.props;
    let project = await firestore.get(`projects/${match.params.id}`);
console.log('b')

    if (!project.exists) {
      history.push("/portfolio");
      toastr.error("Sorry", "Project Not Found");
    }
  }
  render() {

    return (
<PageLayout>


            <FormProject initialValues={this.props.project}
              project={this.props.project}

              onSubmit={project => {
                console.log('wqq', project)
                this.props.dispatch(
                  updateProject(project)
                );
                this.props.history.push("/portfolio");
                console.log("editproject", project);
              }}
            />

          {/* <button
          onClick={() => {
            props.dispatch(startDeleteProject({ id: props.project.id }));
            props.history.push("/portfolio");
          }}
        >
          remove
        </button> */}
</PageLayout>
    );
  }
}
const actions=()=>({
  updateProject
})

const mapStateToProps = (state, ownProps) => {

  const projectId = ownProps.match.params.id;
  let project = {};
  if (
    state.firestore.ordered.projects &&
    projectId &&
    state.firestore.ordered.projects.length > 0
  ) {
    project = state.firestore.ordered.projects.filter(
      project => project.id === projectId
    )[0];
  }
  return {
    project,
    initialValues:project

  };

};

export default withFirestore(
  connect(mapStateToProps,actions)(EditProjectPage)
);   

