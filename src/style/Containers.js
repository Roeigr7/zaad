import styled from "styled-components";
import { Link } from "./Header";

/////////////////////1-CONTAINER UP///////////////////
export const ContainerUp = styled.div`

box-sizing:border-box;
  flex-flow: row wrap;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 50%;
  color: white;
  font-family: "Heebo", sans-serif;
  margin: 5px auto 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
////////////MID CONTAINER///////////
export const ContainerMid = styled(ContainerUp)`
box-sizing:border-box;
  width: 100%;
  justify-content: left;
  padding: 0;
`;
//////3-Container BOTTOM///////////
export const ContainerBot = styled(ContainerMid)`

box-sizing:border-box;
  padding: 0;
  margin: 0;
`;

export const BottomLink = styled(Link)`
padding:0;
`;
export const LiB = styled.li`
display:block;
`

////////SQUARE////////////
export const Square = styled.div`
  flex: 0 0 25%;
  justify-content: flex-start;
  flex-grow: unset;
  flex-wrap: wrap;
  border: 0.5px solid rgb(252, 231, 179, 0.8);
  box-sizing: border-box; 
  font-family: "Heebo", sans-serif;
  @media (max-width: 768px) {
    flex:0 0 50%;
  }
`;
//////////Container ABOUT//////////
export const AboutContainer = styled.div`
margin:0 auto;
width:70%;
  @media (max-width: 768px) {
    width: 95%;
  }
`;



////////BIG LOGOS CONTACT CONTAINER/////////////////
export const SocialContainer=styled.div`
display:flex;
position:relative;
justify-content:center;
align-items:center;
`

///////MODALCONTAINER/////////////
export const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.7);
`;