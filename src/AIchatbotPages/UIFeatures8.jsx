import React from 'react';

const UIFeatures8 = () => {
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
              <h5 className="ms-2 font-semibold text-[18px]">Real-Time Chat</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Engage users with live, instant messaging capabilities.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Fund Transfers"  src="https://appdevs.net/_next/static/media/functionality.9491eef9.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Natural Language Processing (NLP)</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Understand and respond to queries in human-like language.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Bill Payment Services"  src="https://appdevs.net/_next/static/media/userManagementFlow.32a3674f.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Personalized Conversations</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Tailor responses based on user preferences and past interactions.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Digital Wallet and Virtual Card Access"src="https://appdevs.net/_next/static/media/securityControlsFlow.3e22a078.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Voice Assistance</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Provide voice-enabled chatbot features for enhanced accessibility.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="QR Code Payments" src="https://appdevs.net/_next/static/media/analyticsAndInsights.51b867cc.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Seamless Handover to Humans</h5>
            </div>
            <p className="text-[#6B7280] text-[14px] ">Transfer complex queries to human agents without disrupting the conversation.</p>
          </li>
          <li className="bg-white rounded-[20px] shadow-lg bg-white__color p-5">
            <div className="flex items-center mb-3">
              <div className="w-[36px] h-[36px] flex items-center justify-center bg-white shadow-lg rounded-full">
                <img alt="Account Overview"  src="https://appdevs.net/_next/static/media/userInterface.7a544d13.png" style={{ color: 'transparent' }} />
              </div>
              <h5 className="ms-2 font-semibold text-[18px]">Feedback Collection</h5>
            </div>
            <p className="text-[#6B7280] text-[14px]">Gather user feedback directly within the chat interface to improve services.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UIFeatures8;
