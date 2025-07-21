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
    autoplay: true,
    autoplaySpeed: 3000,
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
      src: "/src/assets/images/collabrations/vermo.jpg",
      description: "Vermo Çelik",
    },
    {
      src: "/src/assets/images/collabrations/restorationhouse.jpg",
      description: "Restoration House",
    },
    {
      src: "/src/assets/images/collabrations/etaconcept.jpg",
      description: "Eta Concept",
    },
    {
      src: "/src/assets/images/collabrations/dekorist.jpg",
      description: "Dekorist",
    },
    {
      src: "/src/assets/images/collabrations/candanarici.jpg",
      description: "Candan Arıcı Art Studio",
    },
  ];

  return (
    <div className="collabrations-section py-10 md:py-30" id="collabrations">
      <h2 className="collabrations-title">OUR COLLABRATIONS</h2>
      <p className="collabrations-desc">
       Fusce quis augue vitae odio elementum pretium. Nulla consequat felis sed arcu eleifend, ac feugiat ligula luctus. Vestibulum suscipit dapibus tempor. Quisque congue erat at diam sagittis, id mollis quam egestas. Sed porta dolor eu nisi auctor, nec sodales nulla ornare.     </p>
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
