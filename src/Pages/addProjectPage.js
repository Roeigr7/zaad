import React from "react";
import { connect } from "react-redux";
import {  addNewProject } from "../Redux/actions/projectsActions";
import FormProject from "../components/projectPage/FormProject";
import { PageLayout } from "../style/style";


const AddProjectPage = props => (

  <PageLayout>

        <FormProject
        o={()=>props.history.push("/home")}
          onSubmit={project => {
            props.dispatch(addNewProject(project));
            props.history.push("/portfolio");
          }}
        />

  </PageLayout>
);

export default connect()(AddProjectPage);
