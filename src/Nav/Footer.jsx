import React from 'react';
import one from '../assets/one.png'; 
import footerBackground from '../assets/footerBg.png'; 
import Icon from './icon';
import PaymentLogo from './PaymentLogo';
import SubscribeSection from './SubcribeSection';

const Footer = () => {
  return (
    <>
    <SubscribeSection />
    <div
      className="bg-cover bg-center  text-black py-12 px-10 "
      style={{
        backgroundImage: `
          linear-gradient(110deg, rgba(183, 203, 255, 0.34), rgba(255, 249, 242, 0.4) 50%, rgba(183, 203, 255, 0.48)),
          url(${footerBackground})
        `}}
    >
      <div className="container mx-auto grid grid-cols-1 pt-40 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        <div>
          <div className="flex items-center space-x-3 mb-6 mt">
            <img src={one} alt="Site Logo" className="w-20" />
          </div>
          <div className="text-sm space-y-3">
            <p>Our Locations</p>
            <div className='text-[#6B7280]'>
              <p>71-75 Shelton Street, Covent Garden London - WC2H 9JQ</p>
              <p>London, United Kingdom</p>
            </div>
            <div className='text-[#6B7280]'>
              <p>F # F1 (5th Floor), H # 1188, Avenue # 11, Mirpur DOHS</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <Icon />
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="text-sm space-y-3 text-[#6B7280]">
            <li><a href="/home">Home</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/product-key">Product Key</a></li>
            <li><a href="/documentation">Documentation</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/free-consultation">Free Consultation</a></li>
            <li><a href="/sales-support">Sales Support</a></li>
            <li><a href="/technical-support">Technical Support</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/refund-policy">Refund Policy</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="text-sm space-y-3 text-[#6B7280]">
            <li><a href="/installation-deployment">Installation & Deployment</a></li>
            <li><a href="/custom-fintech-development">Custom FinTech Development</a></li>
            <li><a href="/mobile-app-development">Mobile App Development</a></li>
            <li><a href="/web-development">Web Development</a></li>
            <li><a href="/ui-ux-design">UI/UX Design</a></li>
            <li><a href="/quality-assurance-testing">Quality Assurance Testing</a></li>
            <li><a href="/cloud-services">Cloud Services</a></li>
            <li><a href="/devops-services">DevOps Services</a></li>
            <li><a href="/maintenance-support">Maintenance and Support</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-4">Solutions</h4>
          <ul className="text-sm space-y-3 text-[#6B7280]">
            <li><a href="/mobile-banking">Mobile Banking</a></li>
            <li><a href="/remittance">Remittance</a></li>
            <li><a href="/e-wallet">E-Wallet</a></li>
            <li><a href="/payment-gateway">Payment Gateway</a></li>
            <li><a href="/currency-exchange">Currency Exchange</a></li>
            <li><a href="/card-issuing">Card Issuing</a></li>
            <li><a href="/crowdfunding">Crowdfunding</a></li>
            <li><a href="/investment">Investment</a></li>
            <li><a href="/escrow">Escrow</a></li>
            <li><a href="/ai-chatbot">AI Chatbot</a></li>
            <li><a href="/booking">Booking</a></li>
            <li><a href="/multi-vendor">Multi-vendor</a></li>
          </ul>
        </div>

       
        <div>
          <h4 className="text-lg font-semibold mb-4">Products</h4>
          <ul className="text-sm space-y-3 text-[#6B7280]">
            <li><a href="/qrpay">QRPay</a></li>
            <li><a href="/adchange">adChange</a></li>
            <li><a href="/stripcard">StripCard</a></li>
            <li><a href="/crypinvest">CrypInvest</a></li>
            <li><a href="/xremit">xRemit</a></li>
            <li><a href="/adfund">AdFund</a></li>
            <li><a href="/escroc">Escroc</a></li>
            <li><a href="/adcrypto">AdCrypto</a></li>
            <li><a href="/adoctor">ADoctor</a></li>
            <li><a href="/esalon">eSalon</a></li>
          </ul>
        </div>
      </div>

      <div className="py-4 mt-12 border-t border-gray-300">
        <div className="flex justify-center items-center space-x-4">
          <p className="text-sm">&copy; 2021-2025 AppDevs Software LTD. All rights reserved worldwide.</p>
          <div className="text-sm space-x-4 flex">
            <a href="/privacy-policy" className="mr-4">Privacy Policy</a>
            <a href="/terms" className="mr-4">Terms Of Conditions</a>
            <a href="/installation-policy" className="mr-4">Installation Policy</a>
          </div>
          <PaymentLogo />
        </div>
       
      </div>
    </div>
    </>
  );
};

export default Footer;
