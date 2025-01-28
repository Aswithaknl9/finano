import React from 'react';

const ExpertiseSection = () => {
  return (
    <section className="py-[130px] relative">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-20">
          <div className="max-w-[850px] mx-auto text-center">
            <h1 className="sm:text-4xl font-semibold mb-2">
              Our Expertise <span className="text-blue-600 inline">Includes</span>
            </h1>
            <span className="w-[75%] text-[#6b7280]">
              With a strong focus on Fintech, AppDevs provides innovative and reliable solutions
              that drive business growth. We aim to create exceptional software that meets the
              evolving needs of the market.
            </span>
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {/* Card 1 */}
          <div className="vision__item text-center">
            <div className="text-center relative">
              <img
                alt="Vision"
                loading="lazy"
                width="388"
                height="388"
                decoding="async"
                className="w-[60%] mx-auto"
                src="https://appdevs.net/_next/static/media/vision.b7f56b52.webp"
                style={{ color: 'transparent' }}
              />
              <img
                alt="Innovate Icon"
                loading="lazy"
                width="70"
                height="70"
                decoding="async"
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto"
                src="https://appdevs.net/_next/static/media/vate.be59d8aa.webp"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="content mt-[100px]">
              <h5 className="mb-2 font-semibold">Innovate</h5>
              <p className="text-small text-[#6b7280]">
                We are committed to continuous innovation, providing solutions that push the
                boundaries of technology.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="vision__item text-center">
            <div className="text-center relative">
              <img
                alt="Vision"
                loading="lazy"
                width="388"
                height="388"
                decoding="async"
                className="w-[60%] mx-auto"
                src="https://appdevs.net/_next/static/media/vision.b7f56b52.webp"
                style={{ color: 'transparent' }}
              />
              <img
                alt="Empower Icon"
                loading="lazy"
                width="70"
                height="70"
                decoding="async"
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto"
                src="https://appdevs.net/_next/static/media/power.c2751187.webp"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="content mt-[100px]">
              <h5 className="mb-2 font-semibold">Empower</h5>
              <p className="text-small__font  text-[#6b7280]">
                Our goal is to empower businesses with tools that streamline operations, enhance
                productivity, and fuel growth.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="vision__item text-center">
            <div className="text-center relative">
              <img
                alt="Vision"
                loading="lazy"
                width="388"
                height="388"
                decoding="async"
                className="w-[60%] mx-auto"
                src="https://appdevs.net/_next/static/media/vision.b7f56b52.webp"
                style={{ color: 'transparent' }}
              />
              <img
                alt="Deliver Excellence Icon"
                loading="lazy"
                width="70"
                height="70"
                decoding="async"
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto"
                src="https://appdevs.net/_next/static/media/deliver.23951560.webp"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="content mt-[100px]">
              <h5 className="mb-2 font-semibold">Deliver Excellence</h5>
              <p className="text-small__font text-[#6b7280]">
                We focus on delivering high-quality, reliable software that meets the highest
                industry standards.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="vision__item text-center">
            <div className="text-center relative">
              <img
                alt="Vision"
                loading="lazy"
                width="388"
                height="388"
                decoding="async"
                className="w-[60%] mx-auto"
                src="https://appdevs.net/_next/static/media/vision.b7f56b52.webp"
                style={{ color: 'transparent' }}
              />
              <img
                alt="Mobile Development Icon"
                loading="lazy"
                width="70"
                height="70"
                decoding="async"
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto"
                src="https://appdevs.net/_next/static/media/mobile.605d38d4.webp"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="content mt-[100px]">
              <h5 className="mb-2 font-semibold">Mobile App Development</h5>
              <p className="text-small__font text-[#6b7280]">
                Solutions designed not just for today, but for the future of your business and
                industry.
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="vision__item text-center">
            <div className="text-center relative">
              <img
                alt="Vision"
                loading="lazy"
                width="388"
                height="388"
                decoding="async"
                className="w-[60%] mx-auto"
                src="https://appdevs.net/_next/static/media/vision.b7f56b52.webp"
                style={{ color: 'transparent' }}
              />
              <img
                alt="Web Development Icon"
                loading="lazy"
                width="70"
                height="70"
                decoding="async"
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mx-auto"
                src="https://appdevs.net/_next/static/media/web.40b6f23a.webp"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="content mt-[100px]">
              <h5 className="mb-2 font-semibold">Custom Web Development</h5>
              <p className="text-small__font text-[#6b7280]">
                As we expand our reach, we’re committed to creating a lasting impact on the global
                technology landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
