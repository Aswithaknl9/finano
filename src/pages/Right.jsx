import React from 'react';

const Right = () => {
  return (
    <div className="col-span-12 lg:col-span-3 mr-28">
      <div className="lg:ml-3 sticky top-0 lg:mt-0 mt-4">
        {/* Most Reading Posts Section */}
        <h5 className="border-b border-[#E5E7EB] mb-6">
          <span className="inline-flex pb-3 border-b-2 border-black font-bold">Most Reading</span>{' '}
          <span className="font-bold">Post</span>
        </h5>
        <div className="grid grid-cols-1 gap-5">
          <div className="pb-3 border-b border-[#E5E7EB]">
            <a
              className="text-[14px] leading-[22px] text-color__heading font-bold transition-all hover:text-primary__color mb-1"
              href="/blog/difference-between-a-regular-and-an-extended-license"
            >
              Difference between a Regular and...
            </a>
            <div className="text-[13px] text-[#6b7280]">
              Difference between a Regular and an Extended license
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-medium text-[#6b7280] flex items-center gap-1">
                  11,226
                </span>
                <span className="text-[14px] bg-[#f7f7f7] rounded-[8px] py-[2px] text-[#6b7280] px-3">FAQ</span>
              </div>
            </div>
          </div>
          <div>
            <a
              className="text-[15px] leading-[22px] font-bold transition-all hover:text-primary__color mb-1"
              href="/blog/how-to-setup-smtp-mail-using-the-super-admin-panel"
            >
              How to setup SMTP mail...
            </a>
            <div className="text-[13px] text-[#6b7280]">
              How to setup SMTP mail using the super-admin panel
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-3">
                <span className="text-[14px] font-medium flex items-center text-[#6b7280] gap-1">
                  10,247
                </span>
                <span className="text-[14px] text-[#6b7280] bg-[#f7f7f7] rounded-[8px] py-[2px] px-3">Tutorial</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Topics Section */}
        <div className="mt-10">
          <h5 className="border-b border-[#E5E7EB] mb-6">
            <span className="inline-flex pb-3 border-b-2 border-black font-bold">Recommended</span>{' '}
            <span className="font-bold">Topic</span>
          </h5>
          <div className="flex flex-wrap m-[-5px]">
            {[
              'Codecanyon',
              'License',
              'Language',
              'Web content',
              'Site name',
              'Default currency',
              'Appdevs blog',
              'Super admin',
              'Basic settings',
            ].map((topic) => (
              <div
                key={topic}
                className="bg-[#f3f3f3] py-1.5 px-4 rounded-full text-[13px] font-medium m-[5px] text-color__heading"
              >
                {topic}
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Newsletter Section */}
        <div className="mt-10">
          <h5 className="border-b border-[#E5E7EB] mb-6">
            <span className="inline-flex pb-3 border-b-2 border-black font-bold">Subscribe</span>{' '}
            <span className="font-bold">Newsletter</span>
          </h5>
          <div>
            <p className="font-medium text-[#6b7280]">
              Join our newsletter to stay up to date on features and releases.
            </p>
            <a className="py-2 mt-12" href="#subscribe">
              <span className="text-blue-500 border border-blue-500 px-3 py-[2px]  font-semibold rounded ">Subscribe</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;
