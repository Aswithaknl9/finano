import React from 'react';

const Bankingcard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-6 px-4">
      
      <div className="bg-white shadow-lg border  rounded-[20px] py-5 px-8 lg:px-8">
        <div className="w-12 h-12 bg-white shadow-lg rounded-full flex justify-center items-center mb-4">
          <img alt="Choose Image" src="https://appdevs.net/_next/static/media/team.442e2e75.png" />
        </div>
        <h5 className="text-[18px] lg:text-[20px] mb-3 font-semibold">Limited Access to Banking Services</h5>
        <p className="text-sm text-[#6B7280]">Traditional banking services can be challenging for people in remote areas or those with busy lifestyles.</p>
      </div>
      
      
      <div className="bg-white shadow-lg border rounded-[20px] py-5 px-8 lg:px-8">
        <div className="w-12 h-12 bg-white shadow-lg rounded-full flex justify-center items-center mb-4">
          <img alt="Choose Image"  src="https://appdevs.net/_next/static/media/sqa.29e6cbd8.png" />
        </div>
        <h5 className="text-[18px] lg:text-[20px] mb-3 font-semibold">High Operating Costs</h5>
        <p className="text-sm text-[#6B7280]">Physical bank branches require considerable resources, from staff to facilities.</p>
      </div>
      
      
      <div className="bg-white shadow-lg border  rounded-[20px] py-5 px-8 lg:px-8">
        <div className="w-12 h-12 bg-white shadow-lg rounded-full flex justify-center items-center mb-4">
          <img alt="Choose Image"  src="https://appdevs.net/_next/static/media/knowledge.0e41d61b.png" />
        </div>
        <h5 className="text-[18px] lg:text-[20px] mb-3 font-semibold">Enhanced Customer Engagement</h5>
        <p className="text-sm text-[#6B7280]">A mobile app can improve customer satisfaction by providing convenient, on-demand access to financial services.</p>
      </div>
      
      
      <div className="bg-white shadow-lg border  rounded-[20px] py-5 px-8 lg:px-8">
        <div className="w-12 h-12 bg-white shadow-lg rounded-full flex justify-center items-center mb-4">
          <img alt="Choose Image"  src="https://appdevs.net/_next/static/media/knowledge.0e41d61b.png" />
        </div>
        <h5 className="text-[18px] lg:text-[20px] mb-3 font-semibold">Security Concerns</h5>
        <p className="text-sm text-[#6B7280]">Mobile banking solutions typically include advanced security features, such as multi-factor authentication.</p>
      </div>
      
      
      <div className="bg-white shadow-lg border  rounded-[20px] py-5 px-8 lg:px-8">
        <div className="w-12 h-12 bg-white shadow-lg rounded-full flex justify-center items-center mb-4">
          <img alt="Choose Image"  src="https://appdevs.net/_next/static/media/knowledge.0e41d61b.png" />
        </div>
        <h5 className="text-[18px] lg:text-[20px] mb-3 font-semibold">Transaction Inefficiencies</h5>
        <p className="text-sm text-[#6B7280]">By digitizing routine banking processes, mobile banking minimizes errors and automates operations.</p>
      </div>
    </div>
  );
};

export default Bankingcard;
