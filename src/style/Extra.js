import React from 'react';
import styled from 'styled-components';
import {ReactPlayer as ReactPlayerNew} from 'react-player'


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

