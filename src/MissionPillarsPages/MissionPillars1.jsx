import React from 'react';

const MissionPillars1 = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-20">
          <div className="max-w-[850px] mx-auto text-center">
            <h1 className="sm:text-5xl font-semibold mb-2">
            Key Vision <span className="text-[#7c3aed] inline">Statements</span>
            </h1>
            <span className="w-[75%] text-[#6b7280]">
            At AppDevs, our vision is to drive global digital transformation with innovative FinTech solutions that empower businesses of all sizes. We are committed to making technology accessible, secure, and future-ready, helping businesses thrive in a rapidly evolving digital landscape.
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
              src="https://appdevs.net/_next/static/media/goal.856aa988.webp"
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
                    src="https://appdevs.net/_next/static/media/transformation.3e4b5827.webp"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <div className="sm:w-[calc(100%-60px)] sm:pl-5 sm:pt-0 pt-4">
                  <h5 className="text-[20px] mb-1.5 font-semibold text-[#ffa523]">
                  Global Digital Transformation
                  </h5>
                  <p className="text-[14px] text-[#6b7280]">
                  We envision a world where businesses worldwide harness the power of technology to innovate and grow.
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
                    src="https://appdevs.net/_next/static/media/fintech.63a519cf.webp"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <div className="sm:w-[calc(100%-60px)] sm:pl-5 sm:pt-0 pt-4">
                  <h5 className="text-[20px] mb-1.5 font-semibold text-[#0070bf]">FinTech Leadership</h5>
                  <p className="text-[14px] text-[#6b7280]">
                  As leaders in FinTech, we are committed to advancing financial technology that fosters inclusion, security, and efficiency.
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
                    src="https://appdevs.net/_next/static/media/technology.3ecd3d1e.webp"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <div className="sm:w-[calc(100%-60px)] sm:pl-5 sm:pt-0 pt-4">
                  <h5 className="text-[20px] mb-1.5 font-semibold text-[#60cdca]">Accessible Technology</h5>
                  <p className="text-[14px] text-[#6b7280]">
                  We aim to make advanced digital tools accessible to businesses of all sizes, allowing them to compete and thrive in a competitive market.
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
                    src="https://appdevs.net/_next/static/media/innovation.d08f0ead.webp"
                    style={{ color: 'transparent' }}
                  />
                </div>
                <div className="sm:w-[calc(100%-60px)] sm:pl-5 sm:pt-0 pt-4">
                  <h5 className="text-[20px] mb-1.5 font-semibold text-[#a352e9]">
                  Lead with Innovation
                  </h5>
                  <p className="text-[14px] text-[#6b7280]">
                  We strive to be at the forefront of digital innovation, providing cutting-edge solutions that anticipate future needs.
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

export default MissionPillars1;
