import React from "react";
import Slider from "react-slick";
import Image from 'next/image';


function VerticalSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <div className="vertical-slider" id="home">
      <Slider {...settings}>
        <div>
          <Image src="/src/assets/images/slider/01.jpg" width="100" height="100" />
        </div>
        <div>
          <Image src="/src/assets/images/slider/02.jpg" width="100" height="100" />
        </div>
      </Slider>
    </div>
  );
}

export default VerticalSlider;
