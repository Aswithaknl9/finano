import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faSearch,
  faBriefcase,
  faCar,
  faCheckCircle,
  faHome,
  faHeartbeat,
  faUserMd,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    id: 1,
    title: "Finance Management",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faChartLine,
  },
  {
    id: 2,
    title: "Banking Investigation",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faSearch,
  },
  {
    id: 3,
    title: "Business Insurance",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faBriefcase,
  },
  {
    id: 4,
    title: "Car Insurance",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faCar,
  },
  {
    id: 5,
    title: "Market Research",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faCheckCircle,
  },
  {
    id: 6,
    title: "Home Insurance",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faHome,
  },
  {
    id: 7,
    title: "Life Insurance",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faHeartbeat,
  },
  {
    id: 8,
    title: "Health Insurance",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    icon: faUserMd,
  },
];

const ServicesSection = () => {
  return (
    <section className="px-[15px] pt-[85px] pb-[90px] bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1a1e66]">
            We are here to manage your finance with{" "}
            <cite className="text-[#3140fc] font-playfair">experience</cite>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="p-[15px]">
              <div className="card border border-[#e0e0e0] px-[30px] pt-[45px] pb-[43px] text-center transition-all duration-300 
               bg-white hover:bg-gradient-to-b from-[#3140fc] to-[#091394] hover:text-white group">
                
                {/* Icon */}
                <div className="text-center">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-[#3140fc] text-5xl mb-[34px] transition-all duration-300 group-hover:text-white"
                  />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-[#1a1e66] mb-[10px] transition-all duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-[#1a1e66] transition-all duration-300 group-hover:text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
