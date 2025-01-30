import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Technical = () => {
  const [supportFor, setSupportFor] = useState('');
  const [category, setCategory] = useState('');
  const [purchaseCode, setPurchaseCode] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [captcha, setCaptcha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captcha) {
        alert("Please complete the reCAPTCHA verification.");
        return;
      }
    console.log({ supportFor, category, purchaseCode, subject, message, file, captcha });
  };

  return (
    <section className="solution_section py-[180px] overflow-hidden relative">
      <img
        alt="Background Image"
        loading="lazy"
        width="777"
        height="946"
        className="absolute top-0 left-0 z-10 overflow-hidden 2xl:block"
        src="https://appdevs.net/_next/static/media/productPageLeftBg.321a9e4d.webp"
      />
      <img
        alt="Background Image"
        loading="lazy"
        width="558"
        height="799"
        className="absolute top-[120px] right-0 z-10 overflow-hidden 2xl:block"
        src="https://appdevs.net/_next/static/media/solutionPageBgRight.e134874f.webp"
      />
      <div className="xl:max-w-[1280px] container mx-auto px-4 relative z-20">
        <div className="section_header mb-14">
          <div className="max-w-[800px] mx-auto text-center">
            <div className='mb-5'>
            <span className="text-[12px] font-semibold text-[#115E59]  bg-[#CCFBF1] rounded-full py-1 px-3 ">
              Technical Support
            </span>
            </div>
            <h1 className="sm:text-[48px] font-semibold mb-5">Technical Support</h1>
            <span className='text-[#6b7280]'>
              Facing a technical issue? Get expert assistance by submitting a support ticket. Share your concerns,
              track ticket progress.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form
            className="bg-white__color border border-[#E5E7EB] shadow-primary__shadow md:rounded-[20px] rounded-xl xl:px-11 md:px-8 px-5 xl:py-14 md:py-10 py-7"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-5">
              {/* Form Fields */}
              <div className="sm:col-span-1 col-span-2 max-w-full ">
                <label className="primary__label text-[14px] font-semibold">Support For*</label>
                <select
                    required
                    value={supportFor}
                    onChange={(e) => setSupportFor(e.target.value)}
                    className="border rounded-md  text-[15px] font-semibold px-2 py-2"
                >
                    <option value="">Choose One</option>
                    <option value="option1">Sales</option>
                    <option value="option2">Installation</option>
                    <option value="option3">Technical</option>
                </select>
                </div>


              <div className="sm:col-span-1 col-span-2 max-w-full">
                <label className="primary__label text-[14px] font-semibold">Category*</label>
                <select
                  required
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="primary__input border rounded-md text-[14px] font-semibold px-2 py-2"
                >
                  <option value="">Select a Category</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="primary__label text-[14px] font-semibold">
                  Purchase Code*{' '}
                  <a
                    target="_blank"
                    className="text-blue-600 transition-all hover:text-[#7c3aed] inline-flex items-center"
                    href="https://appdevs.net/blog/how-to-find-your-purchase-code"
                    rel="noopener noreferrer"
                  >
                    How to get{' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-[14px]"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
                    </svg>
                  </a>
                </label>
                <input
                  className="primary__input border border-gray-200 py-[12px] px-[20px] w-full rounded-lg text-sm"  
                  placeholder="Enter your purchase code"
                  type="text"
                  value={purchaseCode}
                  onChange={(e) => setPurchaseCode(e.target.value)}
                  required
                />
              </div>

              <div className="col-span-2">
                <label className="primary__label text-[14px] font-semibold">Subject*</label>
                <input
                  className="primary__input border  border-gray-200 py-[12px] px-[20px] w-full text-[14px]" 
                  placeholder="Write Project Title"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
              </div>

              <div className="col-span-2">
                <label className="primary__label text-[14px] font-semibold">Your Message*</label>
                <textarea
                  name="desc"
                  className="primary__text area border py-[12px] px-[20px] w-full text-sm"
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <div className="col-span-2">
                    <label className="primary__label text-[14px] font-semibold">
                        Upload Screenshot Image (If Needed)
                    </label>
                    <div className="w-full h-24 rounded-xl border-2 border-dashed shadow-primary__shadow flex items-center justify-center border-[#E5E7EB] relative">
                        {/* Drag & Drop Image */}
                        <img
                        src="https://appdevs.net/_next/static/media/dragAndDrop.3e7d1bd3.png"
                        alt="Drag and Drop"
                        className="absolute  w-auto h-auto left-16"
                        />
                        
                    {/* File Input */}
                    <input
                    type="file"
                    accept="image/png,image/jpg,image/jpeg,image/webp,image/svg+xml"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="absolute opacity-0 w-full h-full cursor-pointer"
                    />
                    
                    {/* Upload Text */}
                    <p className="text-[15px] sm:font-medium ms-2">
                    Drop your files here or{' '}
                    <span className="text-blue-600 font-semibold cursor-pointer">browse</span>
                    </p>
                    </div>
                    
                    <span className="block text-right text-[12px] text-[#6b7280] font-medium">
                        [You can upload multiple images, but the max size for each file is 50MB]
                    </span>
                </div>

              <div className="col-span-2">
                <div className="mt-[-10px]">
                  <div style={{ width: '304px', height: '78px' }}>
                    <div>
                      <iframe
                        title="reCAPTCHA"
                        width="304"
                        height="78"
                        role="presentation"
                        name="a-1ptxolt0gmow"
                        frameBorder="0"
                        scrolling="no"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                        src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Lc2hrIqAAAAAIbwgpwU5t8Ut9WADFmXaF6xD4eF&amp;co=aHR0cHM6Ly9hcHBkZXZzLm5ldDo0NDM.&amp;hl=en&amp;type=image&amp;v=p09oe8YIFfKgcnqQ9m9k4aiB&amp;theme=light&amp;size=normal&amp;badge=bottomright&amp;cb=dcs6qppmnxo0"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-span-2">
                <button className="basic__btn bg-blue-600 px-5 py-2 text-white font-semibold rounded-md" type="submit">
                  Submit Ticket
                </button>
              </div>
            </div>
          </form>

          <div className="space-y-5">
            {/* Technical Team and Login Section on the Right */}
            <div className="sm:flex bg-[#FEFCE8] md:rounded-[20px] rounded-xl shadow-primary__shadow border border-[#854D0E] xl:py-10 py-6 xl:px-9 px-6">
              <div className="sm:mb-0 mb-4">
                <img
                  alt="Submit Ticket Note"
                  loading="lazy"
                  width="53"
                  height="53"
                  src="https://appdevs.net/_next/static/media/submitTicketNote.24408687.png"
                />
              </div>
              <p className="sm:w-[calc(100%-80px)] sm:ms-6 text-sm text-[#6b7280] ">
                Our technical team is available Monday to Friday,{' '}
                <span className="font-bold text-black">9:00 AM - 7:00 PM (GMT +6).</span> Thank you for your
                patience; we'll respond to your inquiries promptly.
              </p>
            </div>

            <div className="bg-white border border-[#E5E7EB] shadow-primary__shadow md:rounded-[20px] rounded-xl sm:flex items-center p-6">
              <div>
                <p className="mb-2 text-sm text-[#6b7280] ">
                  Before submitting a ticket, please ensure you’re authorized. If you already have an account, please log
                  in to continue. If you’re new, create an account to access support.
                </p>


                <div className="flex items-center gap-2 mt-4">
                  <a className="primary__btn bg-blue-600 text-white rounded-md text-sm px-4 py-2" href="/login">
                    <span className="font-semibold">Login</span>
                  </a>
                  <a className="outline__btn " href="/register">
                    <span className="border border-blue-600 px-4 py-2 rounded-md text-blue-600 font-semibold text-sm">Register</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technical;
