import React from 'react';

const UIFeatures1 = () => {
  return (
    <div>
      <div className="text-center rounded-[20px] px-3 lg:pt-12 pt-6 lg:pb-16 pb-12 mb-[-30px] bg-[#EDE9FE]">
        <h3 className="xl:text-2xl lg:text-xl font-semibold md:text-lg text-base text-[#213E65]">User Interface Features</h3>
      </div>
      <div className="bg-gray-50 xl:py-8 py-5 xl:px-6 px-4 rounded-[20px]">
        <ul className="space-y-4">
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Account Overview"  src="https://appdevs.net/_next/static/media/userInterface.7a544d13.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Instant Money Transfers</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Send and receive money instantly within the wallet ecosystem.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Fund Transfers"  src="https://appdevs.net/_next/static/media/functionality.9491eef9.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Payment Options</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Pay bills, shop online, or make in-store purchases with QR codes and NFC.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Bill Payment Services"  src="https://appdevs.net/_next/static/media/userManagementFlow.32a3674f.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Fund Management</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Add money to the wallet or withdraw funds effortlessly.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Digital Wallet and Virtual Card Access"src="https://appdevs.net/_next/static/media/securityControlsFlow.3e22a078.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Savings and Goals</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Set financial goals and allocate funds for future use.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="QR Code Payments" src="https://appdevs.net/_next/static/media/analyticsAndInsights.51b867cc.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Multi-Language and Currency Support</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Cater to diverse user bases with global language and currency options.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Account Overview"  src="https://appdevs.net/_next/static/media/userInterface.7a544d13.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Personalized Alerts and Notifications</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Stay updated with transaction notifications and spending insights.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UIFeatures1;
