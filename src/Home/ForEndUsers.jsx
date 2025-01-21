import React from 'react';

const ForEndUsers = () => {
  return (
    <div>
      <div className="text-center rounded-[20px] px-3 lg:pt-12 pt-6 lg:pb-16 pb-12 mb-[-30px] bg-[#EDE9FE]">
        <h3 className="xl:text-2xl lg:text-xl font-semibold md:text-lg text-base text-[#213E65]">For End Users</h3>
      </div>
      <div className="bg-gray-50 xl:py-8 py-5 xl:px-6 px-4 rounded-[20px]">
        <ul className="space-y-4">
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Account Overview"  src="https://appdevs.net/_next/static/media/userInterface.7a544d13.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold">Account Overview</h5>
            </div>
            <p className="text-[#6B7280]">Allows users to view balances, transaction history, and account details in a single dashboard.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Fund Transfers"  src="https://appdevs.net/_next/static/media/functionality.9491eef9.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold">Fund Transfers</h5>
            </div>
            <p className="text-[#6B7280]">Secure fund transfers to other accounts, both within the same bank and to external institutions.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Bill Payment Services"  src="https://appdevs.net/_next/static/media/userManagementFlow.32a3674f.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold">Bill Payment Services</h5>
            </div>
            <p className="text-[#6B7280]">Convenient bill payment features that enable users to pay utilities, loans, and other bills directly through the app.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Digital Wallet and Virtual Card Access"src="https://appdevs.net/_next/static/media/securityControlsFlow.3e22a078.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold">Digital Wallet and Virtual Card Access</h5>
            </div>
            <p className="text-[#6B7280]">Offers a secure digital wallet and virtual cards, enhancing convenience and security for online transactions.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="QR Code Payments" src="https://appdevs.net/_next/static/media/analyticsAndInsights.51b867cc.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold">QR Code Payments</h5>
            </div>
            <p className="text-[#6B7280]">Quick, contactless payment options through QR codes, ideal for retail and merchant transactions.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ForEndUsers;
