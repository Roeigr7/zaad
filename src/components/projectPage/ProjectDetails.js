import React from 'react';
import {format} from 'date-fns';
import { H2,P } from '../../style/style';



const ProjectDetails = ({project}) => {
  return (
  <>


  <H2>{project.title}</H2>
<br/>
<P>{project.description}</P>
 
<P date> {project.date && format (project.date.toDate(), 'dd/MM/yyyy')}</P> 
   </>
      )
    }

export default ProjectDetails;