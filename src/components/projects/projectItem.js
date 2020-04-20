import React from "react";

import { Link } from "react-router-dom";
import "./projectItem.css";
import ReactPlayer from "react-player";


import {
  Square,
  HoverWrapper,
  Content,
  Overlay,
  Icon,Clickable
} from "../../style/style";
import { deleteProject } from "../../Redux/actions/projectsActions";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";
import '../../style/ReactPlayer.css';


const ProjectItem = ({date,deleteProject,id,category, title, videoUrl,user }) => {



  return(
 <Square>
      <HoverWrapper>

    {user&& (
      <>

       {/* //////////////Edit button/////////// */}
      <Link to={`/edit/${id}`}>
          <Icon edit>
            <i className='fa fa-edit'></i>    
          </Icon>  </Link>
   {/* //////////Delete button///////   */}
          <Icon delete
        onClick={() => {
         deleteProject(id);
        }}
      >
<i className='fa fa-trash'></i></Icon>
      </>

    )}
      <Link to={`/portfolio/${id}`}>
        <Overlay>
 <div className='player-wrapper'>
  <ReactPlayer
  
 className='react-player'
            width="100%"
            height="100%"
      
            controls={false}
            url={videoUrl}
          />
</div>
</Overlay>
   </Link>
   <Clickable to={`/portfolio/${id}`}> 

    <Content>{title}</Content></Clickable>
      </HoverWrapper>

  </Square>
);
      }
      
const actions=(dispatch)=>({
  deleteProject: id=>dispatch(deleteProject(id))
})

const MapStateToProps = state => ({
  user: state.firebase.profile
 
});

export default withFirebase(connect(MapStateToProps, actions)(ProjectItem));
