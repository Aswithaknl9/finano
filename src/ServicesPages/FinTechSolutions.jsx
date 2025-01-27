import React from "react";

const FinTechSolutions = () => {
  const solutions = [
    {
      title: "Mobile Banking Solutions",
      description:
        "24/7 secure transactions with customized features for individual user needs.",
      image: "https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png",
    },
    {
      title: "Digital Wallets",
      description:
        "Seamless money transfers, multi-currency support, and QR code payments.",
      image: "https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png",
    },
    {
      title: "Crowdfunding & Investment Platforms",
      description:
        "User-friendly platforms to streamline investment and fundraising processes.",
      image: "https://appdevs.net/_next/static/media/security.22ebe9d6.png",
    },
    {
      title: "Payment Gateway Integration",
      description:
        "Flexible integration options for secure, global payment acceptance.",
      image: "https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png",
    },
  ];

  return (
    <section className="pt-[40px] mx-28">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="bg-[#EBF2FD] py-[30px] sm:py-[40px] px-[20px] sm:px-[30px] rounded-[50px] overflow-hidden relative">
          {/* Section Header */}
          <div className="section_header relative z-[2] mb-7 lg:mb-12 text-center">
            <div className="max-w-[700px] mx-auto">
              <h2 className="mb-2 font-semibold text-[50px]">Comprehensive Custom FinTech Development</h2>
            </div>
          </div>

          {/* Grid of Solutions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 relative">
            {/* Background Image */}
            <img
              alt="Background Image"
              loading="lazy"
              width="1366"
              height="720"
              src="https://appdevs.net/_next/static/media/solutionBg.db024656.webp"
              className="hidden sm:flex absolute top-[-100%]"
              style={{ color: "transparent" }}
            />

            {/* Solution Cards */}
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-[20px] shadow-lg px-5 py-6 z-20"
              >
                <div className="w-[48px] h-[48px] bg-white rounded-full shadow-primary__shadow flex items-center justify-center mb-4">
                  <img
                    alt={solution.title}
                    loading="lazy"
                    width="25"
                    height="25"
                    src={solution.image}
                    className="object-contain"
                    style={{ color: "transparent" }}
                  />
                </div>
                <h5 className="text-[18px] lg:text-[20px] font-semibold mb-3">
                  {solution.title}
                </h5>
                <p className="text-[14px] text-[#6b7280]">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinTechSolutions;
