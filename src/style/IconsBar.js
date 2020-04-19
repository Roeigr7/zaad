import { NavLink as RRDOM } from "react-router-dom";
import styled from "styled-components";
import React from "react";

export const Link = ({ isActive, children, ...props }) => {
  return <RRDOM {...props}>{children}</RRDOM>;
};

export const LinkIcon = styled(Link)`
  max-width: 80px;
  border-radius: 50%;
  background-color:none;
  transition: background-color 0.6s;
  &:hover {
    background: white;
  }
  &:active {
    background: white;
  }
  &:focus {
    outline: none;
  }
`;
export const SliderWrapper = styled.div`
  width: 100%;
`;

export const IconBar = styled.img`
  max-width: 80px;
  border-radius: 50%;
  &:hover {
    opacity: 0.6;
    background: white;
    border: 1px solid #0f1f2f;
    box-sizing: border-box;
    outline: none;
  }
`;
