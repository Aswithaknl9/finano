import React from "react";

const products = [
  {
    name: "QRPay",
    description: "Money Transfer with QR Code Full Solution",
    imgSrc: "https://appdevs.net/_next/static/media/qrpay.20aa96fb.webp",
    link: "https://qrpay.agency/documentation/welcome",
  },
  {
    name: "StripCard",
    description: "Virtual Credit Card Solution",
    imgSrc: "https://appdevs.net/_next/static/media/stripcard.2cc343d3.webp",
    link: "https://stripcard.app/documentation/welcome",
  },
  {
    name: "XRemit",
    description: "Remittance Money Transfer Full Solution",
    imgSrc: "https://appdevs.net/_next/static/media/xremit.32bd3e01.webp",
    link: "https://xremit.app/documentation/welcome",
  },
  {
    name: "AdFund",
    description: "Fund Raising Platform",
    imgSrc: "https://appdevs.net/_next/static/media/adfund.55b668df.webp",
    link: "https://adfund.app/documentation/welcome",
  },
  {
    name: "eSalon",
    description: "Parlour and Salon Booking",
    imgSrc: "https://appdevs.net/_next/static/media/esalon.157a63f7.webp",
    link: "https://e-salon.app/documentation/welcome",
  },
  {
    name: "CrypInvest",
    description: "Cryptocurrency Investment Platform",
    imgSrc: "https://appdevs.net/_next/static/media/crypinvest.30ffda30.webp",
    link: "https://crypinvest.app/documentation/welcome",
  },
];

const ProductGrid = () => {
  return (
    <section className="pt-16">
        <div className="xl:max-w-[1280px] container mx-auto px-4 mb-16">
        <div className="bg-[#EBF2FD] rounded-[40px] p-8">
            <h4 className="mb-4 text-2xl font-bold text-start">
            Complete Guide to Our Best-Selling Products
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {products.map((product, index) => (
                <div
                key={index}
                className="bg-white shadow-md border border-gray-300 rounded-[20px] p-5 transition-all duration-300 ease-in-out hover:shadow-lg"
                >
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <div className="w-[45px] h-[45px] flex justify-center items-center shadow-md border border-gray-300 rounded-full mb-4 bg-white">
                    <img
                        src={product.imgSrc}
                        alt={product.name}
                        loading="lazy"
                        width="25"
                        height="25"
                        className="object-contain"
                    />
                    </div>
                    <h5 className="font-semibold mb-2">{product.name}</h5>
                    <p className="text-sm text-[#6b7280]">{product.description}</p>
                </a>
                </div>
            ))}
            </div>
        </div>
        </div>
    </section>
  );
};

export default ProductGrid;
