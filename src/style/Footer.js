import {Link as RRD} from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

export const Link = ({isActive,ig,fb,vim, children, ...props}) => {
    return (
        <RRD {...props}>
            {children}
        </RRD>
    );
};

export const LinkFooter = styled(Link)`
text-decoration:none;
position:relative;
color:#0a2749;/*text*/
display: block;
font-weight:${p=>p.isActive ? 'bold' :''};
padding:${p=>p.ig||p.fb||p.vim ? '13px 7px 0px 7px' : '13px 10px 0px 10px'};
&:after {
    content: '';
    display: block;
  width:0;
  right: 0;
  border-bottom: 1px solid #dfc887;
 position:absolute;
    height: 2px;
    transition: 0.5s ease;
}

&:hover:after {
    width: 100%;
}
&:hover{
color:${p=>p.ig? "#D72978" : p.fb? '#4064AD' : p.vim ? '#00B4D1' : '#dfc887'};
}

` 