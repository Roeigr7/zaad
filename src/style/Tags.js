import styled from 'styled-components';


/////////////HOME PAGE GOLD TITLES//////////////////
export const H4 = styled.h4`
font-weight:bold;
width:100%;

background-color:#183042;
margin:0;
padding:0;
  position: relative;
color:#e8d08f;
@media(max-width: 768px){
width:95%;
}
`

export const H2 = styled.h2`
text-align:center;
word-wrap: break-word;
color:#e2e2e2;
font-weight:bold;
border-bottom:2px solid white ;
background-color:none;
`


///////P ALL THE SITE///////////
export const P=styled.p`
margin-top:${p=>p.marg? '-5px' : ''};
font-weight: ${p=>p.bold? 'bold' : 'normal'};
line-height: ${p=>p.bigspace? '2' : p.smallspace? '0.5':'normal'};
word-wrap: break-word;
font-size:${p=>p.small? '14px':p.tiny? '12px':'16px'};
text-align:${p=>p.left? 'left' : p.right? 'right' :'center'};
color:${p=>p.white? '#EFEFEF': '#0f1f2f'};
@media(max-width: 700px){
  font-size:12px;
}
`
export const Span = styled.span`
line-height: 0.2;
font-weight:${p=>p.thin? 'normal':'bold'};
word-wrap: break-word;
font-size:${p=>p.small? '12px' : '14px'};
text-align:${p=>p.left? 'left' : 'right'};
color:#0f1f2f;
`