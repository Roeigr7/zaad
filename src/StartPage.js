import React from 'react'
import { Link } from './style/style'
import styled from 'styled-components'
import zaadlogo from "./utilities/zaadlogo.png";
import startPage from "./utilities/startPage.jpg";
export const B=styled.div`

z-index:10;
background-image: url(${startPage});
position:fixed;
background-size:cover;
background-color:red;
width:100%;
height:100%;
`
export const ImgLogo = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
width:80%;
@media(max-width: 768px){
   width:150%;
}`

 const StartPage = () => {
    return (
       <Link to='/home'>
         <B>
<ImgLogo src={zaadlogo} alt='zaadlogo'/>
         </B>
       </Link>
    )
}
export default StartPage;