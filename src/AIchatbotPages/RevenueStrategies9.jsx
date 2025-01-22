import React from 'react';

const RevenueStrategies9 = () => {
  const strategies = [
    {
      imgSrc: 'https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png',
      imgWidth: 25,
      imgHeight: 24,
      title: 'Subscription Services',
      description:
        'Offer chatbot functionalities as a subscription-based service for other businesses.',
    },
    {
      imgSrc: 'https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png',
      imgWidth: 29,
      imgHeight: 24,
      title: 'Premium Features',
      description:
        'Charge for advanced functionalities like voice assistance or multi-language support.',
    },
    {
      imgSrc: 'https://appdevs.net/_next/static/media/security.22ebe9d6.png',
      imgWidth: 20,
      imgHeight: 24,
      title: 'Advertising and Lead Generation',
      description:
        'Use chatbots to recommend services, upsell products, or generate leads.',
    },
    {
      imgSrc: 'https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png',
      imgWidth: 23,
      imgHeight: 24,
      title: 'Operational Cost Savings',
      description:
        'Reduce staffing costs by automating repetitive tasks, boosting overall profitability.',
    },
  ];

  return (
    <div
      className="relative  bg-center bg-cover py-12"
      style={{ backgroundImage: 'url(https://appdevs.net/_next/static/media/solutionBg.db024656.webp)' }}
    >
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3 relative">
        {strategies.map((strategy, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] shadow-lg md:px-5 px-4 md:py-6 py-4 z-20"
          >
            <div className="w-[48px] h-[48px] bg-white rounded-full shadow-lg flex items-center justify-center mb-4">
              <img
                alt="solution thumb"
                loading="lazy"
                width={strategy.imgWidth}
                height={strategy.imgHeight}
                decoding="async"
                src={strategy.imgSrc}
                style={{ color: 'transparent' }}
              />
            </div>
            <h5 className="md:text-[18px] font-semibold text-left mb-3">{strategy.title}</h5>
            <p className="md:text-[#6B7280] text-[12px] text-left">{strategy.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RevenueStrategies9;
