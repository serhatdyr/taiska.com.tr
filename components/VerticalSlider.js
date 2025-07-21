import React from "react";
import Slider from "react-slick";
import Image from 'next/image';


function VerticalSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
        <div className="slick-slide-item">
          <Image src="/src/assets/images/slider/01.jpg" width="1920" height="1080" />
          <div className="slider-text">
            <div className="slider-text-sub">
              <div className="slider-text-first">interior</div>
              <div className="slider-text-second">design</div>
            </div>
          </div>
        </div>
        <div className="slick-slide-item">
          <Image src="/src/assets/images/slider/02.jpg" width="1920" height="1080" />
          <div className="slider-text">
            <div className="slider-text-sub">
              <div className="slider-text-first">steel</div>
              <div className="slider-text-second">works</div>
            </div>
          </div>
        </div>
        <div className="slick-slide-item">
          <Image src="/src/assets/images/slider/03.jpg" width="1920" height="1080" />
          <div className="slider-text">
            <div className="slider-text-sub">
              <div className="slider-text-first">interior</div>
              <div className="slider-text-second">design</div>
            </div>
          </div>
        </div>
        <div className="slick-slide-item">
          <Image src="/src/assets/images/slider/04.jpg" width="1920" height="1080" />
          <div className="slider-text">
            <div className="slider-text-sub">
              <div className="slider-text-first">steel</div>
              <div className="slider-text-second">works</div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default VerticalSlider;
