import React, { Component } from "react";

import { connect } from "react-redux";
import FormProject from "../components/projectPage/FormProject";
import { isEmpty } from "react-redux-firebase";

import { updateProject } from "../Redux/actions/projectsActions";
import { PageLayout } from "../style/style";

class EditProjectPage extends Component {
  async componentDidMount() {
    let{match,project}=this.props;
    if(isEmpty(project)) {
      console.log('444444444ifwwwEMPYTY',match.params.id)
      await this.props.getSingleProject(match.params.id);
  }
    else{
      console.log('444444442222 tare ',project)
    }
  }
submitEdit = (values) =>{
  console.log('4444444444wqq', values)
    updateProject(values)         
  this.props.history.push("/portfolio")
console.log("1111111111editproject", values);
  }
  render() {

    return (
<PageLayout>
            <FormProject initialValues={this.props.project}
              project={this.props.project}
              onSubmit={this.submitEdit}
              
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
const actions={
  updateProject
}

const mapStateToProps = (state,ownProps) => {

  const urlId=ownProps.match.params.id;
  let project={}
  if(state.projects&&urlId&&state.projects.length>0){

    project=state.projects.filter(project=>project.id===urlId)[0]
  }
  return{
    project,
    initialValues:project
  }
}

export default connect(mapStateToProps,actions)(EditProjectPage)
 

