import React from "react";
import Startbusiness1111 from "../TeamPages/Startbusiness1111";
import Questionss from "../TeamPages/Questionss";

const Team = () => {
  const careerImages = [
    "career2.28927d0a.webp",
    "career1.2e671df7.webp",
    "career3.34f8ae27.webp",
    "career4.c776face.webp",
    "career6.9ad84b84.webp",
    "career5.946f1f35.webp",
  ];

  const jobTitles = [
    "Junior Support Engineer (Laravel)",
    "Content Writer",
    "Video Editor",
  ];

  return (
    <div>
      {/* Career Section */}
      <section className="pt-[180px] pb-[130px] bg-[#f3f4f6] overflow-hidden relative">
        <img
          alt="Background Image"
          loading="lazy"
          width="777"
          height="946"
          decoding="async"
          className="absolute top-0 left-0 z-10 overflow-hidden  2xl:block"
          src="https://appdevs.net/_next/static/media/productPageLeftBg.321a9e4d.webp"
          style={{ color: "transparent" }}
        />
        <img
          alt="Background Image"
          loading="lazy"
          width="558"
          height="799"
          decoding="async"
          className="absolute top-[120px] right-0 z-10 overflow-hidden 2xl:block"
          src="https://appdevs.net/_next/static/media/solutionPageBgRight.e134874f.webp"
          style={{ color: "transparent" }}
        />
        <div className="xl:max-w-[1280px] container px-4 mx-auto relative z-20">
          <div className="section_header mb-10">
            <div className="max-w-[850px] mx-auto text-center">
              <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] uppercase rounded-full py-1 px-3 mb-6">
                Join Our Team
              </span>
              <h1 className="sm:text-5xl font-semibold mb-3">
                Build Your Career With AppDevs
              </h1>
              <span className="w-[10%] text-[#6b7280]">
                Join AppDevs and Grow your Career by working with industry-leading Experts. Be a part of Something Big Today!
              </span>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4 mb-12">
            {careerImages.map((image, index) => (
              <div key={index} className={`col-span-6 lg:col-span-${index === 3 || index === 6 ? "6" : "3"}`}>
                <div className="careert_humb">
                  <img
                    alt="Career Image"
                    loading="lazy"
                    width="700"
                    height="500"
                    decoding="async"
                    className="main__thumb transition-opacity duration-300"
                    src={`https://appdevs.net/_next/static/media/${image}`}
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            ))}
          </div>
          {jobTitles.map((jobTitle, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-[20px] border-[1px] border-solid border-[#E5E7EB] py-6 sm:py-8 px-6 sm:px-10 lg:flex items-center justify-between overflow-hidden mb-6"
            >
              <div className="lg:w-3/5">
                <h4 className="text-[20px] font-semibold mb-2">{jobTitle}</h4>
                <p className="text-[#6b7280] text-[16px]">
                  We’re looking for a passionate {jobTitle} to join our dynamic team and contribute to building impactful solutions!
                </p>
                <div className="sm:flex items-center sm:space-y-0 space-y-3 gap-8 pt-4">
                  <span className="text-sm text-[#6b7280] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 mr-2 text-[#6b7280]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 6h.008v.008H6V6Z"
                      ></path>
                    </svg>
                    Support
                  </span>
                  <span className="text-sm text-[#6b7280] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      ></path>
                    </svg>
                    October 31, 2024
                  </span>
                  <span className="text-sm text-[#6b7280] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      ></path>
                    </svg>
                    Mirpur DOHS, Dhaka
                  </span>
                </div>
              </div>
              <div className="apply__btn relative flex items-center ml-auto mt-5 lg:mt-0">
                <a
                  className="primary__btn"
                  href={`/join-our-team/${jobTitle.replace(/ /g, "-").toLowerCase()}`}
                >
                  <span className="text-white bg-blue-600 py-2 px-5 rounded-md">
                    Apply Now
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Separate Section for Startbusiness1111 */}
      <Startbusiness1111 />
      <Questionss />
    </div>
  );
};

export default Team;
