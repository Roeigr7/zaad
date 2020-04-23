import React from "react";
import {ButtonSpecial,TitleAccordion ,AccordionContent, P, Span, ContainerAccordion} from "../../../style/style";
import { useHistory } from "react-router";
import { format } from "date-fns";
import { connect } from "react-redux";
import {deleteRequest} from '../../../Redux/actions/requestsAction';


const RequestItem = ({deleteRequest,onClickParent,read,id,companyname,contactname,phone,open,email,projecttarget,additional,createdAt,index,toggleReq}) => {
let history = useHistory()
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
 <P small right><Span>טלפון: </Span>{phone}</P>
 <P small right><Span>אימייל: </Span> {email}</P>
 <P  small right><Span>מטרת הפרויקט: </Span>{projecttarget}</P>
 <P small right><Span>בקשות נוספות: </Span>{additional}</P>
 <P small right date><Span>נשלח בתאריך: </Span>{createdAt&& format (createdAt.toDate(), 'dd/MM/yyyy')}</P> 
 <ButtonSpecial onClick={()=>onClickParent(id,read)}>{title(read)}</ButtonSpecial>
  <>  
    {/* //////////Delete button///////   */}
           <ButtonSpecial right delete
         onClick={async() => {
           if (window.confirm('Are you sure you wish to delete this item?')){
         await deleteRequest(id)
          history.go()
           }
         }}
       >
מחק לתמיד  
       </ButtonSpecial>
         </>
 </AccordionContent>
 </ContainerAccordion>

)}



const actions = {
deleteRequest
};

export default connect(null,actions)(RequestItem);

