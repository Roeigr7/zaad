import React from "react";
import {TitleAccordion ,AccordionContent, P, Span, ContainerAccordion} from "../../../style/style";
import { format } from "date-fns";
import transfer from '../../../utilities/transfer.png';

import { connect } from "react-redux";
import {transferToArchive} from '../../../Redux/actions/requestsAction'

const RequestItem = ({onClickParent,history,read,id,transferToArchive,companyname,contactname,phone,open,email,projecttarget,additional,createdAt,index,toggleReq}) => {

  console.log('777777',read,'key',id)
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
 <button  onClick={()=>onClickParent(id,read)}>{companyname} >העבר לארכיון
 <img style={{float:'right',width:'25px'}} alt='' src={transfer}/>
 </button>
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

