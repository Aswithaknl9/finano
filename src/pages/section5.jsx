import React from 'react';
import fourYears from '../assets/fourYears.png';
import weekly from '../assets/weeklyTop.png';
import exclusive from '../assets/exclusiveAuthor.png';
import author from '../assets/authorLevelEight.png';
import setter from '../assets/trendsetter.png';
import collector from '../assets/collectorLevelOne.png';
import elite from '../assets/eliteAuthor.png';
import ukFlag from '../assets/ukFlag.png';
import bdFlag from '../assets/bdFlag.png';

const Section5 = () => {
  return (
    <section className="pb-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header mb-16">
          <div className="max-w-[775px] mx-auto xl:text-[48px] lg:text-[38px] md:text-[28px] text-[24px] font-semibold text-center">
            <h2>Our <span className="text-blue-600 inline">Achievements</span></h2>
          </div>
        </div>

        <div className="lg:w-[740px] md:w-[500px] w-[200px] lg:h-[740px] md:h-[500px] h-[200px] rounded-full border-[1px] border-solid border-[#cccccc] flex items-center justify-center mx-auto relative">
          <div className="absolute top-[4%] left-[20%]">
            <img alt="Four Years Membership" className="object-cover lg:w-auto md:w-10 w-5" src={fourYears} />
            <div className="tooltip-arrow hidden sm:block absolute top-[-55%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-[#F5F9FF] shadow-md font-medium text-black px-2 py-1 rounded-md text-[12px] leading-[18px] text-center">
              Four Years Membership
            </div>
          </div>

          <div className="absolute top-[4%] right-[20%]">
            <img alt="Weekly Top Seller" className="object-cover lg:w-auto md:w-10 w-5" src={weekly} />
            <div className="tooltip-arrow hidden sm:block absolute top-[-70%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-[#F5F9FF] shadow-md font-medium text-black px-2 py-1 rounded-md text-[12px] leading-[18px] text-center">
              Weekly Top Seller
            </div>
          </div>

          <div className="absolute top-[33%] left-[-1.5%]">
            <img alt="Exclusive Author" className="object-cover lg:w-auto md:w-10 w-5" src={exclusive} />
            <div className="tooltip-arrow hidden sm:block absolute top-[-55%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-[#F5F9FF] shadow-md font-medium text-black px-2 py-1 rounded-md text-[12px] leading-[18px] text-center">
              Exclusive Author
            </div>
          </div>

          <div className="absolute top-[33%] right-[-1.5%]">
            <img alt="Collector Level One" className="object-cover lg:w-auto md:w-10 w-5" src={collector} />
            <div className="tooltip-arrow hidden sm:block absolute top-[-70%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-[#F5F9FF] shadow-md font-medium text-black px-2 py-1 rounded-md text-[12px] leading-[18px] text-center">
              Collector Level One
            </div>
          </div>

          <div className="lg:w-[400px] md:w-[250px] w-[100px] lg:h-[400px] md:h-[250px] h-[100px] rounded-full border-[1px] border-solid border-[#bed0f9] flex items-center justify-center relative">
            <div className="absolute top-[10%] left-[6%]">
              <img alt="Author Level Eight" className="object-cover lg:w-auto md:w-10 w-5" src={author} />
              <div className="tooltip-arrow hidden sm:block absolute top-[-70%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-[#F5F9FF] shadow-md font-medium text-black px-2 py-1 rounded-md text-[12px] leading-[18px] text-center">
                Author Level Eight
              </div>
            </div>

            <div className="absolute top-[10%] right-[6%]">
              <img alt="Trendsetter" className="object-cover lg:w-auto md:w-10 w-5" src={setter} />
              <div className="tooltip-arrow hidden sm:block absolute top-[-40%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-[#F5F9FF] shadow-md font-medium text-black px-2 py-1 rounded-md text-[12px] leading-[18px] text-center">
                Trendsetter
              </div>
            </div>

            <div className="lg:w-[175px] md:w-[80px] w-[50px] lg:h-[175px] md:h-[80px] h-[50px] bg-[#DAEAFF] rounded-full flex items-center justify-center relative z-[2]">
              <div className="relative">
                <img alt="Elite Author" className="object-cover lg:w-auto md:w-11 w-8" src={elite} />
                <div className="tooltip-arrow hidden sm:block absolute top-[-70%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] bg-[#F5F9FF] shadow-md font-medium text-black px-4 py-2 rounded-md text-[14px] leading-[20px] text-center">
                  Elite Author
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F5F9FF] rounded-[50px] lg:px-[140px] md:px-8 px-4 lg:pt-32 pt-16 lg:pb-20 md:pb-8 pb-4 relative z-[1] lg:mt-[-370px] md:mt-[-250px] mt-[-100px]">
          <div className="max-w-[645px] mx-auto lg:text-[38px] md:text-[28px] text-[24px] font-semibold text-center mb-10">
            <h3>We are located in Bangladesh and UK but provide service worldwide</h3>
          </div>

          <div className="grid sm:grid-cols-2 grid-cols-1 md:gap-5 gap-4">
            <div className="bg-white rounded-[32px] shadow-md text-center md:px-14 px-5 md:py-9 py-5">
              <img alt="UK Location" className="object-cover rounded-full mx-auto mb-4" src={ukFlag} />
              <h4 className="text-[16px] md:text-[18px] font-extrabold">UNITED KINGDOM</h4>
            </div>
            <div className="bg-white rounded-[32px] shadow-md text-center md:px-14 px-5 md:py-9 py-5">
              <img alt="Bangladesh Location" className="object-cover rounded-full mx-auto mb-4" src={bdFlag} />
              <h4 className="text-[16px] md:text-[18px] font-extrabold">BANGLADESH</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
