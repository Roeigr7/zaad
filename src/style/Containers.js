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
border:2px solid orange;
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
  flex: 1 1 25%;
  justify-content: flex-start;
  flex-grow: unset;
  flex-wrap: wrap;
  border: 0.5px solid rgb(252, 231, 179, 0.8);
  box-sizing: border-box; 
  font-family: "Heebo", sans-serif;
  @media (max-width: 768px) {
    flex: 1 1 50%;
  }
`;
//////////Container ABOUT//////////
export const ContainerAbout = styled.div`
border:2px solid blue;
margin:0 auto;
width:50%;

  @media (max-width: 768px) {
    width: 95%;
  }
`;
