import React from 'react';

const Section4 = () => {
  return (
    <section className="about_section pb-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-10 sm:gap-10 sm:space-y-0 space-y-8 items-center">
          
          <div className="lg:col-span-4 sm:col-span-6 col-span-10">
            <h2 className="mb-6 text-24px sm:text-[28px]  md:text-[38px] leading-tight lg:text-[48px] font-semibold ">
              Skilled <span className="text-blue-600 inline">Mobile App Developers</span> with a Passion for <span className="text-purple-600 inline">FinTech</span> Innovation
            </h2>
            <p className="md:mb-9 mb-6 text-[#6b7280] text-[14px] lg:text-[16px]">
              Our team of skilled mobile app developers is dedicated to creating innovative FinTech solutions tailored to your needs. With expertise in secure, user-friendly financial applications, we help bring your vision to life.
            </p>
            <a className="primary__btn flex items-center" href="/about-us">
              <div className="flex items-center bg-blue-600 text-white py-2 px-4 rounded-md">
                <span className="mr-2 font-semibold">About Us</span>  
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
                  </svg>
                </div>
              </div>
            </a>


          </div>

          <div className="lg:col-span-6 sm:col-span-4 col-span-10">
            <div className="flex sm:justify-end justify-center relative lg:space-x-8">
              <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[152px] h-[152px] text-primary__color absolute lg:right-[42%] sm:right-[40%] right-[5%] sm:top-5 top-[-15px] z-[-1]">
                <circle cx="76" cy="76" r="74.5" stroke="#8B5CF6" strokeWidth="3"></circle>
              </svg>
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[52px] h-[52px] text-primary__color absolute lg:bottom-14 bottom-[-20px] end-1/4">
                <rect width="52" height="52" rx="14" fill="#2563EB"></rect>
              </svg>

              <img alt="About Image" loading="lazy" width="335" height="477" decoding="async" data-nimg="1" className="mt-[80px] xl:w-auto lg:w-[250px] lg:block hidden" style={{ color: 'transparent' }} src="https://appdevs.net/_next/static/media/aboutSection.846d64c5.png" />
              <img alt="About Image" loading="lazy" width="335" height="477" decoding="async" data-nimg="1" className="lg:mb-[80px] xl:w-auto lg:w-[250px] sm:w-full w-auto h-auto" style={{ color: 'transparent' }} src="https://appdevs.net/_next/static/media/aboutSection2.95dac0c4.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
