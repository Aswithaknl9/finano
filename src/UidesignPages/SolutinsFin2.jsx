import React from "react";

const solutions = [
  {
    title: "User Interface (UI) Design",
    description: "Build aesthetically appealing interfaces with modern design principles to captivate your audience.",
    iconSrc: "https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png",
  },
  {
    title: "User Experience (UX) Design",
    description: "Create intuitive and user-friendly experiences to keep your customers engaged.",
    iconSrc: "https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png",
  },
  {
    title: "Responsive Design",
    description: "Ensure consistent performance across all devices, from desktops to mobile phones.",
    iconSrc: "https://appdevs.net/_next/static/media/security.22ebe9d6.png",
  },
  {
    title: "SaaS Product Design",
    description: "Develop sleek, functional designs tailored for SaaS platforms to boost customer satisfaction.",
    iconSrc: "https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png",
  },
  {
    title: "Prototyping and Wireframing",
    description: "Visualize concepts with detailed prototypes and wireframes for efficient design iterations.",
    iconSrc: "https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png",
  },
  {
    title: "Interactive Design",
    description: "Incorporate dynamic elements for engaging user interactions.",
    iconSrc: "https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png",
  },
  {
    title: "Accessibility Optimization",
    description: "Make your digital solutions inclusive with accessible designs for all users.",
    iconSrc: "https://appdevs.net/_next/static/media/security.22ebe9d6.png",
  },
  {
    title: "Brand Identity Design",
    description: "Align your UI/UX designs with your brand identity for a cohesive digital presence.",
    iconSrc: "https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png",
  },
];

const SolutionsFin2 = () => {
  return (
    <section className="pt-12 px-4 sm:px-8 lg:px-32 relative">
      <div className="bg-[#EBF2FD] py-8 sm:py-10 px-6 sm:px-10 rounded-[50px] overflow-hidden">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">
            Our Expertise in UI/UX and SaaS Design Services
          </h2>
        </div>

        

        {/* Solution Cards */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg px-6 py-8 flex flex-col items-start text-center sm:text-left"
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-start justify-start mb-4">
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

export default SolutionsFin2;
