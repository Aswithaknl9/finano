import React from 'react';

const DocumentationCards = () => {
  const products = [
    {
      title: 'QRPay Pro',
      description: 'Complete QRPay Solution with All Add-ons Bundle',
      link: 'https://qrpay-pro.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/qrpay.20aa96fb.webp',
    },
    {
      title: 'PayLoad',
      description: 'Airtime | Data Bundles | Gift cards and VTU Full Solution',
      link: 'https://pay-load.agency/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/payload.14f171ab.webp',
    },
    {
      title: 'XTream',
      description: 'Live Sports & Entertainment Streaming SAAS Solution',
      link: 'https://xtream.agency/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/xtream.502fb2ac.webp',
    },
    {
      title: 'NFCPay',
      description: 'Contactless Payment System Full Solution',
      link: 'https://nfc-pay.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/nfcpay.38ff37f3.webp',
    },
    {
      title: 'Walletium',
      description: 'Advanced Digital Mobile Wallet Full Solution',
      link: 'https://walletium.agency/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/walletium.8417fd21.webp',
    },
    {
      title: 'AdRadio',
      description: 'Live Radio Streaming Platform',
      link: 'https://adradio.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/adradio.f03fba89.webp',
    },
    {
      title: 'Escroc',
      description: 'Money Transfer with Escrow Solution',
      link: 'https://escroc.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/escroc.c46ddd98.webp',
    },
    {
      title: 'StripCard',
      description: 'Virtual Credit Card Solution',
      link: 'https://stripcard.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/stripcard.2cc343d3.webp',
    },
    {
      title: 'AdFund',
      description: 'Fund Raising Platform',
      link: 'https://adfund.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/adfund.55b668df.webp',
    },
    {
      title: 'Handiman',
      description: 'On Demand Services and Parcel Delivery',
      link: 'https://appdevs.net/_next/static/media/handiman.86665eb3.webp',
      imgSrc: 'https://appdevs.net/_next/static/media/handiman.86665eb3.webp',
    },
    {
      title: 'AdCrypto',
      description: 'Cryptocurrency Exchange and Buy Sell Full Solution',
      link: 'https://adcrypto.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/adcrypto.d6a6a59c.webp',
    },
    {
      title: 'PayLink',
      description: 'Invoice and Payment Link Generator',
      link: 'https://pay-link.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/paylink.07eb2c32.webp',
    },
    {
      title: 'XRemit',
      description: 'Remittance Money Transfer Full Solution',
      link: 'https://xremit.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/xremit.32bd3e01.webp',
    },
    {
      title: 'adChange',
      description: 'P2P Trading Platform Full Solution',
      link: 'https://adchange.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/adchange.739f0259.webp',
    },
    {
      title: 'ADoctor',
      description: 'Hospital Doctor Booking Platform',
      link: 'https://adoctor.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/adoctor.5574ce74.webp',
    },
    {
      title: 'MyCoin',
      description: 'Own Currency Business Platform Full Solution',
      link: 'https://my-coin.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/mycoin.a5a90c1e.webp',
    },
    {
      title: 'eSalon',
      description: 'Parlour and Salon Booking',
      link: 'https://e-salon.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/esalon.157a63f7.webp',
    },
    {
      title: 'QRPay',
      description: 'Money Transfer with QR Code Full Solution',
      link: 'https://qrpay.agency/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/qrpay.20aa96fb.webp',
    },
    {
      title: 'CrypInvest',
      description: 'Cryptocurrency Investment Platform',
      link: 'https://crypinvest.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/crypinvest.30ffda30.webp',
    },
    {
      title: 'MoneyMate',
      description: 'Company Investment Platform Full Solution',
      link: 'https://money-mate.app/documentation/welcome',
      imgSrc: 'https://appdevs.net/_next/static/media/moneymate.b87a2702.webp',
    },
  ];

  return (
    <div className="xl:max-w-[1280px] container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-primary__shadow border border-gray-200 r rounded-[20px] p-5 transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            <a target="_blank" className="flex items-center" href={product.link}>
              <div className="w-[60px] h-[60px] shadow-md border border-gray-200 rounded-full  bg-white flex justify-center items-center overflow-hidden mr-[20px]">
                <img
                  alt={`documentation product - ${product.title}`}
                  loading="lazy"
                  width="30"
                  height="30"
                  decoding="async"
                  src={product.imgSrc}
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="w-[calc(100%-70px)]">
                <h4 className="text-[20px] font-semibold mb-1">{product.title}</h4>
                <span className="text-[15px] font-medium">{product.description}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentationCards;
