import React from 'react';

const Startbusiness1111 = () => {
  return (
    <section className="py-[130px]">
      <div className="xl:max-w-[1248px] container mx-auto">
        <div className="relative rounded-[30px] overflow-hidden z-10 py-20 px-8 bg-[linear-gradient(90deg,#061A46_0%,#153885_100%)]">
          <div className="absolute top-0 left-0 z-[-1]">
            <img
              alt="process"
              loading="lazy"
              width="1312"
              height="699"
              decoding="async"
              className="object-cover"
              src="https://appdevs.net/_next/static/media/process-bg.c4350ce0.webp"
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="absolute top-0 left-0 z-[-1]">
            <img
              alt="process"
              loading="lazy"
              width="417"
              height="415"
              decoding="async"
              className="object-cover"
              src="https://appdevs.net/_next/static/media/process-element.f0d83ec5.webp"
              style={{ color: 'transparent' }}
            />
          </div>

          <div className="mb-7 lg:mb-14 grid grid-cols-12">
            <div className="text-center col-span-12 lg:col-span-8 lg:col-start-3">
              <h2 className="text-white sm:text-2xl lg:text-5xl font-semibold ">Our Hiring Process</h2>
            </div>
          </div>

          <div className="px-0 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-3">
            {/* Step 1: Submit Your Application */}
            <article className="text-center">
              <div className="w-12 h-12 flex justify-center items-center rounded-full text-2xl font-bold bg-[#DBEAFE] mx-auto mb-4">
                <img
                  alt="Submit Your Application"
                  loading="lazy"
                  className="object-cover w-[70%]"
                  src="https://appdevs.net/_next/static/media/buy.78ac122f.webp"
                />
              </div>
              <h5 className="text-white mb-2.5">Submit Your Application</h5>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
            </article>

            {/* Step 2: Candidate Shortlisting */}
            <article className="text-center">
              <div className="w-12 h-12 flex justify-center items-center rounded-full text-2xl font-bold bg-[#DBEAFE] mx-auto mb-4">
                <img
                  alt="Candidate Shortlisting"
                  loading="lazy"
                  className="object-cover w-[70%]"
                  src="https://appdevs.net/_next/static/media/customize.3899f146.webp"
                />
              </div>
              <h5 className="text-white mb-2.5">Candidate Shortlisting</h5>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
            </article>

            {/* Step 3: Interviews & Assignments */}
            <article className="text-center">
              <div className="w-12 h-12 flex justify-center items-center rounded-full text-2xl font-bold bg-[#DBEAFE] mx-auto mb-4">
                <img
                  alt="Interviews & Assignments"
                  loading="lazy"
                  className="object-cover w-[70%]"
                  src="https://appdevs.net/_next/static/media/customize.3899f146.webp"
                />
              </div>
              <h5 className="text-white mb-2.5">Interviews & Assignments</h5>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
            </article>

            {/* Step 4: Onboarding & Mentorship */}
            <article className="text-center">
              <div className="w-12 h-12 flex justify-center items-center rounded-full text-2xl font-bold bg-[#DBEAFE] mx-auto mb-4">
                <img
                  alt="Onboarding & Mentorship"
                  loading="lazy"
                  className="object-cover w-[70%]"
                  src="https://appdevs.net/_next/static/media/launch.20325f70.webp"
                />
              </div>
              <h5 className="text-white mb-2.5">Onboarding & Mentorship</h5>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
            </article>
          </div>

          <div className="flex justify-center items-center space-x-4 mt-20">
              <a
                className="primary__btn transition transform hover:scale-105 hover:shadow-lg"
                href="/contact"
                data-analytics="cta-contact-us"
              >
                <span className='text-white bg-blue-600 font-semibold px-3 py-3 rounded-md'>Let's Talk</span>
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Startbusiness1111;
