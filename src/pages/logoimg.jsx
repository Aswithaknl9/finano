import React from 'react';


const BrandLogos = () => {
  return (
    <section className="py-10">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        {/* Scrollable Brand Logos */}
        <div className="overflow-hidden">
          <div className="flex animate-marquee">
            <div className="flex-[0_0_33.33%] sm:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 text-center">
              <div className="flex items-center justify-center">
                <img alt="Brand Logo" loading="lazy" width="255" height="80" className="lg:h-[37px] sm:h-7 h-5 w-auto" src="https://appdevs.net/_next/static/media/fastpay.83ac66a5.webp" />
              </div>
            </div>
            <div className="flex-[0_0_33.33%] sm:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 text-center">
              <div className="flex items-center justify-center">
                <img alt="Brand Logo" loading="lazy" width="199" height="51" className="lg:h-[37px] sm:h-7 h-5 w-auto" src="https://appdevs.net/_next/static/media/sumer.d1d44975.webp" />
              </div>
            </div>
            <div className="flex-[0_0_33.33%] sm:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 text-center">
              <div className="flex items-center justify-center">
                <img alt="Brand Logo" loading="lazy" width="272" height="61" className="lg:h-[37px] sm:h-7 h-5 w-auto" src="https://appdevs.net/_next/static/media/mepayer.7f42872f.webp" />
              </div>
            </div>
            <div className="flex-[0_0_33.33%] sm:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 text-center">
              <div className="flex items-center justify-center">
                <img alt="Brand Logo" loading="lazy" width="275" height="48" className="lg:h-[37px] sm:h-7 h-5 w-auto" src="https://appdevs.net/_next/static/media/izoniecards.60d873ef.webp" />
              </div>
            </div>
            <div className="flex-[0_0_33.33%] sm:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 text-center">
              <div className="flex items-center justify-center">
                <img alt="Brand Logo" loading="lazy" width="198" height="64" className="lg:h-[37px] sm:h-7 h-5 w-auto" src="https://appdevs.net/_next/static/media/cryptoinvest.7dd00e48.webp" />
              </div>
            </div>
            <div className="flex-[0_0_33.33%] sm:flex-[0_0_25%] lg:flex-[0_0_20%] min-w-0 text-center">
              <div className="flex items-center justify-center">
                <img alt="Brand Logo" loading="lazy" width="142" height="79" className="lg:h-[37px] sm:h-7 h-5 w-auto" src="https://appdevs.net/_next/static/media/digit.c9aaabce.webp" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
