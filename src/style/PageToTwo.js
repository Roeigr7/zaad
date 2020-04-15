import styled from "styled-components"

//////container details//////
export const ContainerRight  = styled.div`

width:30%;
display:flex;
flex-direction: column;

margin: 30px 55px 0px 25px;
text-align:right;

@media (max-width: 768px) {
  width:100%;
  margin: 0;
}`


//////container project///////////
export const ContainerLeft= styled.div`
  margin: 30px 55px 0px 25px;
  text-align:right;
  float:right;
  width:50%;
  margin-left:10%;
padding:0;
border: 6px solid white;
border-radius: 4px;
box-shadow:0 2px 10px rgba(100,255,150,.8);
  @media (max-width: 768px) {
  width:100%;
  margin: 0;


}`

////////container together////////////
export const ContainerTogether= styled.div`
 border: 1px solid green;
 display:flex;
 margin-top:8px;
justify-content:right;

 @media (max-width: 768px) {
   width:100%;
   display:flex;
   flex-direction:column;

 }`
  
