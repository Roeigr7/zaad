import React, { Fragment } from 'react'
import { MDBBtn } from 'mdbreact'

 const SocialLogin = ({socialLogin}) => {
    return (
        <Fragment>

<MDBBtn onClick={()=>socialLogin('facebook')} type='button'>
    FACEBOOK
</MDBBtn>
<MDBBtn onClick={()=>socialLogin('google')} type='button'>
    GOOGLE
</MDBBtn>
        </Fragment>
            
        
    )
}
export default SocialLogin