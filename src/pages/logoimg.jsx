import React from 'react';

const BrandLogos = () => {
  return (
    <section className="py-10">
      <div className="xl:max-w-[1280px] container mx-auto px-4 overflow-hidden">
        {/* Scrollable Brand Logos */}
        <div className="flex whitespace-nowrap animate-loop-scroll">
          {/* Logos (Repeated for Continuous Scrolling) */}
          {[
            "https://appdevs.net/_next/static/media/fastpay.83ac66a5.webp",
            "https://appdevs.net/_next/static/media/sumer.d1d44975.webp",
            "https://appdevs.net/_next/static/media/mepayer.7f42872f.webp",
            "https://appdevs.net/_next/static/media/izoniecards.60d873ef.webp",
            "https://appdevs.net/_next/static/media/cryptoinvest.7dd00e48.webp",
            "https://appdevs.net/_next/static/media/digit.c9aaabce.webp"
          ].map((logo, index) => (
            <div key={index} className="flex-[0_0_33.33%] sm:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 text-center">
              <div className="flex items-center justify-center">
                <img alt="Brand Logo" loading="lazy" className="lg:h-[37px] sm:h-7 h-5 w-auto" src={logo} />
              </div>
            </div>
          ))}
          
          {/* Duplicate logos to create an infinite loop effect */}
          {[
            "https://appdevs.net/_next/static/media/fastpay.83ac66a5.webp",
            "https://appdevs.net/_next/static/media/sumer.d1d44975.webp",
            "https://appdevs.net/_next/static/media/mepayer.7f42872f.webp",
            "https://appdevs.net/_next/static/media/izoniecards.60d873ef.webp",
            "https://appdevs.net/_next/static/media/cryptoinvest.7dd00e48.webp",
            "https://appdevs.net/_next/static/media/digit.c9aaabce.webp"
          ].map((logo, index) => (
            <div key={`duplicate-${index}`} className="flex-[0_0_33.33%] sm:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 text-center">
              <div className="flex items-center justify-center">
                <img alt="Brand Logo" loading="lazy" className="lg:h-[37px] sm:h-7 h-5 w-auto" src={logo} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
