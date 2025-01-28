import React from 'react';

const MissionPillars = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-20">
          <div className="max-w-[850px] mx-auto text-center">
            <h1 className="sm:text-5xl font-semibold mb-2">
              Our Core Mission <span className="text-blue-600 inline">Pillars</span>
            </h1>
            <span className="w-[75%] text-[#6b7280]">
              Empowering businesses with innovative Fintech solutions, AppDevs focuses on security,
              scalability, and technology that adapts to tomorrow's challenges, ensuring your
              business thrives for years to come.
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-12 gap-5">
          {/* Image */}
          <div className="col-span-12 lg:col-span-5">
            <img
              alt="Mission"
              loading="lazy"
              width="616"
              height="553"
              decoding="async"
              src="https://appdevs.net/_next/static/media/mission.10539a6f.webp"
              style={{ color: 'transparent' }}
            />
          </div>

          {/* Mission Pillars */}
          <div className="col-span-12 lg:col-span-7">
            <div className="lg:pl-10">
              {/* Pillar 1 */}
              <div className="bg-white shadow-sm py-4 px-8 rounded-[15px] sm:flex mb-[20px]">
                <div className="w-[60px]">
                  <img
                    alt="Innovative Software Solutions"
                    loading="lazy"
                    width="268"
                    height="305"
                    decoding="async"
                    src="https://appdevs.net/_next/static/media/innovative.5e787a26.webp"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <div className="sm:w-[calc(100%-60px)] sm:pl-5 sm:pt-0 pt-4">
                  <h5 className="text-[20px] mb-1.5 font-semibold text-[#ffa523]">
                    Innovative Software Solutions
                  </h5>
                  <p className="text-[14px] text-[#6b7280]">
                    We specialize in developing robust, scalable applications that solve complex
                    challenges.
                  </p>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="bg-white shadow-sm  py-4 px-8 rounded-[15px] sm:flex mb-[20px] lg:ml-[40px]">
                <div className="w-[60px]">
                  <img
                    alt="Client-Centric Approach"
                    loading="lazy"
                    width="404"
                    height="369"
                    decoding="async"
                    src="https://appdevs.net/_next/static/media/client.1d751464.webp"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <div className="sm:w-[calc(100%-60px)] sm:pl-5 sm:pt-0 pt-4">
                  <h5 className="text-[20px] mb-1.5 font-semibold text-[#0070bf]">Client-Centric Approach</h5>
                  <p className="text-[14px] text-[#6b7280]">
                    Every solution is tailored to meet the specific goals of our clients, ensuring
                    maximum value and impact.
                  </p>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="bg-white shadow-sm  py-4 px-8 rounded-[15px] sm:flex mb-[20px] lg:ml-[80px]">
                <div className="w-[60px]">
                  <img
                    alt="Future-Ready Technologies"
                    loading="lazy"
                    width="273"
                    height="389"
                    decoding="async"
                    src="https://appdevs.net/_next/static/media/technologies.a1362aee.webp"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <div className="sm:w-[calc(100%-60px)] sm:pl-5 sm:pt-0 pt-4">
                  <h5 className="text-[20px] mb-1.5 font-semibold text-[#60cdca]">Future-Ready Technologies</h5>
                  <p className="text-[14px] text-[#6b7280]">
                    We leverage the latest technologies, such as Flutter, Laravel, and cloud-based
                    platforms, to build solutions that are secure.
                  </p>
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="bg-white shadow-sm  py-4 px-8 rounded-[15px] sm:flex mb-[20px]">
                <div className="w-[60px]">
                  <img
                    alt="FinTech Solutions"
                    loading="lazy"
                    width="243"
                    height="334"
                    decoding="async"
                    src="https://appdevs.net/_next/static/media/fintech.32e90184.webp"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <div className="sm:w-[calc(100%-60px)] sm:pl-5 sm:pt-0 pt-4">
                  <h5 className="text-[20px] mb-1.5 font-semibold text-[#a352e9]">
                    FinTech Solutions and Secure Infrastructure
                  </h5>
                  <p className="text-[14px] text-[#6b7280]">
                    Including payment systems, QR code payments, and digital wallets for businesses
                    of all sizes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionPillars;
