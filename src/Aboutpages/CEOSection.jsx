import React from "react";

const CEOSection = () => {
  return (
    <section className="pt-[130px] bg-[#f3f4f6]">
      <div className="container mx-auto px-4 xl:max-w-[1280px]">
        <div className="md:flex items-center">
          {/* CEO Image */}
          <div className="p-2 w-[280px] sm:w-[350px] md:w-[400px] md:h-[400px] flex justify-center shadow-lg rounded-[20px] overflow-hidden">
            <img
              alt="CEO"
              src="https://appdevs.net/_next/static/media/ceo.8978836e.webp"
              className="object-cover object-left-top bg-[#dbdbdb] rounded-[20px]"
            />
          </div>

          {/* CEO Message */}
          <div className="md:w-[calc(100%-400px)] md:pl-12 pt-10 md:pt-0">
            {/* Quote Icon */}
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-6 fill-blue-600"
            >
              <path d="M0 0V24L11.9689 12V0H0Z"></path>
              <path d="M19.9492 0V24L31.9181 12V0H19.9492Z"></path>
            </svg>

            {/* Heading */}
            <h2 className="text-3xl font-bold mt-4">
              Founder and CEO’s <span className="text-blue-600">Message</span>
            </h2>

            {/* Message Text */}
            <p className="mt-4 text-lg text-[#4b5563] text-justify md:text-left">
              “At AppDevs, our mission is simple – to transform how businesses interact
              with technology. We understand the challenges of today’s fast-paced
              digital world and are dedicated to providing cutting-edge solutions that
              drive growth. With expertise in FinTech, mobile development, and scalable
              enterprise systems, we focus on building products that meet current needs
              and anticipate future demands. Our team is committed to excellence,
              ensuring our clients can navigate the complexities of modern business with
              confidence. I’m proud of our journey so far, and we’re more committed than
              ever to pushing the boundaries of innovation. A heartfelt thanks to our
              clients for placing their trust in us. Your continued support motivates us
              to deliver our best every day.“
            </p>

            {/* Signature */}
            <div className="mt-6">
              <p className="text-small text-[#6b7280] font-medium mb-1">- Best Regards</p>
              <h5 className="font-bold">Mostafijur Rahman</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;
