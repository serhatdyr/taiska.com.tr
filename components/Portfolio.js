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
      src: "/src/assets/images/portfolio/isu.jpg",
      description: "İstinye Üniversitesi",
    },
    {
      src: "/src/assets/images/portfolio/cahide.jpg",
      description: "Cahide Plazzo",
    },
    {
      src: "/src/assets/images/portfolio/ake.jpg",
      description: "Ake",
    },
    {
      src: "/src/assets/images/portfolio/koton.jpg",
      description: "Koton",
    },
    {
      src: "/src/assets/images/portfolio/defacto.jpg",
      description: "Defacto",
    },
    {
      src: "/src/assets/images/portfolio/lcw.jpg",
      description: "Lcwaikiki",
    },
    {
      src: "/src/assets/images/portfolio/flo.jpg",
      description: "Flo",
    },
    {
      src: "/src/assets/images/portfolio/evidea.jpg",
      description: "Evidea",
    },
    {
      src: "/src/assets/images/portfolio/dogus.jpg",
      description: "Dogus Insaat",
    },
    {
      src: "/src/assets/images/portfolio/tcdd.jpg",
      description: "TCDD",
    },
    {
      src: "/src/assets/images/portfolio/afu.jpg",
      description: "American Fon University",
    },
    {
      src: "/src/assets/images/portfolio/birey.jpg",
      description: "Birey Eğitim Kurumları",
    },
    {
      src: "/src/assets/images/portfolio/ibb.jpg",
      description: "İBB",
    },
    {
      src: "/src/assets/images/portfolio/cetas.jpg",
      description: "Cetaş Madencilik",
    },
    {
      src: "/src/assets/images/portfolio/yimtas.jpg",
      description: "Yimtaş",
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
