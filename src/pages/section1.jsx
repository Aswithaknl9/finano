import React from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    title: "Mobile Banking Solutions",
    description: "Seamless banking on-the-go with secure transactions and features.",
    imgSrc: "https://appdevs.net/_next/static/media/remittance.6985c065.webp",
    link: "/solutions/mobile-banking-solutions",
  },
  {
    title: "Remittance Solutions",
    description: "Fast and affordable international money transfers made easy.",
    imgSrc: "https://appdevs.net/_next/static/media/mobileBanking.26967535.webp",
    link: "/solutions/remittance-solutions",
  },
  {
    title: "Digital Wallet Solutions",
    description: "Secure digital wallet for effortless payments and fund management.",
    imgSrc: "https://appdevs.net/_next/static/media/digitalWallet.6f01a52e.webp",
    link: "/solutions/digital-wallet-solutions",
  },
  {
    title: "Payment Gateway Solutions",
    description: "Reliable payment processing for online transactions and businesses.",
    imgSrc: "https://appdevs.net/_next/static/media/paymentGateway.38f212fa.webp",
    link: "/solutions/white-label-payment-gateway-solutions",
  },
  {
    title: "Currency Exchange Solutions",
    description: "Real-time currency conversion for global transactions at competitive rates.",
    imgSrc: "https://appdevs.net/_next/static/media/currencyExchange.b0e3cab5.webp",
    link: "/solutions/currency-exchange-software-solutions",
  },
  {
    title: "Card Issuing Solution",
    description: "Custom card solutions tailored for businesses and brands.",
    imgSrc: "https://appdevs.net/_next/static/media/currencyExchange.b0e3cab5.webp",
    link: "/solutions/card-issuing-solutions",
  },
  {
    title: "Crowdfunding Solutions",
    description: "Effective platform for raising funds and supporting projects with ease.",
    imgSrc: "https://appdevs.net/_next/static/media/crowdFunding.a17ce315.webp",
    link: "/solutions/crowdfunding-solutions",
  },
];

const Section1 = () => {
  return (
    <section className="relative  pt-[130px] ">
      {/* Floating Image Above the Section */}
      <div className="absolute lg:top-[6px] lg:block hidden left-1/2 transform -translate-x-1/2 z-20">
        <img
          alt="Solution"
          loading="lazy"
          width="250"
          height="250"
          className="xl:w-[200px] w-[180px] xl:h-[200px] h-[180px]"
          src="https://appdevs.net/_next/static/media/solutionElement.b9eb1a7d.webp"
        />
      </div>

      {/* Background Image */}
      <img
        alt="Background"
        loading="lazy"
        width="1728"
        height="1523"
        className="absolute w-full h-full top-0 left-0 z-[-2] lg:block md:hidden"
        src="https://appdevs.net/_next/static/media/solutionSectionBg.217c0940.webp"
      />

      <div className="xl:max-w-[1300px] pt-28 container mx-auto px-4">
        <div className="section_header mb-14 text-center max-w-[730px] mx-auto">
          <h2 className="mb-4 lg:text-[48px] md:text-[38px]  sm:text-[30px] text-[30px] font-semibold">
            Explore <span className="text-[#7C3AED]">Solutions</span> and Discover How They Work and Boost Your Business
          </h2>
          <p className="text-[#6B7280] text-sm lg:text-[16px] md:text-base">
            Discover a wide range of solutions specifically designed to address your business challenges. Learn how our innovative offerings work to optimize processes and accelerate your business growth effectively.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6 relative ">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white shadow-lg rounded-[20px] p-2 z-10 relative">
              <div className="bg-[#f3f4f6] rounded-2xl flex justify-center items-center py-6 px-2">
                <img alt={solution.title} loading="lazy" width="150" height="130" className="w-32 h-auto" src={solution.imgSrc} />
              </div>
              <div className="py-6">
                <h3 className="text-lg font-semibold mb-3">{solution.title}</h3>
                <p className="text-gray-600 text-sm leading-5 pb-4">{solution.description}</p>
                <Link to={solution.link} className="flex items-center text-blue-500 hover:text-purple-500 transition font-bold text-sm">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-10">
          <Link to="/solutions" className="bg-blue-500 text-white px-5 py-2 lg:px-5 lg:py-3 lg:text-[18px] rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 transition">
            Show More Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section1;
