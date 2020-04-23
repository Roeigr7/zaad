import React from "react";
import { connect } from "react-redux";
import {  addNewProject } from "../Redux/actions/projectsActions";
import FormProject from "../forms/FormProject";
import { PageLayout } from "../style/style";


const AddProjectPage = props => (

  <PageLayout>

        <FormProject formTitle={'הוסף פרויקט חדש'}
        cancel={()=>props.history.push("/home")}
          onSubmit={project => {
            props.dispatch(addNewProject(project));
            props.history.push("/portfolio");
          }}
        />

  </PageLayout>
);

export default connect()(AddProjectPage);
