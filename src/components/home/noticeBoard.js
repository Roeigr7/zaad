import React from "react";

import { Button,TextArea, H2 } from "../../style/style";
import styled from "styled-components";

export const H4=styled.h4`
color:white;
`
export const Pnotice=styled.p`
color:white;
`
export const NoticeContainer = styled.div`
display:block;
margin: 0 auto;
width:50%;
height:150px;
border:1px solid green;
`
const NoticeBoard = ({auth}) => {

console.log('hhhhhhh',auth)
  return (
 <>

{auth?(
  <>
 <TextArea ph="הוסף מודעה" name='dkkk'>
    </TextArea>
    <Button>Submit</Button>
    </>
):(
  <>
<NoticeContainer>
<H2>הודעות ועדכונים</H2>
<Pnotice>כאן אני שם את כל ההודעות והעדכונים שיש אין ספק שהכל והלך להין יפהיפפה אם הכל ילך כמו שצריך</Pnotice>
</NoticeContainer>
</>
)}
</>

);
};

export default NoticeBoard;
