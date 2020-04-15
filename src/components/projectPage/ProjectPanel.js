import React from "react";

import { Link } from "react-router-dom";

const ProjectPanel = ({id}) => {


console.log('ssssssssssssssssssss',id)
  return (
<>
        <button>Primary</button>


        <Link to={`/edit/${id}`}>
          <button> edit</button>
        </Link>

        <Link to={"/portfolio"}>
          {/* <ButtonDelete id={id} /> */}
        </Link>
</>
  );
};
export default ProjectPanel;
