import React, { Component }  from "react";
import {connect} from 'react-redux';

import {  isEmpty } from "react-redux-firebase";
import {   getSingleProject} from "../Redux/actions/projectsActions";
import {ContainerTogether, PageLayout, FormTitle, P, Form}  from "../style/style";

import ReactPlayer from "react-player";
import '../style/ReactPlayer.css'
import { format } from "date-fns";

class ProjectPage extends Component{

  async componentDidMount() {
  let{match,project}=this.props;
  if(isEmpty(project)) {
    console.log('77777777ifwwwEMPYTY',match.params.id)
    await this.props.getSingleProject(match.params.id);
}
  else{
    console.log('wwwwww2222',project)
  }


}


  render(){
    console.log('11113333-ProjecPage render')
const {project}=this.props
console.log('ssssssssss',project)
    return (
      <PageLayout>
<Form big>
      <FormTitle>{project.title}</FormTitle>

<div className='player-wrapper'>
  <ReactPlayer
 className='react-player'
  url={project.videoUrl}
   controls={true}
    light={false}    
    width='100%'
    height='100%'
  />
</div>

 <P>{project.description}</P>

<P left date> {project.date && format(project.date.toDate(), "dd/MM/yyyy")}</P>

 </Form>
      </PageLayout>
    );
  }
}


const actions={

  getSingleProject
}
const mapStateToProps = (state,ownProps) => {

  const urlId=ownProps.match.params.id;
  let project={}
  if(state.projects&&urlId&&state.projects.length>0){

    project=state.projects.filter(project=>project.id===urlId)[0]
  }
  return{
    project
  }
}

export default connect(mapStateToProps,actions)(ProjectPage);
