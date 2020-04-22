import styled  from "styled-components";


//////////BookContainer
export const ReviewContainer=styled.div`

width:50%;
background-color:#224356;
display:flex;
margin: 10px auto 0  auto;
flex-flow: row wrap;
justify-content:center;
border-radius:0 0px 8px 8px;
align-items:center;
position:relative;
border: 1px solid rgb(252, 231, 179, 0.5);
padding:0;
@media(max-width: 768px){
width:95%;
}
`
export const ReviewContent=styled.div`
box-sizing:border-box;
flex:1 1 100%;
padding: 2px;
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
font-size:14px;
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


