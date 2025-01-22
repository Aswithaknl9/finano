import React from 'react';

const RevenueStrategies5 = () => {
  const strategies = [
    {
      imgSrc: 'https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png',
      imgWidth: 25,
      imgHeight: 24,
      title: 'Issuance Fees',
      description:
        'Charge a nominal fee for generating virtual cards for users.',
    },
    {
      imgSrc: 'https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png',
      imgWidth: 29,
      imgHeight: 24,
      title: 'Transaction Fees',
      description:
        'Earn revenue from every transaction processed using the virtual cards.',
    },
    {
      imgSrc: 'https://appdevs.net/_next/static/media/security.22ebe9d6.png',
      imgWidth: 20,
      imgHeight: 24,
      title: 'Subscription Plans',
      description:
        'Offer premium card features like enhanced limits and multi-currency options through subscription models.',
    },
    {
      imgSrc: 'https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png',
      imgWidth: 23,
      imgHeight: 24,
      title: 'Partnership Collaborations',
      description:
        'Collaborate with businesses to issue co-branded virtual cards for mutual benefits.',
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

export default RevenueStrategies5;
