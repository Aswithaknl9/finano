import React from "react";

const CommunitySection = () => {
  return (
    <section className="pt-[20px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="bg-white shadow-primary__shadow border border-gray_border_color py-8 lg:py-10 px-5 sm:px-8 lg:px-16 rounded-[30px] lg:flex items-center justify-between">
          <div className="md:flex items-center lg:w-2/4">
            <div className="w-[63px] md:mr-[25px] mb-3 lg:mb-0">
              <img
                alt="contact thumb"
                loading="lazy"
                width="63"
                height="63"
                decoding="async"
                src="https://appdevs.net/_next/static/media/community.543370a3.webp"
              />
            </div>
            <div className="md:w-[calc(100%-63px)]">
              <h4 className="mb-1 lg:text-[24px] text-[16px] font-semibold">Join Our Community</h4>
              <p className="text-sm text-[#6b7280]">
                Join our community to stay updated with the latest innovations and news.
              </p>
            </div>
          </div>
          <ul className="flex flex-wrap items-center justify-between gap-4 lg:gap-8 mt-3 lg:mt-0">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a className="transition-all hover:opacity-70" target="_blank" rel="noopener noreferrer" href={link.href}>
                  <svg
                    width={link.width}
                    height={link.height}
                    viewBox={link.viewBox}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 lg:w-10"
                  >
                    <path d={link.path} fill="#9CA3AF"></path>
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const socialLinks = [
  {
    href: "https://www.youtube.com/channel/UCFBLUFFIutRbb9hTNNSt9xQ",
    width: "45",
    height: "32",
    viewBox: "0 0 45 32",
    path: "M43.9453 5.29481C43.4345 3.37595 41.9294 1.86471 40.0184 1.35185C36.5546 0.419922 22.6652 0.419922 22.6652 0.419922C22.6652 0.419922 8.7759 0.419922 5.31203 1.35185C3.40105 1.86479 1.89598 3.37595 1.38515 5.29481C0.457031 8.77286 0.457031 16.0295 0.457031 16.0295C0.457031 16.0295 0.457031 23.2861 1.38515 26.7642C1.89598 28.683 3.40105 30.1313 5.31203 30.6442C8.7759 31.5761 22.6652 31.5761 22.6652 31.5761C22.6652 31.5761 36.5545 31.5761 40.0184 30.6442C41.9294 30.1313 43.4345 28.683 43.9453 26.7642C44.8734 23.2861 44.8734 16.0295 44.8734 16.0295C44.8734 16.0295 44.8734 8.77286 43.9453 5.29481ZM18.1226 22.618V9.44102L29.7314 16.0297L18.1226 22.618V22.618Z"
  },
  {
    href: "https://www.facebook.com/appdevsx",
    width: "41",
    height: "40",
    viewBox: "0 0 41 40",
    path: "M40.5461 20.1217C40.5461 9.00609 31.5186 0 20.3766 0C9.23452 0 0.207031 9.00609 0.207031 20.1217C0.207031 30.1647 7.58273 38.4892 17.2251 40V25.9383H12.1014V20.1217H17.2251V15.6884C17.2251 10.6458 20.2342 7.86045 24.8431 7.86045C27.0504 7.86045 29.3585 8.25314 29.3585 8.25314V13.2024H26.8145C24.3096 13.2024 23.528 14.7538 23.528 16.3448V20.1217H29.1218L28.2272 25.9383H23.528V40C33.1704 38.4892 40.5461 30.1647 40.5461 20.1217Z"
  },
  {
    href: "https://bd.linkedin.com/company/appdevs",
    width: "38",
    height: "38",
    viewBox: "0 0 38 38",
    path:"M34.5906 0.824463H3.3522C1.92081 0.824463 0.757812 2.00093 0.757812 3.44515V34.5527C0.757812 35.9969 1.92081 37.1734 3.3522 37.1734H34.5906C36.0219 37.1734 37.1931 35.9969 37.1931 34.5527V3.44515C37.1931 2.00093 36.0219 0.824463 34.5906 0.824463ZM11.7697 31.9807H6.36949V14.6338H11.7779V31.9807H11.7697ZM9.06961 12.2646C7.3373 12.2646 5.93845 10.861 5.93845 9.14089C5.93845 7.42081 7.3373 6.01716 9.06961 6.01716C10.7938 6.01716 12.2008 7.42081 12.2008 9.14089C12.2008 10.8691 10.8019 12.2646 9.06961 12.2646ZM32.0124 31.9807H26.6122V23.5425C26.6122 21.5303 26.5715 18.9421 23.8064 18.9421C20.9924 18.9421 20.5614 21.1328 20.5614 23.3965V31.9807H15.1611V14.6338H20.3418V17.003H20.415C21.1388 15.6399 22.9036 14.2038 25.5305 14.2038C30.9958 14.2038 32.0124 17.7981 32.0124 22.4715V31.9807Z"
  }
];

export default CommunitySection;
