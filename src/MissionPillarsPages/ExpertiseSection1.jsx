import React from 'react';

const ExpertiseSection1 = () => {
  return (
    <section className="py-[130px] relative">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-20">
          <div className="max-w-[850px] mx-auto text-center">
            <h1 className="sm:text-4xl font-semibold mb-2">
            The Future We <span className="text-[#7c3aed] inline">Envision</span>
            </h1>
            <span className="w-[75%] text-[#6b7280]">
            Focused on driving long-term growth and financial inclusion, we create scalable and sustainable solutions that adapt to your business needs, shaping the future of industries worldwide.
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
                src="https://appdevs.net/_next/static/media/growth.7a5b8fef.webp"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="content mt-[100px]">
              <h5 className="mb-2 font-semibold">Drive Growth</h5>
              <p className="text-small text-[#6b7280]">
              Our vision is to help businesses achieve sustainable growth through the strategic use of technology.
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
                src="https://appdevs.net/_next/static/media/champion.4097e3eb.webp"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="content mt-[100px]">
              <h5 className="mb-2 font-semibold">Champion Financial Inclusion</h5>
              <p className="text-small__font  text-[#6b7280]">
              We believe in a world where secure, accessible financial solutions are available to everyone, everywhere.
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
                src="https://appdevs.net/_next/static/media/solutions.de19f6f6.webp"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="content mt-[100px]">
              <h5 className="mb-2 font-semibold">Scalable Solutions</h5>
              <p className="text-small__font text-[#6b7280]">
              Technology that grows with your business, providing long-term value and adaptability.</p>
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
                src="https://appdevs.net/_next/static/media/sustain.c3fa7131.webp"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="content mt-[100px]">
              <h5 className="mb-2 font-semibold">Sustainable Innovation</h5>
              <p className="text-small__font text-[#6b7280]">
              Solutions designed not just for today, but for the future of your business and industry.
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
                src="https://appdevs.net/_next/static/media/impact.ce467eb4.webp"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="content mt-[100px]">
              <h5 className="mb-2 font-semibold">Global Impact</h5>
              <p className="text-small__font text-[#6b7280]">
              As we expand our reach, we’re committed to creating a lasting impact on the global technology landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection1;
