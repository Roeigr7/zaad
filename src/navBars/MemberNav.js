import React from 'react'

import { StyledLink, Li } from '../style/style';
import { useLocation} from 'react-router-dom';

const MemberNav=({profile,logout})=>{
const {pathname} = useLocation();
return(
<>
<Li><StyledLink to="/account" isActive={pathname === '/account'}>
אזור אישי
</StyledLink></Li>
             
<Li><StyledLink onClick={logout} to="/" isActive={pathname === '/'}>
התנתק
  </StyledLink></Li>
</>
)
    }

export default MemberNav;