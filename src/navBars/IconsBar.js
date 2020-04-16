import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Lcontact from "../utilities/Lcontact.png";
import Lsend from "../utilities/Lsend.png";
import Lhome from "../utilities/Lhome.png";
import Labout from "../utilities/Labout.png";
import Lportfolio from "../utilities/Lportfolio.png";

export const SliderWrapper = styled.div`
  width: 100%;
`;

export const IconBar = styled.img`
  padding: 0;
  margin: 0;
  max-width: 80px;
`;
export const IconsMenu = styled.div`
  justify-content: space-evenly;
  width: 100%;
`;

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
          <IconBar src={Lsend} alt='send' />  
          <IconBar src={Lportfolio} alt='portfolio' />
          <IconBar src={Lhome} alt='home' />
          <IconBar src={Lcontact} alt='contact' />
          <IconBar src={Labout} alt='about' />
        </Slider>
      </SliderWrapper>
    );
  }
}
export default IconsBar;
