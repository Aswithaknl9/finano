import React from 'react';

const solutions = [
    {
        title: "Cloud Migration Services",
        description: "Seamlessly migrate your applications, data, and infrastructure to the cloud with minimal downtime and maximum security.",
        iconSrc: "https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png",
      },
      {
        title: "Cloud Infrastructure Management",
        description: "Optimize performance and costs with expertly managed cloud environments across leading providers like AWS, Azure, and Google Cloud.",
        iconSrc: "https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png",
      },
      {
        title: "Hybrid and Multi-Cloud Solutions",
        description: "Enjoy the best of both worlds with flexible hybrid and multi-cloud setups tailored to your unique needs.",
        iconSrc: "https://appdevs.net/_next/static/media/security.22ebe9d6.png",
      },
      {
        title: "Cloud-Native Application Development",
        description: "Build scalable, secure, and high-performing cloud-native applications using modern frameworks and technologies.",
        iconSrc: "https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png",
      },
      {
        title: "Data Backup & Disaster Recovery",
        description: "Protect your business with reliable cloud-based backup and disaster recovery solutions to ensure business continuity.",
        iconSrc: "https://appdevs.net/_next/static/media/security.22ebe9d6.png",
      },
      {
        title: "Cloud Security Services",
        description: "Safeguard your cloud environment with advanced security solutions, including threat detection, access control, and compliance monitoring.",
        iconSrc: "https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png",
      },
];

const Solutions5 = () => {
  return (
    <section className="pt-12 px-4 sm:px-8 lg:px-32">
      <div className="bg-[#EBF2FD] py-8 sm:py-10 px-6 sm:px-10 rounded-[30px] overflow-hidden relative">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">Comprehensive Cloud Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
          {/* Background Image */}
          <img
            alt="Background"
            loading="lazy"
            className="hidden sm:block absolute top-[-100px] right-[-100px] w-[300px] lg:w-[500px] opacity-20"
            src="https://appdevs.net/_next/static/media/solutionBg.5af31a08.png"
          />

          {/* Solution Cards */}
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg px-6 py-8 flex flex-col items-start text-center sm:text-left"
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-4">
                <img alt={solution.title} className="object-contain w-8 h-8" src={solution.iconSrc} />
              </div>
              <h5 className="text-sm sm:text-base lg:text-lg font-semibold mb-3">{solution.title}</h5>
              <p className="text-xs sm:text-sm text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions5;
