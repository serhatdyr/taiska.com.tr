import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    swipeToSlide: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    {
      src: "/src/assets/images/slider/image.png",
      description: "TURKEY ANTALYA - HOTEL PROJECT",
    },
    {
      src: "/src/assets/images/slider/image.png",
      description: "GERMANY BERLIN - OFFICE COMPLEX",
    },
    {
      src: "/src/assets/images/slider/image.png",
      description: "UAE DUBAI - SKYLINE TOWER",
    },
    {
      src: "/src/assets/images/slider/image.png",
      description: "USA NEW YORK - RESIDENTIAL BLOCK",
    },
  ];

  return (
    <div className="portfolio-section py-10 md:py-30" id="portfolio">
      <h2 className="portfolio-title">PORTFOLIO</h2>
      <p className="portfolio-desc">
        Fusce quis augue vitae odio elementum pretium. Nulla consequat felis sed arcu eleifend, ac
        feugiat ligula luctus. Vestibulum suscipit dapibus tempor. Quisque congue erat at diam
        sagittis, id mollis quam egestas. Sed porta dolor eu nisi auctor, nec sodales nulla ornare.
      </p>
      <div className="portfolio-slider-container">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index} className="portfolio-slide">
              <img src={item.src} alt={`portfolio-${index}`} className="portfolio-image" />
              <p>{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
