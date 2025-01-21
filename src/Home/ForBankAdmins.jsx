import React from 'react';

const ForBankAdmins = () => {
  return (
    <div>
      <div class="text-center rounded-[20px] px-3 lg:pt-12 pt-6 lg:pb-16 pb-12 mb-[-30px] bg-[#DBEAFE]">
        <h3 class="xl:text-2xl lg:text-xl font-semibold md:text-lg text-base text-[#213E65]">For Bank Administrators</h3>
      </div>

      <div className="bg-gray-50 xl:py-8 py-5 xl:px-6 px-4 rounded-[20px]">
        <ul className="space-y-4">
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="User Management"  className="object-cover" src="https://appdevs.net/_next/static/media/userInterface.7a544d13.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold">User Management</h5>
            </div>
            <p className="text-[#6B7280]">Tools to manage user access, roles, and data securely.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Real-Time Transaction Monitoring"  src="https://appdevs.net/_next/static/media/features.4c70dfc8.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold ">Real-Time Transaction Monitoring</h5>
            </div>
            <p className="text-[#6B7280]">Systems for tracking transactions as they occur, ensuring compliance and enabling rapid response to any irregularities.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Reporting and Analytics" src="https://appdevs.net/_next/static/media/responsiveness.c266a9fd.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold">Reporting and Analytics</h5>
            </div>
            <p className="text-[#6B7280]">Generate insights into transaction volumes, customer behavior, and performance metrics to guide data-driven decision-making.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg  p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Integration Capabilities" src="https://appdevs.net/_next/static/media/accessibilityFlow.90fee436.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold ">Integration Capabilities</h5>
            </div>
            <p className="text-[#6B7280]">Seamlessly integrate with existing bank systems and third-party services for flexibility and ease of adoption.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ForBankAdmins;
