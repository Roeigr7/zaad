import React, {  Component }  from "react";
import {connect} from 'react-redux';
import {  isEmpty } from "react-redux-firebase";
import {  getSingleProject, deleteProject} from "../Redux/actions/projectsActions";
import { PageLayout, FormTitle, P, BoxContent, IconAct}  from "../style/style";

import ReactPlayer from "react-player";
import '../style/ReactPlayer.css'
import { format } from "date-fns";
import { Link } from "react-router-dom";

class ProjectPage extends Component {
 
  async componentDidMount() {
    const {project,match}=this.props
  if(isEmpty(project)) {
    console.log('222222222222111',match.params.id)
    await this.props.getSingleProject(match.params.id);
}
}
render(){
  const { history,deleteProject,project,admin}=this.props
  console.log('ssss1111',history)
return(


<PageLayout>

<BoxContent big>
      <FormTitle>
      {admin&& (
    <>
    
     {/* //////////////Edit button/////////// */}
    <Link to={`/edit/${project.id}`}>
        <IconAct style={{top:'5px',left:'3px'}} edit>
          <i  className='fa fa-edit'></i>   
        </IconAct>  </Link>
 {/* //////////Delete button///////   */}
        <IconAct style={{top:'5px',left:'35px'}} delete
      onClick={async() => {
 if (window.confirm('Are you sure you wish to delete this item?')){
  await deleteProject(project.id)
  history.push('/home'); 
 }     
       
      }}
    >
<i className='fa fa-trash'></i></IconAct>
    </>
  )}
        
        {project.title}</FormTitle>
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

 <P white>{project.description}</P>

<P left date>  
{project.date && format(project.date.toDate(), "dd/MM/yyyy")}</P>

 </BoxContent>
      </PageLayout>
    );
  }

}

const actions={
  getSingleProject,
  deleteProject
}
const mapStateToProps = (state,ownProps) => {
  
  const urlId=ownProps.match.params.id;
  let project={}
  if(state.projects&&urlId&&state.projects.length>0){

    project=state.projects.filter(project=>project.id===urlId)[0]
  }
  return{
    project,
    admin: state.auth.user&&state.auth.user.admin
  }
  
}

export default connect(mapStateToProps,actions)(ProjectPage);


