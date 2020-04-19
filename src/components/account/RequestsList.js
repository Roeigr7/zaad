import React, { useState } from "react";

import RequestItem from '../account/items/RequestItem'

export const RequestsList = props => {

  
  
  return(
    <>
       {props.requests&&props.requests.map((request,i) => {
        return <RequestItem  index={i} key={request.id} {...request}  />;
      })} 
</>
  
  )

}

export default RequestsList;