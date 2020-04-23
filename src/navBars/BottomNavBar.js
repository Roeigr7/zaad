import React from "react";

import { LinkFooterIcon,LinkFooter,Footer, LiB, Ul, UlB } from '../style/style';

const BottomNavBar = () => {
  return (
  <Footer>
  <UlB>
  <LiB><LinkFooterIcon fb href="https://www.facebook.com/zaadstudios/"><i className="fab fa-facebook-f"></i></LinkFooterIcon></LiB>
<LiB><LinkFooterIcon ig href="https://www.instagram.com/zaadstudios/"><i className="fab fa-instagram"></i></LinkFooterIcon></LiB>
<LiB><LinkFooterIcon vim href="https://vimeo.com/zaad"><i className="fab fa-vimeo-v"></i></LinkFooterIcon></LiB>
<LiB ><LinkFooter to='/sendrequest'>מסלול מהיר</LinkFooter></LiB>
<LiB><LinkFooter to='/contact'>צור קשר</LinkFooter></LiB>
  </UlB>
  </Footer>
  );
};

export default BottomNavBar;
