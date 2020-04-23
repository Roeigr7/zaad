import React from 'react'

import { PageLayout, Form, FormTitle, ContainerLeft, ContainerRight, ContainerTogether,SpanLink, P, SocialContainer, BigLogo, Span } from '../style/style';
import GoogleMap from '../components/contact/GoogleMap';



 const ContactPage = () => {
    return (
       <PageLayout>
                    <Form>
<FormTitle>צור קשר</FormTitle>

          </Form>
          <ContainerTogether>
             
<ContainerRight>
<P bold >רוצים להתקדם? <Span big thin>למעבר למסלול המהיר </Span><SpanLink Link to='/sendrequest'>לחצו כאן</SpanLink></P>

<P bold >כתובתינו: <Span big thin>טרומפלדור 6, באר שבע</Span></P>
        <P bold marg >טלפון: <Span big thin>054-315-1888</Span></P>
        <P bold marg >מייל: <Span big thin>zaad.studios@gmail.com</Span></P>
  
<SocialContainer>
<BigLogo contact fb href="https://www.facebook.com/zaadstudios/"><i style={{color:'#3B5998' , fontSize:'300%', position:'relative'}} className="fab fa-facebook-square"></i></BigLogo>
<BigLogo contact ig href="https://www.instagram.com/zaadstudios/"><i style={{color:'#E1306C',fontSize:'300%', position:'relative'}} className="fab fa-instagram-square"></i></BigLogo>
<BigLogo contact vim href="https://vimeo.com/zaad"><i style={{color:'#19B7EA', fontSize:'300%', position:'relative'}} className="fab fa-vimeo-square"></i></BigLogo>
</SocialContainer>
</ContainerRight>
<ContainerLeft map>
 <GoogleMap/>
</ContainerLeft>
 </ContainerTogether>
       </PageLayout>
    )
}
export default ContactPage;