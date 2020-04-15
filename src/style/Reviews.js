import styled  from "styled-components";


//////////BookContainer
export const BookContainer=styled.div`
width:50%;
display:flex;
flex-flow: row wrap;
justify-content:center;
position:relative;
margin:0 auto;
padding:0;
@media(max-width: 768px){
width:100%;
}
`
export const ReviewContent=styled.div`

flex:1 1 100%;
color:#c7cad1;
background:none;
word-break: break-word;


` 
export const ButtonRev=styled.button`
position:relative;
${p=>p.right ? 'right:2px': 'left:2px'};
border:none;
color:#e8d08f;
box-sizing:border-box;
background:none;
font-size:16px;
padding-bottom:2px;
margin:0;

&:hover{
    color: #d6a549;
}
&:hover:after { 
  width: 100%; 
}
&:focus {
outline:none;
}
&:active {
top:1px;
}
` 

export const H4=styled.h4`
color:#fce7b3;
font-weight:bold;
border-bottom:1px solid #d2d4d8;
`
export const PP=styled.p`
color:#c7cad1;
font-size:${p=>p.details ? '12px': '16px'};
text-align: ${p=>p.details ? 'left': 'center'};
`
