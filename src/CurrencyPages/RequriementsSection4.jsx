import React from 'react';

const RequirementsSection4 = () => {
  return (
    <section>
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header lg:mb-12 mb-8">
          <div className="max-w-[775px] mx-auto text-center">
            <h2 className="mb-4 text-5xl font-semibold text-black">Requirements for Launching a Currency Exchange Solution</h2>
            <p className="lg:w-[80%] mx-auto text-base text-[#6B7280]">
            To successfully launch a currency exchange platform, consider these essential requirements
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-5 gap-4">
          {/* Step 1 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-5 xl:px-8 px-8">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">1</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Licenses and Permits</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Secure licenses for currency exchange operations in your target regions.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">2</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Technological Infrastructure</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Set up secure servers, APIs, and real-time rate updating systems.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">3</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Regulatory Compliance</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Implement robust KYC, AML, and data protection measures.</p>
          </div>
          {/* Step 4 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">4</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Banking and Forex Partnerships</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Collaborate with financial institutions for liquidity and global reach.</p>
          </div>
          {/* Step 5 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">5</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Customer Support Team</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Provide responsive support for users to resolve issues effectively.</p>
          </div>
          {/* Step 6 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">6</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Marketing and Branding</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Develop campaigns to build trust and attract customers to your solution.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection4;
