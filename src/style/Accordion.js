import styled from 'styled-components';

import plus from '../utilities/plus.png';
import minus from '../utilities/minus.svg';

export const ContainerAccordion=styled.div`
width:100%;

box-shadow: 0 0 10px rgba(0,0,0,0.2);
`
export const TitleAccordion=styled.div`/*question*/
position:relative;
font-size:16px;

border:2px solid #cecece;
text-align:right;
padding-right:40px;
box-sizing:border-box;
background: linear-gradient(180deg, rgba(250,250,250,1) 41%, rgba(238,238,238,1) 51%);
transition: all 0.4s ease-out;

&:after{
  cursor:pointer;
    content:'';
    position: absolute;
    top:50%;
    right:0px;
    transform:translateY(-50%);
    width:20px;
    height:20px;
    background-image:${p=>p.open? `url(${minus})`:`url(${plus})`};
    background-position:center;
    background-size:contain;
    background-repeat:no-repeat;
    transform:${p=>p.open?'translateY(-50%) rotate(180deg)':''};
  transition: all 0.4s ease;
}


`
export const AccordionContent=styled.div`
line-height:50%;
display:relative;
flex-wrap:wrap;
border:solid #cecece;
border-width:0px 2px 2px 2px;
box-sizing:border-box;
background-color:#efefef;
text-align:right;
overflow-y:hidden;
opacity:${p=>p.open?'1':'0'};
max-height:${p=>p.open?'1000px':'0'};
transition: all 0.4s ease;
margin-bottom:${p=>p.open?'5px':'0'};
`
