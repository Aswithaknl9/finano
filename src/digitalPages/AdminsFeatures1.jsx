import React from 'react';

const AdminsFeatures1 = () => {
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
              <h5 className="ms-2 font-semibold text-[18px] ">User Management Dashboard</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Control user accounts, profiles, and permissions seamlessly.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Real-Time Transaction Monitoring"  src="https://appdevs.net/_next/static/media/features.4c70dfc8.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Transaction Monitoring</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Real-time insights into transactions for enhanced oversight.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Reporting and Analytics" src="https://appdevs.net/_next/static/media/responsiveness.c266a9fd.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Compliance and Security Tools</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Integrated KYC/AML processes to meet regulatory standards.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Integration Capabilities" src="https://appdevs.net/_next/static/media/accessibilityFlow.90fee436.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Revenue and Analytics Dashboard</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Track earnings from transaction fees and user activity.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="User Management"  className="object-cover" src="https://appdevs.net/_next/static/media/userInterface.7a544d13.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Customizable Fee Settings</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Flexibility to adjust transaction fees, subscription plans, and promotions.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Real-Time Transaction Monitoring"  src="https://appdevs.net/_next/static/media/features.4c70dfc8.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px] ">Support Tools</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Efficient ticketing and support system for resolving issues quickly.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminsFeatures1;
