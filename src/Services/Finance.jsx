import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faSearch,
  faBriefcase,
  faCar,
  faCheckCircle,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const services1 = [
  {
    id: 1,
    title: "Finance Management",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faChartLine,
    img: "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/portfolio8.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Banking Investigation",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faSearch,
    img: "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/portfolio6.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Business Insurance",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faBriefcase,
    img: "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/portfolio5.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Car Insurance",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faCar,
    img: "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/portfolio3.jpg",
    link: "#",
  },
  {
    id: 5,
    title: "Market Research",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faCheckCircle,
    img: "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/portfolio2.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Home Insurance",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faHome,
    img: "https://demo.casethemes.net/finano/wp-content/uploads/2019/01/portfolio1.jpg",
    link: "#",
  },
];

const ServiceCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-gray-100 px-[15px] pt-[85px] pb-[90px]">
      <div className="mx-auto px-6">
        <div className="grid grid-cols-2 gap-3">
          <h2 className="text-[30px] font-bold text-start mb-8 px-[15px]">
            We Serve as the Best Services{" "}
            <cite className="text-[#3140fc] font-playfair">Planner</cite>
          </h2>
          <p className="text-[#1a1e66] px-[15px]">
            The argument in favor of using filler text goes something like this:
            If you use real content in the design process, anytime you reach a
            review point you’ll end up reviewing and negotiating the content
            itself and not the design.
          </p>
        </div>
        <Slider {...settings}>
          {services1.map((service) => (
            <div key={service.id} className="p-4">
              <div className="relative group overflow-hidden shadow-lg">
                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#091394] opacity-80 flex flex-col justify-end items-center text-white p-5">
                  <FontAwesomeIcon icon={service.icon} className="text-5xl" />
                  <h3 className="text-xl font-semibold mt-3">{service.title}</h3>
                </div>

                {/* Full Info (Hidden Initially) */}
                <div className="absolute inset-0 flex flex-col justify-start items-start text-white p-5 bg-[#091394] bg-opacity-50 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  <FontAwesomeIcon icon={service.icon} className="text-5xl" />
                  <h3 className="text-xl font-semibold mt-3">{service.title}</h3>
                  <p className="text-sm text-gray-200 mt-2 text-start">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="mt-3 text-white px-4 py-2 border border-white rounded-full transition-transform duration-300 hover:bg-white hover:text-[#3140fc]"
                  >
                    Let’s start →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceCarousel;
