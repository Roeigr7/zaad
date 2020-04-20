import styled from 'styled-components';

export const H22 = styled.h2`
font-family: 'Kaushan Script', cursive;
font-weight:bold;
font-size:40px;
color:#fce7b3;
`;

// export const P = styled.p`
// text-align: ${p => (p.center ? "center" : p.left ? "left" : "right")};
// font-family: 'Heebo', sans-serif;
// font-size:20px;
// color:white;

// @media (max-width: 768px) {
// font-size:14px;
// }
// `;

export const H1 = styled.h4`
font-weight:bold;
width:100%;
margin:0;
padding:0;
  position: relative;
color:#e8d08f;
`
  /* &:before{
content: 'פרויקטים חדשים';
position:absolute;

transform-origin: bottom;
transform:rotateX(180deg);
line-height: 0.95em;
background:linear-gradient(0deg,#e8d08f 0,transparent 50%);
-webkit-background-clip:text;
background-clip:text;
color:transparent;
opacity: 0.5;
  }
` */

export const H2 = styled.h2`
text-align:center;
word-wrap: break-word;
color:#e2e2e2;
font-weight:bold;
border-bottom:2px solid white ;
background-color:none;
`

export const P=styled.p`

line-height: ${p=>p.bigspace? '2' : p.smallspace? '0.5':'normal'};
word-wrap: break-word;
font-size:${p=>p.small? '14px':p.tiny? '12px':'16px'};
text-align:${p=>p.left? 'left' : p.right? 'right' :'center'};
color:${p=>p.white? '#FAFAFA': '0f1f2f'};

`
export const Span = styled.span`
line-height: 0.2;
font-weight:${p=>p.thin? 'normal':'bold'};
word-wrap: break-word;
font-size:${p=>p.small? '12px' : '14px'};
text-align:${p=>p.left? 'left' : 'right'};
color:#0f1f2f;
`