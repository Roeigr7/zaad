import React from 'react'
import {Link} from 'react-router-dom';
import { PageLayout, Form, FormTitle, ContainerLeft, ContainerRight, ContainerTogether, H2, H4, P } from '../style/style';
import GoogleMap from '../components/contact/GoogleMap';
import styled from 'styled-components';

export const Span=styled(Link)`
color:#e8d08f;
&:hover,&:focus{
   font-weight:bold;
}
`
export const SocialContainer=styled.div`
display:flex;
position:relative;
justify-content:center;
align-items:center;

`

export const A = styled.a`
border-radius:8px;
margin:0 10px;
background-color:none;
text-decoration: inherit;
color: red;

transition: background-color 0.6s;
&:hover{
   background: linear-gradient(180deg, rgba(135,9,9,0) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 60%, rgba(77,126,147,0) 100%);
   outline-style: none;     
    outline-width: 0; 
}

`
export const H5 = styled.h2`
color: white;
`
 const ContactPage = () => {
    return (
       <PageLayout>
                    <Form>
<FormTitle>צור קשר</FormTitle>

          </Form>
          <ContainerTogether>
             
<ContainerRight>

<P>רוצים להתקדם? למעבר למסלול המהיר <Span Link to='/sendrequest'> לחצו כאן</Span></P>
<P> כתובתינו: טרומפלדור 6, באר שבע</P>
<P>טלפון: 054-315-1888</P>
<P>zaad.studios@gmail.com :מייל</P>

<SocialContainer>
<A contact fb href="https://www.facebook.com/zaadstudios/"><i style={{color:'#3B5998' , fontSize:'300%', position:'relative'}} className="fab fa-facebook-square"></i></A>
<A contact ig href="https://www.instagram.com/zaadstudios/"><i style={{color:'#E1306C',fontSize:'300%', position:'relative'}} className="fab fa-instagram-square"></i></A>
<A contact vim href="https://vimeo.com/zaad"><i style={{color:'#19B7EA', fontSize:'300%', position:'relative'}} className="fab fa-vimeo-square"></i></A>
</SocialContainer>
</ContainerRight>
<ContainerLeft>
 <GoogleMap/>
</ContainerLeft>
 </ContainerTogether>
       </PageLayout>
    )
}
export default ContactPage;