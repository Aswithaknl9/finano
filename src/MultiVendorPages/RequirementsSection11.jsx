import React from 'react';

const RequirementsSection11 = () => {
  return (
    <section>
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header lg:mb-12 mb-8">
          <div className="max-w-[775px] mx-auto text-center">
            <h2 className="mb-4 text-5xl font-semibold text-black">Requirements for Launching a Multi-Vendor Solution</h2>
            <p className="lg:w-[80%] mx-auto text-base text-[#6B7280]">
            To successfully launch a multi-vendor platform, consider these essential requirements</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-5 gap-4">
          {/* Step 1 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-5 xl:px-8 px-8">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">1</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Customizable eCommerce Platform</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Choose a platform that allows easy integration of multi-vendor functionality and customization.</p>
          </div>
          {/* Step 2 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">2</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Secure Payment Gateway</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Implement a reliable and secure payment gateway to handle transactions for multiple vendors.</p>
          </div>
          {/* Step 3 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">3</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Scalable Infrastructure</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Ensure your hosting infrastructure is scalable to support growing traffic and vendor registrations.</p>
          </div>
          {/* Step 4 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">4</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Legal and Compliance Requirements</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Draft terms and conditions, privacy policies, and vendor agreements to ensure legal compliance.</p>
          </div>
          {/* Step 5 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">5</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Effective Marketing Strategy</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Develop an online marketing plan to promote your marketplace to both vendors and customers.</p>
          </div>
          {/* Step 6 */}
          <div className="bg-gray-50 xl:rounded-[20px] rounded-3xl xl:py-5 py-4 xl:px-8 px-5">
            <div className="flex items-center mb-4">
              <div className="xl:w-12 w-8 xl:h-12 h-8 bg-white rounded-full flex justify-center items-center">
                <span className="text-blue-600 xl:text-[26px] font-bold">6</span>
              </div>
              <h5 className="ms-3 xl:text-[20px] text-lg font-semibold">Customer Service Setup</h5>
            </div>
            <p className="text-[#6B7280] text-[15px]">Implement a customer service system to handle disputes, complaints, and feedback from both vendors and customers.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection11;
