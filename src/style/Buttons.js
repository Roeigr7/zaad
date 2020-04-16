import styled from "styled-components";

export const Button = styled.button`
box-sizing: border-box;
 background-image:${p=>
 p.success? 'linear-gradient(to top, #00b710 51%, #35657D 50%)':
p.cancel? 'linear-gradient(to top, red 51%, #35657D 50%)':
'linear-gradient(to top, #b3b6bc 51%, #35657D 50%)' };
background-size: 100% 200%;
  background-position: top;
  transition: background-position 0.3s ease-in-out;
display:inline-block;
margin:${p=>p.showmore? '0 auto':'5px'};
border:1px solid #efefef;
border-bottom:0.5px solid ${p=>p.success? '#01C34F': p.cancel? 'red': '#b3b6bc'};/*gold*/
color:#eff1f4;
font-size:16px;
border-radius:3px;
min-width:70px;
height:30px;
width:${p=>p.showmore ? '150px':''};


&:hover{
  background-position: bottom;
  background-color:#fce7b3;/*gold*/
  color:'#0f1f21';/*bluedark*/

}
&:focus{
outline:none;
}
&:active{
 top:1px;
  position:relative;
outline:none;
}

`

export const ButtonForm = styled.button`
  background: linear-gradient(to bottom, #5277b3 5%, #4279b8 100%);
  border: 1px solid #4e6096;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 13px;
  font-weight: bold;
  padding: 6px 12px;
  text-decoration: none;

  position: relative;

  &:hover {
    background: linear-gradient(to bottom, #4279b8 5%, #5277b3 100%);
    background-color: #4279b8;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;
/////BUTTON NEAR TEXTAREA HOMEPAGE////////
export const Buttonmmm = styled.button`
  box-shadow: inset 0px 1px 0px 0px #9fb4f2;
  background: linear-gradient(to bottom, #5277b3 5%, #4279b8 100%);
  background-color: #5277b3;
  border: 1px solid #4e6096;
  cursor: pointer;
  color: #ffffff;

  font-family: Arial;
  font-size: 13px;
  font-weight: bold;
  padding: 6px 12px;
  text-decoration: none;
  display: block;
  position: absolute;
  float: right;

  &:hover {
    background: linear-gradient(to bottom, #4279b8 5%, #5277b3 100%);
    background-color: #4279b8;
  }
  &:active {
    position: relative;
    top: 1px;
  }
`;

export const Butt = styled.button`
display:inline-block;
width:200px;
height:70px;
padding: 0.35em 1.2em;
border:2px solid #FFFFFF;
margin:0 0.3em 0.3em 0;
border-radius:4px;
background: linear-gradient(180deg, rgba(255,255,255,0) 20%, rgba(250,250,250,0.5) 100%);
color:white;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
text-align:center;
transition: all 0.2s;
 &:hover{
color:#000000;
background-color:#f1f1f1;
}
@media (max-width: 768px) {
  width:50%;
    display:inline-block;
    margin:0 auto;
}`;


///////button container nav////////
export const ButtonsContainer=styled.div`
margin-right: 80px;


@media (max-width: 768px) {

    margin-right:0;
}`;

export const FormButtons=styled.div`
flex-direction:row;
`