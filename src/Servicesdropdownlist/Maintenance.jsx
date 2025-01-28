import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import FinTechInnovation6 from '../DevopsPages/FinTechInnovation6';
import MobileAppDevelopment5 from '../DevopsPages/MobileAppDevelopment5';
import SolutionsFin7 from '../MaintenancePages/SolutionsFin7';
import Startbusiness117 from '../MaintenancePages/Startbusiness117';
import Questions7 from '../MaintenancePages/Questions7';

const Maintenance = () => {
  return (
    <section className="relative pt-[50px]">
      <div
        className="bg-cover bg-no-repeat bg-left-top flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://appdevs.net/_next/static/media/servicePageBgLeft.292df356.webp), url(https://appdevs.net/_next/static/media/servicePageBgRight.e134874f.webp)',
          backgroundPosition: 'left top, right top',
          backgroundSize: 'contain',
          height: '600px',
        }}
      >
        <div className="text-center max-w-[1200px] mx-auto p-8 z-10">
          <span className="text-[#115E59] bg-[#CCFBF1] rounded-full shadow-sm text-xs px-3 py-1 font-semibold mb-6 inline-block">
          Maintenance and Support
          </span>
          <h1 className="text-xl md:text-5xl font-semibold text-gray-900 mb-6">
          Reliable Maintenance and Support Services to Ensure Seamless Operations
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-6">
          Maximize the performance, security, and uptime of your digital solutions with our comprehensive maintenance and support services. We ensure your applications, websites, and systems remain up-to-date, secure, and fully optimized to deliver exceptional user experiences.
          </p>
          <div className="flex justify-center">
            <a
              className="bg-[#2974E7] text-white font-semibold px-6 py-2 rounded-md flex items-center hover:bg-[#1E40AF] transition duration-300"
              href="/consultation"
              aria-label="Get Free Consultation"
            >
              Experience Uninterrupted Operations Today
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
            </a>
          </div>
        </div>
      </div>
      <SolutionsFin7 />
      <FinTechInnovation6 />
      <Startbusiness117 />
      <MobileAppDevelopment5 />
      <Questions7 />
    </section>
  );
};

export default Maintenance;
