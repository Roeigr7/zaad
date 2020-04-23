import React from 'react';
import styled from 'styled-components';
import {ReactPlayer as ReactPlayerNew} from 'react-player'
import { Link } from './Header';


export const ReactPlayer = ({children,...props}) => {
  return (
      <ReactPlayerNew {...props}>
          {children}
      </ReactPlayerNew>
  );
};

export const StyledPlayer= styled(ReactPlayer)`
  padding: 0px;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  color: black;
`
///////////DivLineStyle//////////
export const DivLineStyle = styled.div`
position: relative;

display: flex;
box-sizing: border-box;

height: 3px;
background-image: linear-gradient(to right, rgb(63, 114, 155), #d1d1d1);
width: 50%;

@media (max-width: 768px) {
  width: 100%;
  position: relative;
  left: 0px;
}
`;

export const LogoTitle = styled.img`
width:40%;

@media (max-width: 768px) {
  width:55%;
}
`

export const SpanLink=styled(Link)`
color:#e8d08f;
&:hover,&:focus{
   font-weight:bold;
}
`

export const BigLogo = styled.a`
border-radius:8px;
margin:0 10px;
background-color:none;
text-decoration: inherit;
color: red;

transition: background-color 0.6s;
&:hover{
   background: linear-gradient(180deg, rgba(135,9,9,0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 60%, rgba(77,126,147,0) 100%);
   outline-style: none;     
    outline-width: 0; 
}
`