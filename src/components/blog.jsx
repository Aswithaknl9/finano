import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel3";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ClientCarousel = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const clientLogos = [
    "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/client1.png",
    "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/client2.png",
    "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/client3.png",
    "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/client4.png",
    "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/client5.png",
    "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/client6.png",
  ];

  const options = {
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    smartSpeed: 800,
    dots: false,
    nav: false,
    responsive: {
      0: { items: 2 },
      600: { items: 3 },
      1000: { items: 4 },
      1200: { items: 5 },
      1400: { items: 6 },
    },
  };

  return (
    <div className="container mx-auto pt-[60px] px-[15px] pb-[95px]">
      {isClient && (
        <OwlCarousel className="owl-theme" {...options}>
          {clientLogos.map((logo, index) => (
            <div key={index} className="p-4">
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </OwlCarousel>
      )}
    </div>
  );
};

export default ClientCarousel;
