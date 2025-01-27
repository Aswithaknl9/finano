import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const products = [
  {
    imgSrc: "https://s3.envato.com/files/563988173/inline.png",
    label: "Full-Applications",
    badge: "Featured",
    title: "QRPay - Money Transfer with QR Code Full Solution",
    price: "$79.00",
    sales: "499 Sales",
    productLink: "https://qrpay.agency",
    cartLink: "https://codecanyon.net/checkout/107161267/create_account", 
    livePreviewLink: "https://qrpay.agency", 
  },
  {
    imgSrc: "https://s3.envato.com/files/556853978/XRemit.png",
    label: "Full-Applications",
    badge: "Featured",
    title: "XRemit - Remittance Money Transfer Full Solution",
    price: "$49.00",
    sales: "118 Sales",
    productLink: "https://xremit.app",
    cartLink: "https://codecanyon.net/checkout/107161267/create_account", 
    livePreviewLink: "https://xremit.app",
  },
  {
    imgSrc: "https://s3.envato.com/files/556845182/CrypInvest.png",
    label: "Full-Applications",
    badge: "Featured",
    title: "CrypInvest - Cryptocurrency Investment Platform Full Solution",
    price: "$59.00",
    sales: "125 Sales",
    productLink: "https://crypinvest.app",
    cartLink: "https://codecanyon.net/checkout/107161267/create_account", 
    livePreviewLink: "https://crypinvest.app", 
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 mx-4 sm:mx-16 lg:mx-32">
      {products.map((product, index) => (
        <div key={index} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="w-full rounded-t-2xl overflow-hidden">
            <img
              alt="Product Thumb"
              loading="lazy"
              width="150"
              height="150"
              decoding="async"
              className="object-cover rounded-t-2xl w-full"
              src={product.imgSrc}
              style={{ color: 'transparent' }}
            />
          </div>
          <div className="text-left p-4">
            <div className="mb-2">
              <span className="text-[10px] font-medium py-1 px-2 rounded-full bg-[#E4FFEF] text-[#107231]">
                {product.label}
              </span>
            </div>
            <h3 className="mb-4 text-lg font-semibold">
              <a href={product.productLink} className="hover:text-blue-500 font-bold">
                {product.title}
              </a>
            </h3>
            <div className="flex justify-left items-left">
              <span className="text-[#2974E7] text-lg font-semibold">
                {product.price}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between text-start border-t border-gray-300 p-3">
            <p className="text-gray-500 text-[14px] ml-3">{product.sales}</p>
            <div className="flex items-center">
              {/* Cart Link Button */}
              <a 
                href={product.cartLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center text-[#7C3AED] px-3 py-1 rounded mr-2">
                <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5 mr-2" />
              </a>
              {/* Live Preview Link Button */}
              <a 
                href={product.livePreviewLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-500 text-white px-3 py-1 rounded">
                Live Preview
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
