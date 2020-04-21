import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { SliderWrapper, IconBar, LinkIcon, IconSend, IconContact, IconHome, IconAbout, IconPortfolio } from "../style/IconsBar";
import { useLocation } from "react-router";



const IconsBar =()=> {
  
    let settings = {
      speed: 500,
      slidesToShow: 5,
      arrows: false,
     
      responsive: [
        {
          breakpoint: 728,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 4,
            dots: false,
          },
        },
      ],
    };
  const { pathname } = useLocation();
    return (
      <SliderWrapper>
        <Slider {...settings}>
          <LinkIcon to="/sendrequest"><IconSend isActive={pathname === "/sendrequest"} />  </LinkIcon>
          <LinkIcon to="/portfolio"><IconPortfolio  isActive={pathname === "/portfolio"}  /></LinkIcon>
          <LinkIcon to="/home"> <IconHome isActive={pathname === "/home"}/></LinkIcon>
          <LinkIcon to="/contact"> <IconContact isActive={pathname === "/contact"}/></LinkIcon>
          <LinkIcon to="/about">  <IconAbout isActive={pathname === "/about" }/></LinkIcon>
        </Slider>
      </SliderWrapper>
    );
  }

export default IconsBar;
