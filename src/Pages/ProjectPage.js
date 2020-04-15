import React, { Component }  from "react";
import {connect} from 'react-redux';
import ProjectDetails from "../components/projectPage/ProjectDetails";
import {  isEmpty } from "react-redux-firebase";
import { getProjectsFilter } from "../Redux/actions/projectsActions";
import {BookContainer,ContainerLeft,ContainerRight,ContainerTogether, PageLayout}  from "../style/style";

import ReactPlayer from "react-player";
import '../style/ReactPlayer.css'


class ProjectPage extends Component{

  async componentDidMount() {
  let{match,project}=this.props;
  if(isEmpty(project)) {
    console.log('wwwEMPYTY',match.params.id)
    await this.props.getProjectsFilter(3);
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

<ContainerTogether>
<ContainerLeft>
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
  </ContainerLeft>
  
<ContainerRight>
  <BookContainer>
 <ProjectDetails project={project}/> 
 </BookContainer>
   </ContainerRight>


 
  </ContainerTogether>

      </PageLayout>
    );
  }
}


const actions={
  getProjectsFilter
}
const mapStateToProps = (state,ownProps) => {
  console.log('wwwwwww-mapstateProjectPage')
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
