import React from "react";
import { format } from "date-fns";
import { P, BoxContent, FormTitle } from "../../style/style";

const ProjectDetails = ({ project }) => {
 
  return (
    <BoxContent>
      <FormTitle>{project.title}</FormTitle>

      <P>{project.description}</P>

      <P date> {project.date && format(project.date.toDate(), "dd/MM/yyyy")}</P>
    </BoxContent>
  );
};

export default ProjectDetails;
