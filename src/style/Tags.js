import styled from 'styled-components';
import { Link } from './Header';


/////////////HOME PAGE GOLD TITLES//////////////////

export const H4 = styled.h4`
border:${p=>p.border? 'solid rgb(252, 231, 179, 0.5)': 'none'}; 
border-width: 0px 0 0.5px 0;
font-weight:bold;
width:100%;
margin:0 auto;
background-color:#183042;
margin:0;
box-sizing: border-box;
text-decoration:none;
padding:0;
  position: relative;
color:#e8d08f;
@media(max-width: 768px){
width:100%;
}
`

export const H4Link = H4.withComponent(Link);

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
direction:rtl;
margin-top:${p=>p.marg? '-5px' : ''};
font-weight: ${p=>p.bold? 'bold' : 'normal'};
line-height: ${p=>p.bigspace? '2' : p.smallspace? '0.5':'normal'};
word-wrap: break-word;
font-size:${p=>p.small? '14px':p.tiny? '12px':'16px'};
text-align:${p=>p.left? 'left' : p.right? 'right' :'center'};
color:${p=>p.white? '#EFEFEF': '#0f1f2f'};
`
export const Span = styled.span`
line-height: 0.2;
font-weight:${p=>p.thin? 'normal':'bold'};
word-wrap: break-word;
font-size:${p=>p.small? '12px': p=>p.big?'16px' : '14px'};
text-align:${p=>p.left? 'left' : 'right'};
color:${p=>p.white? '#EFEFEF': '#0f1f2f'};
`