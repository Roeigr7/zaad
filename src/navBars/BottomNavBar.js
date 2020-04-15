import React from "react";

import { LinkFooter,Footer, LiB, Ul } from '../style/style';

const BottomNavBar = () => {
  return (
  <Footer>
  <Ul>
  <LiB><LinkFooter fb to='/'><i className="fab fa-facebook-f"></i></LinkFooter></LiB>
<LiB><LinkFooter ig to='/'><i className="fab fa-instagram"></i></LinkFooter></LiB>
<LiB><LinkFooter vim to='/'><i className="fab fa-vimeo-v"></i></LinkFooter></LiB>

<LiB ><LinkFooter to='/'>הצעה מהירה</LinkFooter></LiB>
<LiB><LinkFooter to='/contact'>צור קשר</LinkFooter></LiB>

  </Ul>
  </Footer>
  );
};

export default BottomNavBar;
