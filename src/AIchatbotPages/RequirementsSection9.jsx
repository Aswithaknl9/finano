import React from 'react';

const RequirementsSection9 = () => {
  return (
    <section>
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header lg:mb-12 mb-8">
          <div className="max-w-[775px] mx-auto text-center">
            <h2 className="mb-4 text-5xl font-semibold text-black">Requirements for Launching an AI Chatbot Solution</h2>
            <p className="lg:w-[80%] mx-auto text-base text-[#6B7280]">
            To successfully launch a AI chatbot platform, consider these essential requirements</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-5 gap-4">
          {/* Step 1 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-5 xl:px-8 px-8">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">1</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">AI Development Expertise</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Employ skilled developers or partner with a chatbot development platform.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">2</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Business-Specific Data</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Gather and organize data to train the chatbot effectively.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">3</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Scalable IT Infrastructure</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Ensure the platform supports trusted payment providers for smooth transactions.</p>
          </div>
          {/* Step 4 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">4</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Integration Capabilities</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Ensure the chatbot integrates seamlessly with existing business tools and systems.</p>
          </div>
          {/* Step 5 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">5</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Legal and Privacy Compliance</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Adhere to data protection laws like GDPR to maintain customer trust.</p>
          </div>
          {/* Step 6 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">6</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Continuous Support and Maintenance</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Provide regular updates and troubleshooting to keep the chatbot running smoothly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection9;
