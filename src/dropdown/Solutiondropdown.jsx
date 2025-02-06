import React from "react";
import { NavLink } from "react-router-dom";

const MegaMenu = ({ title, links, isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <li
      className="relative group lg:py-8 lg:px-0 py-1"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a className="flex items-center text-black" href={`/${title.toLowerCase()}`}>
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 text-black ml-1 relative top-[1px] transition-transform duration-300 group-hover:rotate-180"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </a>

      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg rounded-lg z-50 w-[900px] p-6 flex space-x-4">
          {/* Left Side: Grid Layout */}
          <div className="w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {links.map((item, index) => (
                <li key={index} className="hover:bg-gray-100 p-3 rounded-md transition-all">
                  <NavLink className="flex items-start space-x-4" to={item.path}>
                    {/* Icon with Background */}
                    <div
                      className="w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center lg:rounded-md p-2 rounded-full"
                      style={{ backgroundColor: item.bgColor }}
                    >
                      <img
                        alt={item.label}
                        loading="lazy"
                        width="30"
                        height="30"
                        className="lg:h-6 h-4 w-auto"
                        src={item.imgSrc}
                      />
                    </div>
                    {/* Text Content */}
                    <div className="w-60">
                      <h4 className="font-semibold text-black text-lg">{item.label}</h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

// Sample Dropdown Data
export const dropdown = {
  solutions: [
    {
      path: "/solutions/mobile-banking-solutions",
      label: "Mobile Banking Solutions",
      imgSrc: "https://appdevs.net/_next/static/media/banking.e69a3089.webp",
      description: "Seamless banking on-the-go with secure transactions and features.",
      bgColor: "#cff5ff",
    },
    {
      path: "/solutions/remittance-solutions",
      label: "Remittance Solutions",
      imgSrc: "https://appdevs.net/_next/static/media/remittance.2deba4fe.webp",
      description: "Fast and affordable international money transfers made easy.",
      bgColor: "#d4e3ff",
    },
    {
      path: "/solutions/digital-wallet-solutions",
      label: "Digital Wallet Solutions",
      imgSrc: "https://appdevs.net/_next/static/media/ewallet.895ba4bb.webp",
      description: "Secure digital wallet for effortless payments and fund management.",
      bgColor: "#f1ebff",
    },
    {
      path: "/solutions/white-label-payment-gateway-solutions",
      label: "Payment Gateway Solutions",
      imgSrc: "https://appdevs.net/_next/static/media/gateway.8cb0c27e.webp",
      description: "Reliable payment processing for online transactions and businesses.",
      bgColor: "#e8e6ff",
    },
    {
      path: "/solutions/currency-exchange-software-solutions",
      label: "Currency Exchange Solutions",
      imgSrc: "https://appdevs.net/_next/static/media/currency.10929134.webp",
      description: "Real-time currency conversion for global transactions at competitive rates.",
      bgColor: "#26bb6a30",
    },
    {
      path: "/solutions/card-issuing-solutions",
      label: "Card Issuing Solutions",
      imgSrc: "https://appdevs.net/_next/static/media/card.671ccf61.webp",
      description: "Custom card solutions tailored for businesses and brands.",
      bgColor: "#eae8ff",
    },
  ],
};

export default MegaMenu;
