import React from "react";
import { H2, P, Span } from "../../../style/style";
import { format } from "date-fns";




const RequestItem = ({req}) => {
  return(
<>
{req? (<>
<H2>{req.companyname}</H2>
 <P><Span>שם איש קשר: </Span> {req.contactname} </P>
 <P><Span>טלפון: </Span>{req.phone}</P>
 <P>{req.email}<Span> :אימייל</Span></P>
 <P><Span>מטרת הפרויקט: </Span>{req.projecttarget}</P>
 <P><Span>בקשות נוספות: </Span>{req.additional}</P>
 <P date><Span>נשלח בתאריך: </Span>{req.createdAt&& format (req.createdAt.toDate(), 'dd/MM/yyyy')}</P> 
</>
):(
  <H2>lll</H2>
)}
   {/* //////////Delete button///////  
          <Icon delete
        onClick={() => {
         deleteRequest(id);
        }}
      >
<i class='fa fa-trash'></i></Icon>

      <Link to={`/portfolio/${request.id}`}>
CLICKPO
   </Link> */}
</>
 
  )}


export default RequestItem;
