import React from 'react';
import MissionPillars from '../MissionPages/MissionPillars';
import ExpertiseSection from '../MissionPages/ExpertiseSection';
import Sectionnn from '../MissionPages/Sectionnn';
import MissionPillars1 from '../MissionPillarsPages/MissionPillars1';
import ExpertiseSection1 from '../MissionPillarsPages/ExpertiseSection1';
import Sectionnnn from '../MissionPillarsPages/Sectionnnnn';

const vision = () => {
  return (
    <section className="pt-[180px] relative">
      {/* Background Images */}
      <img
        alt="Background Image"
        loading="lazy"
        width="795"
        height="777"
        decoding="async"
        className="absolute top-0 left-0 z-[-2]  2xl:block"
        src="https://appdevs.net/_next/static/media/calendlyPageBgLeft.ccdb273e.webp"
        style={{ color: 'transparent' }}
      />
      <img
        alt="Background Image"
        loading="lazy"
        width="558"
        height="799"
        decoding="async"
        className="absolute top-[60px] right-0 z-[-2] 2xl:block"
        src="https://appdevs.net/_next/static/media/calendlyPageBgRight.31f2046c.webp"
        style={{ color: 'transparent' }}
      />

      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-14">
          <div className="max-w-[850px] mx-auto text-center">
            <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1]  rounded-full py-1 px-3 ">
            Our Vision
            </span>
            <h1 className="sm:text-4xl font-semibold mb-2">
            Our Vision for the Future of {' '}
              <span className="text-blue-600 inline">FinTech</span>
            </h1>
            <span className="w-[75%] text-[#6b7280]">
            Our vision at AppDevs is to be at the forefront of digital innovation, crafting solutions that anticipate the needs of the future. Together, we can build technology that empowers businesses for tomorrow's challenges.
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* First Card */}
          <div className="rounded-[34px] py-10 sm:py-14 lg:py-20 px-6 sm:px-10 lg:px-15 text-center bg-[#F3F6FC]">
            <h3 className="mb-3 lg:mb-5 text-[30px] font-semibold text-[#2563EB]">Our Long-Term Vision</h3>
            <p className='text-[#6b7280]'>
            At AppDevs, our vision is to lead the global digital transformation by providing innovative, future-focused software solutions. We aspire to create technology that not only meets the current demands of businesses but also anticipates the needs of tomorrow.
            </p>
          </div>

          {/* Second Card */}
          <div className="rounded-[34px] py-10 sm:py-14 lg:py-20 px-6 sm:px-10 lg:px-15 text-center bg-[#F6F3FC]">
            <h3 className="mb-3 lg:mb-5 text-[30px] font-semibold text-[#7C3AED]">Join Us in Shaping the Future</h3>
            <p className='text-[#6b7280]'>
            At AppDevs, we’re committed to shaping the future of digital transformation. Let’s work together to build innovative solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
      <MissionPillars1 />
      <ExpertiseSection1 />
      <Sectionnnn />
    </section>
  );
};

export default vision;
