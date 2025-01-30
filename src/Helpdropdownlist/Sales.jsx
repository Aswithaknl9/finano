import React from 'react'
import ContactOptions from '../SalesPages/ContactOptions';

const Sales = () => {
  return (
    <section className="pt-[180px] relative">
      {/* Background Images */}
      <img
        alt="Background Image"
        loading="lazy"
        width="795"
        height="777"
        decoding="async"
        className="absolute top-0 left-0 z-[-2] 2xl:block"
        src="https://appdevs.net/_next/static/media/productPageLeftBg.321a9e4d.webp"
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
        <div className="section_header mb-7 lg:mb-14">
          <div className="max-w-[850px] mx-auto text-center">
            <div className='mb-6'>
            <span className="text-[12px]  font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3">
            Sales Support
            </span>
            </div>
            <div className="text-center">
            <h1 className="sm:text-[48px]  justify-center font-semibold">
                Talk to <span className="text-[#7c3aed]">Our Experts</span> for Instant Help
            </h1>
            <p className='text-[#6b7280]'>Have questions before you buy? Reach out through live chat or schedule an appointment for personalized support. Scan the QR code or open the app now to get started!</p>
            </div>

          </div>
        </div>
      </div>
      <ContactOptions />
    </section>
  );
};


export default Sales