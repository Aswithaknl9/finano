import React from 'react';

const Installation1 = () => {
  return (
    <div>
      <div className="bg-[#f7f7f7] shadow-lg border border-gray-300 rounded-[20px] mx-40 mt-14 p-8">
        <h4 className="mb-4 font-semibold text-xl">Installation Of Our Best-Selling Products</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-3">
          {[
            {
              name: 'QRPay',
              imgSrc: 'https://appdevs.net/_next/static/media/qrpay.20aa96fb.webp',
              link: 'https://qrpay.agency/installation-plan',
            },
            {
              name: 'StripCard',
              imgSrc: 'https://appdevs.net/_next/static/media/stripcard.2cc343d3.webp',
              link: 'https://stripcard.app/installation-plan',
            },
            {
              name: 'XRemit',
              imgSrc: 'https://appdevs.net/_next/static/media/xremit.32bd3e01.webp',
              link: 'https://xremit.app/installation-plan',
            },
            {
              name: 'CrypInvest',
              imgSrc: 'https://appdevs.net/_next/static/media/crypinvest.30ffda30.webp',
              link: 'https://crypinvest.app/installation-plan',
            },
            {
              name: 'Escroc',
              imgSrc: 'https://appdevs.net/_next/static/media/escroc.c46ddd98.webp',
              link: 'https://escroc.app/installation-plan',
            },
            {
              name: 'Walletium',
              imgSrc: 'https://appdevs.net/_next/static/media/walletium.8417fd21.webp',
              link: 'https://walletium.agency/installation-plan',
            },
          ].map(({ name, imgSrc, link }, index) => (
            <div key={index} className="bg-white shadow-primary__shadow rounded-[15px] p-5 text-center">
              <a target="_blank" rel="noopener noreferrer" href={link}>
                <div className="w-[45px] h-[45px] flex justify-center items-center shadow-card__shadow border border-gray_border_color rounded-full mx-auto mb-3">
                  <img alt={name} fetchPriority="high" width="25" height="25" src={imgSrc} />
                </div>
                <h5 className="font-semibold text-[17px]">{name}</h5>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installation1;
