import React from 'react';
import SectionBg  from '../assets/sectionBg.png';
import Solutions from '../pages/Solutions';

const section1 = () => {
  return (
    <section className="xl:pt-[330px] w-full lg:pt-[280px] py-[130px] mt-[80px] relative overflow-hidden lg:bg-transparent bg-section__color">
        <img src={SectionBg} loading="lazy"width="auto"height="auto" decoding="async" className="absolute  top-0 left-0 z-[-2] lg:block hidden"/>
      <img alt="Solution" loading="lazy" width="200" height="200" decoding="async" data-nimg="1"  className="xl:w-[200px] w-[150px] xl:h-[200px] h-[150px] absolute xl:top-10 top-24 left-1/2 translate-x-[-50%] lg:block hidden" style={{ color: 'transparent' }} src="https://appdevs.net/_next/static/media/solutionElement.b9eb1a7d.webp"/>
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header mb-14">
          <div className="max-w-[730px] mx-auto text-center">
            <h2 className="mb-2 text-[40px] font-bold">
              Explore <span className="text-[#7C3AED]">Solutions</span> and Discover How They Work and Boost Your Business
            </h2>
            <span className='text-[#6B7280]'>
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
            style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} 
            src="https://appdevs.net/_next/static/media/remittance.6985c065.webp"
          />
        </div>
        <Solutions />
        </div>
    </section>
  );
};

export default section1;
