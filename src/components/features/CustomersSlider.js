import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderWrapper } from "../../style/IconsBar";
import { customersList } from "../../utilities/customers/customersList";

const CustomersSlider = ({rows,dots}) => {
  let settings = {
    speed: 500,
    slidesToShow: 6,
    dots: dots,
    arrows: false,
    rows: rows,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 728,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const sliders = () => {
    return customersList.map((data) => {
      return <img key={data} alt='img' src={data} />;
    });
  };
  return (
    <SliderWrapper>
      <Slider {...settings}>{sliders()}</Slider>
    </SliderWrapper>
  );
};

export default CustomersSlider;
