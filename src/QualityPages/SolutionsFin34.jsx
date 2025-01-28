import React from 'react';

const solutions = [
    {
        title: "Functional Testing",
        description: "Validate that your software performs its intended functions seamlessly across all scenarios.",
        iconSrc: "https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png",
      },
      {
        title: "Performance Testing",
        description: "Ensure your software operates optimally under high traffic, heavy data loads, and real-world conditions.",
        iconSrc: "https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png",
      },
      {
        title: "Automation Testing",
        description: "Speed up testing cycles and improve accuracy with advanced automation tools like Selenium and Appium.",
        iconSrc: "https://appdevs.net/_next/static/media/security.22ebe9d6.png",
      },
      {
        title: "Security Testing",
        description: "Identify vulnerabilities and safeguard your software against potential cyber threats.",
        iconSrc: "https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png",
      },
      {
        title: "Compatibility Testing",
        description: "Test your software across various browsers, devices, and operating systems for consistent performance.",
        iconSrc: "https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png",
      },
      {
        title: "Usability Testing",
        description: "Enhance user satisfaction with intuitive interfaces and smooth navigation.",
        iconSrc: "https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png",
      },
      {
        title: "Regression Testing",
        description: "Verify that new updates or changes don’t affect the existing functionality of your software.",
        iconSrc: "https://appdevs.net/_next/static/media/security.22ebe9d6.png",
      },
      {
        title: "Mobile App Testing",
        description: "Deliver bug-free, high-performance mobile apps tailored for iOS and Android platforms.",
        iconSrc: "https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png",
      },
];

const SolutionsFin34 = () => {
  return (
    <section className="pt-12 px-4 sm:px-8 lg:px-32">
      <div className="bg-[#EBF2FD] py-8 sm:py-10 px-6 sm:px-10 rounded-[30px] overflow-hidden relative">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">Our Expertise in Software Quality Assurance and Testing</h2>
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

export default SolutionsFin34;
