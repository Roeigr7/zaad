import React from "react";
import {
  Square,
  HoverWrapper,
  Content,
  Overlay,
  IconAct,
  Clickable,
} from "../../style/style";
import { Link, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import { connect } from "react-redux";
import { deleteProject } from "../../Redux/actions/projectsActions";
import { toastr } from "react-redux-toastr";

const ProjectItem = ({ admin, deleteProject, id, title, videoUrl }) => {
  let history = useHistory();
  return (
    <Square>
      <HoverWrapper>
        {admin && (
          <>
            {/* //////////////Edit button/////////// */}
            <Link to={`/edit/${id}`}>
              <IconAct edit>
                <i className='fa fa-edit'></i>
              </IconAct>{" "}
            </Link>
            {/* //////////Delete button///////   */}
            <IconAct
              delete
              onClick={async () => {
                if (
                  window.confirm("אתה בטוח שתרצה למחוק את הפרויקט?")
                ) {
                  if (id === undefined) {
                    toastr.error("אופס", "לא נמצא פרויקט למחיקה");
                  } else {
                    await deleteProject(id);
                    history.go();
             
                  }
                }
              }}
            >
              <i className='fa fa-trash'></i>
            </IconAct>
          </>
        )}
        <Link to={`/portfolio/${id}`}>
          <Overlay>
            <div className='player-wrapper'>
              <ReactPlayer
                className='react-player'
                width='100%'
                height='100%'
                controls={false}
                url={videoUrl}
              />
            </div>
          </Overlay>
        </Link>
        <Clickable to={`/portfolio/${id}`}>
          <Content>{title}</Content>
        </Clickable>
      </HoverWrapper>
    </Square>
  );
};
const actions = {
  deleteProject,
};

const MapStateToProps = (state) => ({
  admin: state.firebase.profile.admin,
});

export default connect(MapStateToProps, actions)(ProjectItem);
