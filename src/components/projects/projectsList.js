import React from "react";

import ProjectItem from "./projectItem";

export const ProjectsList = ({projects}) => {

  return (
    <>

 {projects&&projects.map(project => {
 return <ProjectItem key={project.id}{...project} />;
      })}
    </>
  );
};

export default ProjectsList;
