import React from "react";

const LogoImg = () => {
  return (
    <div>
      <section className="py-10">
        <div className="xl:max-w-[1280px] container mx-auto px-4">
          <div className="overflow-hidden">
            {/* Flex container with responsive wrapping */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              {/* Logos */}
              {[
                {
                  src: "https://appdevs.net/_next/static/media/fastpay.83ac66a5.webp",
                  alt: "FastPay Logo",
                  width: 255,
                  height: 80,
                },
                {
                  src: "https://appdevs.net/_next/static/media/izoniecards.60d873ef.webp",
                  alt: "Izonie Cards Logo",
                  width: 199,
                  height: 51,
                },
                {
                  src: "https://appdevs.net/_next/static/media/sumer.d1d44975.webp",
                  alt: "Sumer Logo",
                  width: 272,
                  height: 61,
                },
                {
                  src: "https://appdevs.net/_next/static/media/mepayer.7f42872f.webp",
                  alt: "MePayer Logo",
                  width: 275,
                  height: 48,
                },
                {
                  src: "https://appdevs.net/_next/static/media/digit.c9aaabce.webp",
                  alt: "Digit Logo",
                  width: 198,
                  height: 64,
                },
                {
                  src: "https://appdevs.net/_next/static/media/cryptoinvest.7dd00e48.webp",
                  alt: "CryptoInvest Logo",
                  width: 142,
                  height: 79,
                },
              ].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center flex-[0_0_45%] sm:flex-[0_0_30%] lg:flex-[0_0_20%] text-center"
                >
                  <img
                    alt={logo.alt}
                    loading="lazy"
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                    className="lg:h-[37px] sm:h-7 h-5 w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogoImg;
