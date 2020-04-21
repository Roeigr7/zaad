import { NavLink as RRDOM } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Lhome from "../utilities/Iconbar/Lhome.svg"
import LhomeAfter from "../utilities/Iconbar/LhomeAfter.svg"
import Lsend from "../utilities/Iconbar/Lsend.svg"
import LsendAfter from "../utilities/Iconbar/LsendAfter.svg";
import Lcontact from "../utilities/Iconbar/Lcontact.svg";
import LcontactAfter from "../utilities/Iconbar/LcontactAfter.svg";
import Labout from "../utilities/Iconbar/Labout.svg";
import LaboutAfter from "../utilities/Iconbar/LaboutAfter.svg";
import Lportfolio from "../utilities/Iconbar/Lportfolio.svg";
import LportfolioAfter from "../utilities/Iconbar/LportfolioAfter.svg";
export const Link = ({ isActive, children, ...props }) => {
  return <RRDOM {...props}>{children}</RRDOM>;
};

export const LinkIcon = styled(Link)`
  max-width: 80px;
  border-radius: 50%;

  background-color:none;


`;
export const SliderWrapper = styled.div`
  width: 100%;
`;

export const IconHome = styled.div`
  max-width: 80px;
  width:70px;
  border-radius: 50%;
  height:70px;

 transition: all 0.6s ease;
  background-image:${p=>p.isActive? `url(${LhomeAfter})`:`url(${Lhome})`};
  background-size:contain;
  
`;
export const IconSend = styled(IconHome)`
background-image:${p=>p.isActive? `url(${LsendAfter})`:`url(${Lsend})`};
`
export const IconContact = styled(IconHome)`
background-image:${p=>p.isActive? `url(${LcontactAfter})`:`url(${Lcontact})`};
`
export const IconAbout = styled(IconHome)`
background-image:${p=>p.isActive? `url(${LaboutAfter})`:`url(${Labout})`};
`
export const IconPortfolio = styled(IconHome)`
background-image:${p=>p.isActive? `url(${LportfolioAfter})`:`url(${Lportfolio})`};
`