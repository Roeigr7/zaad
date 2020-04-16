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
word-wrap: break-word;
font-size:${p=>p.date? '14px':'16px'};
text-align:${p=>p.date? 'left' : 'center'};
color:${p=>p.white? '#e2e2e2':'#FAFAFA'};
margin-bottom:${p=>p.date? '-10px' : ''};

`

export const Span =styled.span`
word-wrap: break-word;
font-size:'16px';
text-align:'right';
color:#223264;
font-weight:bold;

`