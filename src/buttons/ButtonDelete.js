
import React from "react";
import { deleteProject } from "../Redux/actions/projectsActions";
import { connect } from "react-redux";
import { Icon } from "../style/style";

const ButtonDelete = ({ deleteProject,id }) => {
  console.log('hhhhhh',id)
  return (
    
    <Icon delete
        onClick={() => {
         deleteProject(id);
        }}
      >
<i class='fa fa-trash'></i>
        
        </Icon>

  );
};

const actions=(dispatch)=>({
  deleteProject: id=>dispatch(deleteProject(id))
})
export default connect(null,actions)( ButtonDelete);
