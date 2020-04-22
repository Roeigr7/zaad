import styled from "styled-components";
import transfer from '../utilities/transfer.png';

/////////////////BUTTTON////////////////////////////////////////////////
export const Button = styled.button`
box-sizing: border-box;
cursor:pointer;
 background-image:${p=>
 p.success? ' linear-gradient(0deg, rgba(0,183,16,1) 51%, rgba(59,113,137,1) 51%, rgba(59,113,137,1) 71%, rgba(77,126,147,1) 75%)':
p.cancel? 'linear-gradient(to top, red 51%,rgba(59,113,137,1) 51%, rgba(59,113,137,1) 71%, rgba(77,126,147,1) 75%);':
p.active? 'linear-gradient(to top, #e0ae50 100%,rgba(59,113,137,1)) ;' :
'linear-gradient(to top, #e0ae50 51%,rgba(59,113,137,1) 51%, rgba(59,113,137,1) 71%, rgba(77,126,147,1) 75%);' };

background-size: 100% 200%;
  background-position: top;
  transition: background-position 0.3s ease-in-out;
display:inline-block;
margin:${p=>p.showmore? '5px auto':'5px'};
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
  background-image:${p=>
 p.success?  'linear-gradient(to top, #03a510,#03a510 51%, rgba(59,113,137,1) 71%, rgba(77,126,147,1) 75%);':
p.cancel? 'linear-gradient(to top, #e50000 51%,#e50000 51%, rgba(59,113,137,1) 71%, rgba(77,126,147,1) 75%);':
'linear-gradient(to top, #D6A549 51%,#D6A549 51%, rgba(59,113,137,1) 71%, rgba(77,126,147,1) 75%);'};
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


///////button container nav////////
export const ButtonsContainer=styled.div`
margin-right: 80px;


@media (max-width: 768px) {

    margin-right:0;
}`;

export const FormButtons=styled.div`
flex-direction:row;
`

//////////////BUTTON SPECIAL////////////////////////
export const ButtonSpecial=styled.div`
position:relative;
font-size:14px;
margin:5px;
text-align:left;
cursor:pointer;
color:#E0AE50;

&:after{
    content:'';
    position: absolute;
    top:50%;
margin-left:3px;
    transform:translateY(-50%);
    width:20px;
    height:20px;
    background-image:url(${transfer});
    background-position:center;
    background-size:contain;
    background-repeat:no-repeat;

  transition: all 0.4s ease;
}
&:hover&:after{
transform:translateY(-50%) rotate(180deg);
}
&:hover{
font-weight:bold;
}
`