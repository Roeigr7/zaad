import React, { Fragment } from 'react';
import notFoundImg from './utilities/notFoundImg.jpg';
import { StyledLink } from './style/style';



const pageNotFound = () => {
    return(
<Fragment>
<center>
<img src={notFoundImg} alt="notFound" width="50%"/><br/>
<StyledLink to="/">חזור לעמוד הראשי</StyledLink>
</center>
</Fragment>
)
    }
export default pageNotFound;