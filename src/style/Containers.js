import styled from "styled-components";
import { Link } from "./Header";

/////////////////////1-CONTAINER UP///////////////////
export const ContainerUp = styled.div`
  flex-flow: row wrap;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  width: 50%;
  color: white;
  font-family: "Heebo", sans-serif;

  margin: 10px auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
////////////MID CONTAINER///////////
export const ContainerMid = styled(ContainerUp)`
  width: 100%;
  justify-content: left;
  padding: 0;
`;
//////3-Container BOTTOM///////////
export const ContainerBot = styled(ContainerMid)`
  padding: 0;
  margin: 0;
`;
//////Footer//////////
export const Footer = styled.footer`
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  height: 55px;
  justify-content: center;
  width: 100%;
  border-top: 7px solid #14293a;
  background-color: #939097;
  color: white;
  bottom: 0;
  text-align: center;
`
export const BottomLink = styled(Link)`
padding:0;
`;
export const LiB = styled.li`
display:block;
`

////////SQUARE////////////
export const Square = styled.div`
  flex: 1 1 25%;
  justify-content: flex-start;
  flex-grow: unset;
  flex-wrap: wrap;
  border: 1px solid rgba(232, 208, 143, 0.5);
  box-sizing: border-box; 
  font-family: "Heebo", sans-serif;
  @media (max-width: 768px) {
    flex: 1 1 50%;
  }
`;
//////////Container ABOUT//////////
export const ContainerAbout = styled.div`
margin:0 auto;
width:50%;

  @media (max-width: 768px) {
    width: 95%;
  }
`;
