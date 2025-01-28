import React from 'react';

const solutions = [
    {
        title: "Application Maintenance",
        description: "Keep your software applications running smoothly with regular updates, bug fixes, and performance enhancements.",
        iconSrc: "https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png",
      },
      {
        title: "Website Maintenance",
        description: " Ensure your website is always up-to-date, secure, and optimized for speed and performance.",
        iconSrc: "https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png",
      },
      {
        title: "24/7 Technical Support",
        description: "Get round-the-clock support from our expert team to quickly resolve any issues and minimize downtime.",
        iconSrc: "https://appdevs.net/_next/static/media/security.22ebe9d6.png",
      },
      {
        title: "Server Maintenance",
        description: "Maintain peak server performance with proactive monitoring, backups, and troubleshooting.",
        iconSrc: "https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png",
      },
      {
        title: "Database Management",
        description: "Optimize your database performance with regular maintenance, updates, and backups.",
        iconSrc: "https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png",
      },
      {
        title: "Performance Monitoring & Optimization",
        description: "Analyze and optimize your digital assets to improve speed, scalability, and user experience.",
        iconSrc: "https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png",
      },
      {
        title: "Security Updates and Compliance",
        description: "Protect your systems with timely security patches and ensure compliance with industry regulations.",
        iconSrc: "https://appdevs.net/_next/static/media/security.22ebe9d6.png",
      },
      {
        title: "Third-Party Integration Support",
        description: "Manage and maintain integrations with external systems or APIs to ensure seamless functionality.",
        iconSrc: "https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png",
      },
      
];

const SolutionsFin7 = () => {
  return (
    <section className="pt-12 px-4 sm:px-8 lg:px-32">
      <div className="bg-[#EBF2FD] py-8 sm:py-10 px-6 sm:px-10 rounded-[30px] overflow-hidden relative">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">Comprehensive Maintenance and Support Services</h2>
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

export default SolutionsFin7;
