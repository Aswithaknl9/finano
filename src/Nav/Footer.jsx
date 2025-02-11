import React from 'react';
import one from '../assets/one.png'; 
import footerBackground from '../assets/footerBg.png'; 
import Icon from './icon';
import SubscribeSection from './SubcribeSection';
import qrpayIcon from '../assets/qrpay1.png';
import adChangeIcon from '../assets/adChange.png';
import StripCardIcon from '../assets/stripCard1.png';
import CryInvestIcon from '../assets/crypinvest1.png';
import xRemitIcon from '../assets/xRemitPro.png';
import AdFundIcon from '../assets/AdFund.png';
import EscrocIcon from '../assets/Escroc.png';
import AdcryptoIcon from '../assets/Adcrypto.png';
import ADoctorIcon from '../assets/ADoctor.png';
import eSalonIcon from '../assets/eSalon.png';
import gdpr from '../assets/gdpr.png';
import successPayment from '../assets/successPayment.png';
import stripe from '../assets/stripe.png';




const Footer = () => {
  return (
    <>
      <SubscribeSection />
      <div
        className="bg-cover bg-center text-black py-12 px-10"
        style={{
          backgroundImage: `
            linear-gradient(110deg, rgba(183, 203, 255, 0.34), rgba(255, 249, 242, 0.4) 50%, rgba(183, 203, 255, 0.48)),
            url(${footerBackground})
          `,
        }}
      >
        <div className="container mx-auto grid grid-cols-1 pt-40 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6 mt">
              <img src={one} alt="Site Logo" className="w-20" />
            </div>
            <div className="text-sm space-y-3">
              <p className='font-semibold text-[20px]'>Our Locations</p>
              <div className="text-[#6B7280]">
                <p>71-75 Shelton Street, Covent Garden London - WC2H 9JQ</p>
                <p>London, United Kingdom</p>
              </div>
              <div className="text-[#6B7280]">
                <p>F # F1 (5th Floor), H # 1188, Avenue # 11, Mirpur DOHS</p>
                <p>Dhaka, Bangladesh</p>
              </div>
            </div>
            <Icon />
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="text-sm  space-y-3 text-[#6B7280]">
              <li><a href="/">Home</a></li>
              <li><a href="/solutions">Solutions</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/generate-product-key">Product Key</a></li>
              <li><a href="/documentation">Documentation</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQs</a></li>
              <li><a href="/consultation">Free Consultation</a></li>
              <li><a href="/sales-support">Sales Support</a></li>
              <li><a href="/technical-support">Technical Support</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/refund-policy">Refund Policy</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="text-sm space-y-3 text-[#6B7280]">
              <li><a href="/services/installation-service">Installation & Deployment</a></li>
              <li><a href="/services/fintech-software-development">Custom FinTech Development</a></li>
              <li><a href="/services/mobile-application-development">Mobile App Development</a></li>
              <li><a href="/services/web-development">Web Development</a></li>
              <li><a href="/services/ui-ux-design">UI/UX Design</a></li>
              <li><a href="/services/quality-assurance-testing">Quality Assurance Testing</a></li>
              <li><a href="/services/cloud-services">Cloud Services</a></li>
              <li><a href="/services/devops-services">DevOps Services</a></li>
              <li><a href="/services/maintenance-and-support">Maintenance and Support</a></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="text-sm space-y-3 text-[#6B7280]">
              <li><a href="/solutions/mobile-banking-solutions">Mobile Banking</a></li>
              <li><a href="/solutions/remittance-solution">Remittance</a></li>
              <li><a href="/solutions/digital-wallet-solutions">E-Wallet</a></li>
              <li><a href="/solutions/white-label-payment-gateway-solutions">Payment Gateway</a></li>
              <li><a href="/solutions/currency-exchange-solutions">Currency Exchange</a></li>
              <li><a href="/solutions/card-issuing-solutions">Card Issuing</a></li>
              <li><a href="/solutions/crowdfunding-solutions">Crowdfunding</a></li>
              <li><a href="/solutions/investment-management-solutions">Investment</a></li>
              <li><a href="/solutions/escrow-solutions">Escrow</a></li>
              <li><a href="/solutions/ai-chatbot-solutions">AI Chatbot</a></li>
              <li><a href="/solutions/online-booking-solutions">Booking</a></li>
              <li><a href="/solutions/multi-vendor-solutions">Multi-vendor</a></li>
            </ul>
          </div>

          {/* Products Section (Fixed `QRPay` List Item) */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="text-sm space-y-3 text-[#6B7280]">
              <li>
                <a href="/qrpay" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <img alt="QRPay" loading="lazy" width="21" height="21" className="object-cover" src={qrpayIcon} />
                  </div>
                  <span>QRPay</span>
                </a>
              </li>
              <li><a href="/adchange" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <img alt="QRPay" loading="lazy" width="21" height="21" className="object-cover" src={adChangeIcon} />
                  </div>
                  <span>adChange</span>
                </a></li>
              <li><a href="/StripCard" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <img alt="QRPay" loading="lazy" width="21" height="21" className="object-cover" src={StripCardIcon} />
                  </div>
                  <span>StripCard</span>
                </a></li>
              <li>
              <a href="/crypinvest" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <img alt="QRPay" loading="lazy" width="21" height="21" className="object-cover" src={CryInvestIcon} />
                  </div>
                  <span>CryInvest</span>
                </a></li>
              <li>
              <a href="/xRemit" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <img alt="QRPay" loading="lazy" width="21" height="21" className="object-cover" src={xRemitIcon} />
                  </div>
                  <span>xRemit</span>
                </a></li>
                
              <li>
              <a href="/AdFund" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <img alt="QRPay" loading="lazy" width="21" height="21" className="object-cover" src={AdFundIcon} />
                  </div>
                  <span>AdFund</span>
                </a></li>
              <li>
              <a href="/Escroc" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <img alt="QRPay" loading="lazy" width="21" height="21" className="object-cover" src={EscrocIcon} />
                  </div>
                  <span>Escroc</span>
                </a></li>
              <li>
              <a href="/AdCrypto" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <img alt="QRPay" loading="lazy" width="21" height="21" className="object-cover" src={AdcryptoIcon} />
                  </div>
                  <span>AdCrypto</span>
                </a></li>
              <li>
              <a href="/ADoctor" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <img alt="QRPay" loading="lazy" width="21" height="21" className="object-cover" src={ADoctorIcon} />
                  </div>
                  <span>ADoctor</span>
                </a></li>
              <li>
              <a href="/eSalon" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <img alt="QRPay" loading="lazy" width="21" height="21" className="object-cover" src={eSalonIcon} />
                  </div>
                  <span>eSalon</span>
                </a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div class="lg:flex items-center justify-between border-t border-gray-200 mt-10 pt-10 text-center lg:text-left">
  
  
        <div class="lg:flex items-center gap-3">
          <span class="text-[#6b7280] text-sm">© 2021-2025 AppDevs Software LTD. All rights reserved worldwide.</span>
          
          <ul class="flex flex-wrap items-center gap-3 lg:mt-0 mt-5 justify-center lg:justify-start">
            <li>
              <a class="border-l border-gray-300 lg:ps-3 text-[#6b7280] text-sm transition hover:text-blue-600 hover:underline" 
                href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a class="border-l border-gray-300 lg:ps-3 text-[#6b7280] text-sm transition hover:text-blue-600 hover:underline" 
                href="/terms-of-conditions">Terms Of Conditions</a>
            </li>
            <li>
              <a class="border-l border-gray-300 lg:ps-3 text-[#6b7280] text-sm transition hover:text-blue-600 hover:underline" 
                href="/installation-policy">Installation Policy</a>
            </li>
          </ul>
        </div>

        <div class="flex items-center gap-4 lg:mt-0 mt-5 justify-center">
          <a class="transition hover:opacity-70" href="#">
            <img 
              alt="GDPR" 
              loading="lazy" 
              class="w-14 md:w-16" 
              src={gdpr}
            />
          </a>
          <a class="transition hover:opacity-70" href="#">
            <img 
              alt="Success Payment" 
              loading="lazy" 
              class="w-16 md:w-20" 
              src={successPayment}
            />
          </a>
          <a class="transition hover:opacity-70" href="#">
            <img 
              alt="Stripe" 
              loading="lazy" 
              class="w-14 md:w-16" 
              src={stripe}
            />
          </a>
        </div>
  
      </div>

      </div>
    
    </>
  );
};

export default Footer;
