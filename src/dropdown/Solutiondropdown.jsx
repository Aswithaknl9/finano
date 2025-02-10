import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import solutionImage from "https://appdevs.net/_next/static/media/solution.f7885da2.webp"; // Example image for all items

const solutions = [
  { title: "Mobile Banking Solutions", description: "Seamless banking on-the-go with secure transactions and features." },
  { title: "Remittance Solutions", description: "Fast and affordable international money transfers made easy." },
  { title: "Digital Wallet Solutions", description: "Secure digital wallet for effortless payments and fund management." },
  { title: "Payment Gateway Solutions", description: "Reliable payment processing for online transactions and businesses." },
  { title: "Currency Exchange Solutions", description: "Real-time currency conversion for global transactions at competitive rates." },
  { title: "Card Issuing Solutions", description: "Custom card solutions tailored for businesses and brands." },
  { title: "Crowdfunding Solutions", description: "Effective platform for raising funds and supporting projects with ease." },
  { title: "Investment Management Solutions", description: "Comprehensive tools for effective portfolio management and growth." },
  { title: "Escrow Solutions", description: "Secure transactions with trusted escrow services for peace of mind." },
  { title: "AI Chatbot Solutions", description: "Intelligent chatbot solutions for enhanced customer service and engagement." },
  { title: "Online Booking Solutions", description: "Streamlined booking system for appointments and reservations." },
  { title: "Multi-vendor Solutions", description: "Flexible platform for multiple sellers to showcase and sell products." },
];

const MegaMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button 
        onMouseEnter={() => setIsOpen(true)} 
        onMouseLeave={() => setIsOpen(false)}
        className="px-4 py-2 font-semibold text-black hover:text-blue-500"
      >
        Solutions ▾
      </button>

      {isOpen && (
        <div 
          onMouseEnter={() => setIsOpen(true)} 
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-0 top-full bg-white shadow-lg rounded-lg p-6 grid grid-cols-3 gap-6 w-[900px] z-50"
        >
          <div className="col-span-2 grid grid-cols-2 gap-4">
            {solutions.map((item, index) => (
              <NavLink 
                key={index} 
                to={`/solutions/${item.title.toLowerCase().replace(/\s+/g, "-")}`} 
                className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition"
              >
                <img src={solutionImage} alt={item.title} className="w-12 h-12 object-cover rounded-md" />
                <div>
                  <h4 className="font-semibold text-black">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </NavLink>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <img src={solutionImage} alt="Solutions" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MegaMenu;
