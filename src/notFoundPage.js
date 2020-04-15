import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from './utilities/notFoundImg.jpg';

const pageNotFound = () => {
    return(
<Fragment>
<center>
<img src={notFoundImg} alt="notFound" width="50%"/><br/>
<Link to="/">Return to Home Page</Link
></center>
</Fragment>
)
    }
export default pageNotFound;