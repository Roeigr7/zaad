import React, { Component } from "react";

import { connect } from "react-redux";
import FormProject from "../components/projectPage/FormProject";
import { isEmpty } from "react-redux-firebase";

import { updateProject,  getSingleProject } from "../Redux/actions/projectsActions";
import { PageLayout } from "../style/style";
import Spinner from "../components/Spinner";

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
submitEdit = async(values) =>{
    await this.props.updateProject(values)         
  this.props.history.push("/portfolio")
  }
  render() {
  if (this.props.loading) return <Spinner/>
    return (
<PageLayout>
            <FormProject initialValues={this.props.project}
              project={this.props.project}
              onSubmit={this.submitEdit}
              
            />

</PageLayout>
    );
  }
}
const actions={
  updateProject,
  getSingleProject
}

const mapStateToProps = (state,ownProps) => {

  const urlId=ownProps.match.params.id;
  let project={}
  if(state.projects&&urlId&&state.projects.length>0){

    project=state.projects.filter(project=>project.id===urlId)[0]
  }
  return{
    project,
    initialValues:project,
    loading: state.async.loading
  }
}

export default connect(mapStateToProps,actions)(EditProjectPage)
 

