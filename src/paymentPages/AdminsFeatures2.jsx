import React from 'react';

const AdminsFeatures2 = () => {
  return (
    <div>
      <div class="text-center rounded-[20px] px-3 lg:pt-12 pt-6 lg:pb-16 pb-12 mb-[-30px] bg-[#DBEAFE]">
        <h3 class="xl:text-2xl lg:text-xl font-semibold md:text-lg text-base text-[#213E65]">Administrator Features</h3>
      </div>

      <div className="bg-gray-50 xl:py-8 py-5 xl:px-6 px-4 rounded-[20px]">
        <ul className="space-y-4">
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="User Management"  className="object-cover" src="https://appdevs.net/_next/static/media/userInterface.7a544d13.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Transaction Management Dashboard</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Monitor and manage all payment transactions in real time.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Real-Time Transaction Monitoring"  src="https://appdevs.net/_next/static/media/features.4c70dfc8.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Fraud Prevention Tools</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Integrated fraud detection and risk assessment systems.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Reporting and Analytics" src="https://appdevs.net/_next/static/media/responsiveness.c266a9fd.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Multi-Currency Support</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Handle transactions in different currencies effortlessly.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Integration Capabilities" src="https://appdevs.net/_next/static/media/accessibilityFlow.90fee436.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Reporting and Analytics</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Gain insights into transaction trends, revenues, and user behavior.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="User Management"  className="object-cover" src="https://appdevs.net/_next/static/media/userInterface.7a544d13.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Customizable Fee Structures</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Adjust transaction fees and charges based on business needs.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Real-Time Transaction Monitoring"  src="https://appdevs.net/_next/static/media/features.4c70dfc8.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Compliance Management</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Automate compliance checks for PCI DSS, KYC, and AML requirements.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminsFeatures2;
