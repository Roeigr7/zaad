import { Link as RRD } from "react-router-dom";
import styled from "styled-components";
import React from "react";

export const Link = ({ isActive, ig, fb, vim, children, ...props }) => {
  return <RRD {...props}>{children}</RRD>;
};


//////Footer CONTAINER//////////
export const Footer = styled.footer`

  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  height: 45px;
  justify-content: center;
  width: 100%;
  box-sizing:border-box;
  border-top: 2px solid #939097;
  background-color: #cccccc;
  color: white;
  bottom: 0;
  text-align: center;
`



export const SocialLink = styled.a`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: red;
`;

///////////////////EACH LINK IN THE FOOTER//////////////
export const LinkFooter = styled(Link)`
  text-decoration: none;
  position: relative;
  color: #0a2749; /*text*/
  display: ${(p) => (p.contact ? "inline-block" : "block")};
  font-weight: ${(p) => (p.isActive ? "bold" : "")};
  padding: ${(p) =>
    p.ig || p.fb || p.vim ? "10px 7px 0px 7px" : "10px 10px 0px 10px"};
  &:after {
    content: "";
    display: block;
    width: 0;
    right: 0;
    border-bottom: 1px solid #35667e;
    position: absolute;
    height: 2px;
    transition: 0.5s ease;
 
  }
  &:hover:after {
    width: 100%;
  }
  &:hover {
    color: ${(p) =>
      p.ig ? "#D72978" : p.fb ? "#4064AD" : p.vim ? "#00B4D1" : "#35667e"};
  }
`;

export const UlB = styled.ul`
list-style-type:none;
display:flex;
padding:0;
margin:0;
@media(max-width: 768px){
    flex-direction: row;
}`

export const LinkFooterIcon = LinkFooter.withComponent('a');
