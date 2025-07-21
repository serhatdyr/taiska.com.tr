import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Collabrations = () => {
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

  const data = [
    {
      src: "/src/assets/images/portfolio/carya-golf-club.jpg",
      description: "Vermo Çelik",
    },
    {
      src: "/src/assets/images/portfolio/art-hotel.jpg",
      description: "Restoration House",
    },
    {
      src: "/src/assets/images/portfolio/libya-embassy.jpg",
      description: "Eta Concept",
    },
    {
      src: "/src/assets/images/portfolio/galata-hotel.jpg",
      description: "Dekorist Ve Candan Arıcı Art Studio",
    },
  ];

  return (
    <div className="collabrations-section py-10 md:py-30" id="collabrations">
      <h2 className="collabrations-title">OUR COLLABRATIONS</h2>
      <p className="collabrations-desc">
        --
      </p>
      <div className="collabrations-slider-container">
        <Slider {...settings}>
          {data.map((item, index) => (
            <div key={index} className="collabrations-slide">
              <img src={item.src} alt={`collabrations-${index}`} className="collabrations-image mb-2" />
              <p>{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collabrations;
