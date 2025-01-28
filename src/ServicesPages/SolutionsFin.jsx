import React from 'react';

const solutions = [
  {
    title: 'iOS App Development',
    description: 'Build seamless, feature-rich iOS applications with native Swift or Objective-C technologies for superior performance.',
    iconSrc: 'https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png',
  },
  {
    title: 'Android App Development',
    description: 'Create scalable, responsive Android apps using Kotlin and Java to reach a vast audience.',
    iconSrc: 'https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png',
  },
  {
    title: 'Cross-Platform App Development',
    description: 'Leverage frameworks like Flutter and React Native for cost-effective apps with a native-like experience on multiple platforms.',
    iconSrc: 'https://appdevs.net/_next/static/media/security.22ebe9d6.png',
  },
  {
    title: 'Enterprise Mobile Solutions',
    description: 'Develop custom enterprise apps to streamline workflows, enhance productivity, and improve decision-making.',
    iconSrc: 'https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png',
  },
  {
    title: 'E-Commerce App Development',
    description: 'Build intuitive e-commerce apps to offer smooth shopping experiences and boost customer engagement.',
    iconSrc: 'https://appdevs.net/_next/static/media/security.22ebe9d6.png',
  },
  {
    title: 'Custom App Solutions',
    description: 'Create tailor-made apps designed to meet your unique business requirements and goals.',
    iconSrc: 'https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png',
  },
  {
    title: 'UI/UX Design',
    description: 'Deliver visually stunning apps with intuitive navigation and user-centric designs.',
    iconSrc: 'https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png',
  },
  {
    title: 'App Maintenance and Support',
    description: 'Ensure seamless app performance with regular updates, bug fixes, and feature enhancements.',
    iconSrc: 'https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png',
  },
];

const SolutionsFin = () => {
  return (
    <section className='pt-[50px] mx-32'>
    <div className="bg-[#EBF2FD] py-[30px] sm:py-[40px] mx-auto px-[20px] sm:px-[30px] rounded-[50px] overflow-hidden">
      <div className="section_header relative z-[2] mb-7 lg:mb-12">
        <div className="max-w-[700px] mx-auto text-center">
          <h2 className="mb-2 font-semibold text-5xl">Comprehensive Custom FinTech Solutions</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 relative">
        {/* Background Image (hidden on small screens) */}
        <img
          alt="Background Image"
          loading="lazy"
          className="hidden sm:flex absolute top-[-100%]"
          src="https://appdevs.net/_next/static/media/solutionBg.5af31a08.png"
          width="1366"
          height="720"
        />

        {/* Solution Cards */}
        {solutions.map((solution, index) => (
          <div key={index} className="bg-white rounded-[20px] shadow-primary__shadow px-5 py-6 z-20">
            <div className="w-[48px] h-[48px] bg-white rounded-full shadow-primary__shadow flex items-center justify-center mb-4">
              <img alt={solution.title} className="object-contain" src={solution.iconSrc} />
            </div>
            <h5 className="text-[12px] lg:text-[19px] font-semibold mb-3">{solution.title}</h5>
            <p className="text-[12px] text-[#6b7280]">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default SolutionsFin;
