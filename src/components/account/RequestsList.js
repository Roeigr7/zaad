import React from "react";

import RequestItem from "./RequestItem";

export const RequestsList = props => {

  console.log('1111------RequestList')

  
  return(
    <>
       {props.requests&&props.requests.map(request => {
        return <RequestItem key={request.id}{...request} />;
      })} 
</>
  
  )

}

export default RequestsList;