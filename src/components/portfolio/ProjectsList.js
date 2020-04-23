import React from "react";
import ProjectItem from "./ProjectItem";

export const ProjectsList = ({projects}) => {
  return (
    <>
 {projects&&projects.map(project => {
 return <ProjectItem key={project.id} {...project} />;
      })}
    </>
  );
};
export default ProjectsList;
