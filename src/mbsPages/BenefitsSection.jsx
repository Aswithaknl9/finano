import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const BenefitsSection = () => {
  return (
    <section className="pt-[130px] mx-24">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div>
            <h2 className="mb-3 lg:mb-6 text-5xl font-semibold">Benefits of Choosing Our Ready-Made Products</h2>
            <span className="text-[20px] lg:text-[20px] leading-[20px] lg:leading-[30px] text-[#6b7280]">
              Our ready-made solutions are built by industry experts with years of experience, ensuring a reliable and professional product. Our solutions are designed to meet industry standards and exceed your expectations by leveraging proven methodologies and advanced technologies.
            </span>
            <div className="mt-7 lg:mt-14">
              <Link to="/consultation" className="primary__btn items-center bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-semibold">
                <span className="px-2">Get Free Consultation <FontAwesomeIcon icon={faArrowRight} className="ml-3" /> </span>
              </Link>
            </div>
          </div>
          <ul className="space-y-4">
            <li className="flex items-center rounded-[27px] p-6 lg:p-8 shadow-md border border-gray-100 ">
              <img alt="Quick Deployment" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" src="https://appdevs.net/_next/static/media/convenience&InsightfulAnalytics.fd5da22b.png" style={{ color: 'transparent' }} />
              <div className="ms-5">
                <h4 className="mb-2 font-semibold text-[24px]">Quick Deployment</h4>
                <p className="text-[16px] text-[#6B7280]">Our solutions are pre-built and customizable, allowing for rapid deployment to meet market demands.</p>
              </div>
            </li>
            <li className="flex items-center rounded-[27px] p-6 lg:p-8 shadow-md border border-gray-100 ">
              <img alt="Cost-Effective" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" src="https://appdevs.net/_next/static/media/realTimeUpdates&StreamlinedOperations.05dc30ca.png" style={{ color: 'transparent' }} />
              <div className="ms-5">
                <h4 className="mb-2 font-semibold text-[24px]">Cost-Effective</h4>
                <p className="text-[16px] text-[#6B7280]">By choosing a ready-made product, businesses can save on development costs and focus their budgets on marketing and scaling.</p>
              </div>
            </li>
            <li className="flex items-center rounded-[27px] p-6 lg:p-8 shadow-md border border-gray-100">
              <img alt="Scalability" loading="lazy" width="50" height="50" decoding="async" data-nimg="1" src="https://appdevs.net/_next/static/media/securityControls.0858e0b9.png" style={{ color: 'transparent' }} />
              <div className="ms-5">
                <h4 className="mb-2 font-semibold text-[24px]">Scalability</h4>
                <p className="text-[16px] text-[#6B7280]">Each solution is designed to scale with your business, whether you’re starting locally or expanding globally.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
