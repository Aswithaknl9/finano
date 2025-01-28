import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Startbusiness116 = () => {
  return (
    <div>
      <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-32">
        <div className="container mx-auto">
          <div className="relative rounded-[30px] overflow-hidden z-10 py-10 sm:py-14 lg:py-20 px-6 sm:px-10 lg:px-14 bg-[linear-gradient(90deg,#061A46_0%,#153885_100%)]">
            {/* Background Images */}
            <div className="absolute top-0 left-0 z-[-1]">
              <img
                alt="process"
                src="https://appdevs.net/_next/static/media/process-bg.c4350ce0.webp"
                className="hidden sm:block"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="absolute top-0 left-0 z-[-1]">
              <img
                alt="process"
                src="https://appdevs.net/_next/static/media/process-element.f0d83ec5.webp"
                className="hidden sm:block"
                style={{ color: "transparent" }}
              />
            </div>

            {/* Header Section */}
            <div className="mb-8 lg:mb-10 text-center">
              <h2 className="text-white font-semibold text-2xl sm:text-4xl lg:text-5xl mb-4">
              Our DevOps Development Process
              </h2>
              <p className="text-white text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
              We follow a systematic approach to DevOps implementation that aligns with your business goals.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#DBEAFE] mx-auto mb-4">
                  <img
                    alt="Service Scope"
                    className="object-cover w-[70%]"
                    src="https://appdevs.net/_next/static/media/buy.78ac122f.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h4 className="text-white text-sm sm:text-base mb-2">Assessment & Planning</h4>
              </div>
              {/* Step 2 */}
              <div className="text-center">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#DBEAFE] mx-auto mb-4">
                  <img
                    alt="Features and Packages"
                    className="object-cover w-[70%]"
                    src="https://appdevs.net/_next/static/media/customize.3899f146.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h4 className="text-white text-sm sm:text-base mb-2">
                Infrastructure Setup
                </h4>
              </div>
              {/* Step 3 */}
              <div className="text-center">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#DBEAFE] mx-auto mb-4">
                  <img
                    alt="Brand Customization"
                    className="object-cover w-[70%]"
                    src="https://appdevs.net/_next/static/media/customize.3899f146.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h4 className="text-white text-sm sm:text-base mb-2">Pipeline Development</h4>
              </div>
              {/* Step 4 */}
              <div className="text-center">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#DBEAFE] mx-auto mb-4">
                  <img
                    alt="Integration and Setup"
                    className="object-cover w-[70%]"
                    src="https://appdevs.net/_next/static/media/launch.20325f70.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h4 className="text-white text-sm sm:text-base mb-2">Automation & Monitoring</h4>
              </div>
              {/* Step 5 */}
              <div className="text-center">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#DBEAFE] mx-auto mb-4">
                  <img
                    alt="Integration and Setup"
                    className="object-cover w-[70%]"
                    src="https://appdevs.net/_next/static/media/launch.20325f70.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h4 className="text-white text-sm sm:text-base mb-2">Testing & Deployment</h4>
              </div>
              {/* Step 6 */}
              <div className="text-center">
                <div className="w-12 h-12 flex justify-center items-center rounded-full bg-[#DBEAFE] mx-auto mb-4">
                  <img
                    alt="Integration and Setup"
                    className="object-cover w-[70%]"
                    src="https://appdevs.net/_next/static/media/launch.20325f70.webp"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h4 className="text-white text-sm sm:text-base mb-2">
                Support & Optimization
                </h4>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 lg:mt-14 text-center">
              <a
                className="bg-[#2974E7] text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-md hover:bg-[#1E40AF] transition duration-300 inline-flex items-center justify-center"
                href="/consultation"
                aria-label="Get Free Consultation"
              >
                Get Free Consultation{" "}
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Startbusiness116;
