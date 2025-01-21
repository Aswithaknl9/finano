import React from 'react';

const UIFeatures = () => {
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
              <h5 className="ms-2 font-semibold text-[18px]">Simple Transfer Process</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Easy-to-use forms for sending money in minutes.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Fund Transfers"  src="https://appdevs.net/_next/static/media/functionality.9491eef9.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Currency Conversion</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Displays real-time exchange rates for transparency.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Bill Payment Services"  src="https://appdevs.net/_next/static/media/userManagementFlow.32a3674f.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Recipient Management</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] "> Save recipient details for quicker future transfers.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Digital Wallet and Virtual Card Access"src="https://appdevs.net/_next/static/media/securityControlsFlow.3e22a078.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Transfer Tracking</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Notifications and updates for every transaction.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="QR Code Payments" src="https://appdevs.net/_next/static/media/analyticsAndInsights.51b867cc.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Multiple Payment Options</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Pay with bank accounts, cards, or digital wallets.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Account Overview"  src="https://appdevs.net/_next/static/media/userInterface.7a544d13.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Secure Login and Data Encryption</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Protects user data with 2FA and encryption protocols.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UIFeatures;
