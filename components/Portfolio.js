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

  const data = [
    {
      src: "/src/assets/images/portfolio/carya-golf-club.jpg",
      description: "TURKEY ANTALYA - CARYA GOLF CLUB",
    },
    {
      src: "/src/assets/images/portfolio/art-hotel.jpg",
      description: "BAKU, AZERBEYCAN - ART HOTEL",
    },
    {
      src: "/src/assets/images/portfolio/libya-embassy.jpg",
      description: "ANKARA, TURKIYE - LIBYA EMBASSY",
    },
    {
      src: "/src/assets/images/portfolio/galata-hotel.jpg",
      description: "ISTANBUL, TURKIYE - GALATA HOTEL",
    },
    {
      src: "/src/assets/images/portfolio/regnum-carya-resort-hotel-spa.jpg",
      description: "BELEK, ANTALYA - REGNUM CARYA RESORT HOTEL & SPA",
    },
    {
      src: "/src/assets/images/portfolio/artas-construction.jpg",
      description: "YENIMAHALLE, ANKARA - ARTAS CONSTRUCTION",
    },
    {
      src: "/src/assets/images/portfolio/delta-hotel.jpg",
      description: "ISTANBUL, - DELTA HOTEL, EGEMEN & OKYANUS",
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
          {data.map((item, index) => (
            <div key={index} className="portfolio-slide">
              <img src={item.src} alt={`portfolio-${index}`} className="portfolio-image mb-2" />
              <p>{item.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
