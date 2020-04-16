import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Lcontact from "../utilities/Lcontact.png";
import Lsend from "../utilities/Lsend.png";
import Lhome from "../utilities/Lhome.png";
import Labout from "../utilities/Labout.png";
import Lportfolio from "../utilities/Lportfolio.png";

import { SliderWrapper, IconBar, LinkIcon } from "../style/IconsBar";



class IconsBar extends Component {
  render() {
    let settings = {
      speed: 500,
      slidesToShow: 5,
      arrows: false,
      responsive: [
        {
          breakpoint: 728,
          settings: {
     
            slidesToShow: 3,
            arrows: false,
          },
        },
      ],
    };
    return (
      <SliderWrapper>
        <Slider {...settings}>
          {" "}
          <LinkIcon to="/sendrequest"><IconBar  src={Lsend} alt='send' />  </LinkIcon>
          <LinkIcon to="/portfolio"><IconBar src={Lportfolio} alt='portfolio' /></LinkIcon>
          <LinkIcon to="/home"> <IconBar src={Lhome} alt='home' /></LinkIcon>
          <LinkIcon to="/contact"> <IconBar src={Lcontact} alt='contact' /></LinkIcon>
          <LinkIcon to="/about">  <IconBar src={Labout} alt='about'/></LinkIcon>
        </Slider>
      </SliderWrapper>
    );
  }
}
export default IconsBar;
