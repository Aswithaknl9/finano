import React from 'react';

const solutionsData = [
  {
    title: 'Mobile Banking Solutions',
    description: 'Seamless banking on-the-go with secure transactions and features.',
    imgSrc: 'https://appdevs.net/_next/static/media/remittance.6985c065.webp',
    link: '/solutions/mobile-banking-solutions',
    width: 'w-[207px]',
    height: 'h-[130px]',
  },
  {
    title: 'Remittance Solutions',
    description: 'Fast and affordable international money transfers made easy.',
    imgSrc: 'https://appdevs.net/_next/static/media/mobileBanking.26967535.webp',
    link: '/solutions/remittance-solutions',
    width: 'w-[161px]',
    height: 'h-[130px]',
  },
  {
    title: 'Digital Wallet Solutions',
    description: 'Secure digital wallet for effortless payments and fund management.',
    imgSrc: 'https://appdevs.net/_next/static/media/digitalWallet.6f01a52e.webp',
    link: '/solutions/digital-wallet-solutions',
    width: 'w-[148px]',
    height: 'h-[130px]',
  },
  {
    title: 'Payment Gateway Solutions',
    description: 'Reliable payment processing for online transactions and businesses.',
    imgSrc: 'https://appdevs.net/_next/static/media/paymentGateway.38f212fa.webp',
    link: '/solutions/white-label-payment-gateway-solutions',
    width: 'w-[169px]',
    height: 'h-[130px]',
  },
  {
    title: 'Currency Exchange Solutions',
    description: 'Real-time currency conversion for global transactions at competitive rates.',
    imgSrc: 'https://appdevs.net/_next/static/media/currencyExchange.b0e3cab5.webp',
    link: '/solutions/currency-exchange-software-solutions',
    width: 'w-[168px]',
    height: 'h-[130px]',
  },
  {
    title: 'Card Issuing Solution',
    description: 'Custom card solutions tailored for businesses and brands.',
    imgSrc: 'https://appdevs.net/_next/static/media/currencyExchange.b0e3cab5.webp',
    link: '/solutions/card-issuing-solutions',
    width: 'w-[168px]',
    height: 'h-[130px]',
  },
  {
    title: 'Crowdfunding Solutions',
    description: 'Effective platform for raising funds and supporting projects with ease.',
    imgSrc: 'https://appdevs.net/_next/static/media/crowdFunding.a17ce315.webp',
    link: '/solutions/crowdfunding-solutions',
    width: 'w-[136px]',
    height: 'h-[130px]',
  },
];

const SolutionsSection = () => {
  return (
    <section className="xl:pt-[330px] lg:pt-[280px] py-[130px] mt-[80px] relative overflow-hidden lg:bg-transparent bg-[#f3f4f6]">
      <img
        alt="Background Image"
        loading="lazy"
        width="1728"
        height="1523"
        decoding="async"
        className="absolute w-full h-full top-0 left-0 z-[-2] lg:block hidden"
        style={{ color: 'transparent' }}
        src="https://appdevs.net/_next/static/media/solutionSectionBg.217c0940.webp"
      />
      <img
        alt="Solution"
        loading="lazy"
        width="200"
        height="200"
        decoding="async"
        className="xl:w-[200px] w-[150px] xl:h-[200px] h-[150px] absolute xl:top-10 top-24 left-1/2 translate-x-[-50%] lg:block hidden"
        style={{ color: 'transparent' }}
        src="https://appdevs.net/_next/static/media/solutionElement.b9eb1a7d.webp"
      />
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header mb-14">
          <div className="max-w-[730px] mx-auto text-center">
            <h2 className="mb-2">
              Explore <span className="text-[#7c3aed] inline">Solutions</span> and Discover How They Work and Boost Your Business
            </h2>
            <span>
              Discover a wide range of solutions specifically designed to address your business challenges. Learn how our innovative offerings work to optimize processes and accelerate your business growth effectively.
            </span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center m-[-10px] relative">
          <img
            alt="Background Image"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            style={{
              position: 'absolute',
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: 'transparent',
            }}
            src="https://appdevs.net/_next/static/media/solutionBg.db024656.webp"
          />

          {/* Solution Cards */}
          {solutionsData.map((solution, index) => (
            <div key={index} className="w-full xl:w-1/4 lg:w-1/3 sm:w-2/4 p-[10px] z-[1]">
              <div className="bg-white shadow-lg rounded-[20px] p-[5px] h-full">
                <div className="bg-[#f3f4f6] rounded-2xl flex justify-center items-center py-6 px-2">
                  <img
                    alt="solution thumb"
                    loading="lazy"
                    decoding="async"
                    className={`${solution.width} ${solution.height} object-contain`}
                    style={{ color: 'transparent' }}
                    src={solution.imgSrc}
                  />
                </div>
                <div className="py-6 ps-5 pe-3">
                  <h3 className="text-heading__six md:text-heading__five font-semibold mb-3">{solution.title}</h3>
                  <p className="text-sm text-[#6b7280] leading-5 pb-4">{solution.description}</p>
                  <a
                    className="flex items-center text-blue-600 hover:text-purple-600 transition text-[15px] font-bold leading-none"
                    href={solution.link}
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-3 text-color__heading ms-2 relative top-[1px]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center pt-10">
  <a className="flex items-center justify-center" href="/solutions">
    <span className="flex items-center gap-3 text-white bg-blue-600 py-3 px-5 rounded-md">
      Show More Solutions
      <span className="border-l border-white h-5 pl-3 ml-2 flex items-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="w-5 h-5 text-white"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
        </svg>
      </span>
    </span>
  </a>
</div>

         


      </div>
    </section>
  );
};

export default SolutionsSection;
