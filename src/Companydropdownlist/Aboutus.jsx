import React from 'react';
import Glance from '../Aboutpages/Glance';
import CEOSection from '../Aboutpages/CEOSection';
import TeamSection from '../Aboutpages/TeamSection';
import Sectionn from '../Aboutpages/Sectionn';


const Aboutus = () => {
  return (
    <section className="pt-[180px] relative">
      {/* Background Image */}
      <img
        alt="Background Image"
        loading="lazy"
        width="1133"
        height="465"
        decoding="async"
        className="absolute top-0 left-0 w-full z-[-1] 2xl:block"
        src="https://appdevs.net/_next/static/media/aboutPageBg.a4176e31.webp"
      />

      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-12 items-center gap-5 lg:gap-8">
          {/* Text Section */}
          <div className="col-span-12 lg:col-span-8">
            <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-3">
              About Us
            </span>
            <h1 className="lg:w-[80%] lg:text-[60px] font-semibold mb-3">
              Your Partner in FinTech Industry
            </h1>
            <span className="lg:w-[80%] text-[18px] text-[#6b7280] leading-[28px]">
              Founded in 2020, AppDevs is a top fintech software development company focused on
              building advanced finance applications. We specialize in developing reliable and
              innovative solutions designed to meet the evolving demands of the finance industry.
            </span>
          </div>

          {/* Images */}
          <div className="col-span-10 lg:col-span-4">
            <img
              alt="About"
              loading="lazy"
              width="950"
              height="700"
              decoding="async"
              className="rounded-[20px] shadow-lg p-2"
              src="https://appdevs.net/_next/static/media/about-2.d523d358.webp"
            />
          </div>
          <div className="col-span-10 lg:col-span-3">
            <img
              alt="About"
              loading="lazy"
              width="950"
              height="700"
              decoding="async"
              className="rounded-[20px] shadow-lg p-2"
              src="https://appdevs.net/_next/static/media/about-3.fe4f5036.webp"
            />
          </div>
          <div className="col-span-10 lg:col-span-9">
            <img
              alt="About"
              loading="lazy"
              width="950"
              height="700"
              decoding="async"
              className="rounded-[20px] shadow-lg p-2"
              src="https://appdevs.net/_next/static/media/about-1.fdb4e65c.webp"
            />
          </div>
        </div>
      </div>
      <Glance />
      <CEOSection />
      <TeamSection />
      <Sectionn />
    </section>
  );
};

export default Aboutus;
