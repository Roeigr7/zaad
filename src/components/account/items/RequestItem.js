import React from "react";
import {ButtonSpecial,TitleAccordion ,AccordionContent, P, Span, ContainerAccordion} from "../../../style/style";
import { format } from "date-fns";

import { connect } from "react-redux";

const RequestItem = ({onClickParent,read,id,companyname,contactname,phone,open,email,projecttarget,additional,createdAt,index,toggleReq}) => {


const title =(read)=>{
  switch (read) {
    case true:
      return 'העבר לחדשות';
    default: return 'העבר לארכיון';
  }
}
  return(

<ContainerAccordion>
<TitleAccordion onClick={()=>toggleReq(index)} open={open}>{companyname} <Span small thin >{createdAt&& format (createdAt.toDate(), 'dd/MM/yyyy')}</Span></TitleAccordion>
<AccordionContent open={open} >
 <P small right><Span>שם איש קשר: </Span> {contactname} </P>
 <P  small right><Span>טלפון: </Span>{phone}</P>
 <P small right>{email}<Span> :אימייל</Span></P>
 <P  small right><Span>מטרת הפרויקט: </Span>{projecttarget}</P>
 <P small right><Span>בקשות נוספות: </Span>{additional}</P>
 <P small right date><Span>נשלח בתאריך: </Span>{createdAt&& format (createdAt.toDate(), 'dd/MM/yyyy')}</P> 
 <ButtonSpecial onClick={()=>onClickParent(id,read)}>{title(read)}</ButtonSpecial>
 </AccordionContent>
 </ContainerAccordion>

)}
//    {/* //////////Delete button///////  
//           <Icon delete
//         onClick={() => {
//          deleteRequest(id);
//         }}
//       >
// <i class='fa fa-trash'></i></Icon>

//       <Link to={`/portfolio/${id}`}>
// CLICKPO
//    </Link> */}


const actions = {

  // deleteRequest: id=>dispatch(deleteRequest(id))
};

export default connect(null,actions)(RequestItem);

