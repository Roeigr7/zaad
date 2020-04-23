import styled from "styled-components";
import { Link } from "./Header";
//////////////Icon///////////////////
export const IconAct = styled.button`
  border-radius:50%;
  position: absolute;
  top:${p => p.bottom ? '' : '0'};
  bottom:${p => p.bottom&&'0'};
  left:${p => p.edit ? '0' : '32px'};
  z-index: 0;
  color:white;
  background-color:red;
  text-align: center;
  opacity: 1;
  font-size: 28px;
  width: 30px;
  height:30px;
	box-shadow:inset 0px 1px 0px 0px #ffffff;
	background:linear-gradient(to bottom, #c7c7c7 5%, #cccccc 100%);
	background-color:#c7c7c7;
  border:1px solid #e3e3e3;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:13px;
	font-weight:bold;
	text-decoration:none;

&:hover {

	background:${p=>p.edit? 'linear-gradient(to bottom, #4a98cc 5%, #2583c2 100%)'
	: 'linear-gradient(to bottom, #e74d3c 5%, #ff5242 100%)'
};
background-color:${p=>p.edit ? '#4a98cc' : '#e74d3c'}
}

@media (max-width: 768px) {
  background-color:${p=>p.edit ? '#4a98cc' : '#e74d3c'};
  width: 20px;
  height:20px;
  font-size:8px;
  left:${p => p.edit ? '0' : '23px'};
}
`;

//////////////Content title///////////////////
export const Content = styled.div`
direction:rtl;
position: relative;
font-size:25px;
overflow: hidden;
 margin: auto;
 color:#efefef;
 border:transparent;
 outline:none;
  z-index: 0;
  text-align: center;
  opacity: 0;
  transition: 0.5s ease;
  width: 100%;
  overflow-wrap: break-word;
  line-height: 1;
  @media (max-width: 768px) {
    font-size:20px;

  }
`;


///////////Overlay////////////////
export const Overlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 0%;
  width: 100%;
  z-index: 1;
  opacity: 1;
  transition: 1.7s ease;
`;

/////////CLICKABLE OVARLEY/////////
export const Clickable= styled(Link)`
display:flex;
width:100%;
height:0;
top:0;
opacity:0;

text-decoration:none;
margin:0;
padding:0;
position:absolute;
background-color:#35667E;
z-index:2;
transition: 0.5s ease;
@media (max-width: 768px) {
  height:100%;
  }

`;



///////HoverWrapper////////////
export const HoverWrapper = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  height: 100%;
  opacity: 1;
 
  &:hover ${Clickable} {
    height:100%;
    opacity:0.9;
   
  }
  &:hover ${Content} {
    z-index: 2;
    opacity: 1;
  }
  &:hover ${IconAct} {
z-index:3;

  }

  @media (max-width: 768px) {
    width: 100%;
    ${IconAct} {
      z-index:3;
    }
  }
`;



