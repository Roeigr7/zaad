import React from "react";
import { format } from "date-fns";
import { P, Form, FormTitle } from "../../style/style";

const ProjectDetails = ({ project }) => {
  return (
    <Form>
      <FormTitle>{project.title}</FormTitle>

      <P>{project.description}</P>

      <P date> {project.date && format(project.date.toDate(), "dd/MM/yyyy")}</P>
    </Form>
  );
};

export default ProjectDetails;
