import React from "react";
import CommunitySection from "./CommunitySection";
import FAQSection from "./FFAQSection";

const ContactSection = () => {
  return (
    <>
    <section className="pt-[180px] pb-[30px] relative overflow-hidden">
      <img
        alt="Background Image"
        loading="lazy"
        width="1133"
        height="465"
        className="absolute top-0 left-[5%] z-[-2] hidden lg:block"
        src="https://appdevs.net/_next/static/media/contactPageBg.dedda70e.webp"
      />
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header mb-7 lg:mb-12">
          <div className="max-w-[700px] mx-auto text-center">
            <span className="text-[12px] font-semibold text-[#115E59] bg-[#CCFBF1] rounded-full py-1 px-3 mb-4 lg:mb-6">
              Contact Us
            </span>
            <h1 className="lg:text-[48px] text-[30px] font-semibold leading-tight">
              All the Support You Need, Anytime with AppDevs
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg border border-gray-300 p-10 lg:p-10 rounded-[30px] transition-all duration-300 ease-in-out hover:shadow-lg relative"
            >
              {item.backgroundImages.map((img, i) => (
                <img
                  key={i}
                  alt="contact thumb"
                  loading="lazy"
                  width="80"
                  height="80"
                  className={`absolute w-10 lg:w-20 opacity-20 ${img.position}`}
                  src={img.src}
                />
              ))}
              <div className="w-[70px] h-[70px] flex justify-center items-center bg-[#f3f4f6] rounded-full">
                <img
                  alt="contact thumb"
                  loading="lazy"
                  width="32"
                  height="32"
                  src={item.iconSrc}
                />
              </div>
              <div className="pt-3">
                <h4 className="mb-2 text-[16px] md:text-[18px] lg:text-[24px] font-semibold ">{item.title}</h4>
                <p className="text-sm lg:text-[16px] text-[#6b7280] leading-6">{item.description}</p>
                <div className="mt-5">
                <a className="border px-5 py-[10px] rounded-md text-blue-500 text-sm border-blue-500 hover:bg-[#7c3aed] hover:text-white hover:border-transparent font-semibold mt-5" href={item.link}>
                  {item.buttonText}
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section>
          <CommunitySection />
    </section>
    <section>
        <FAQSection />
    </section>
    </>
         
    
  );
};

const contactItems = [
  {
    title: "Sales Support",
    description:
      "Need help with choosing the right solution for your needs? Our sales team is here to provide guidance and answer any questions you may have about our services.",
    link: "/sales-support",
    buttonText: "Contact Sales",
    iconSrc: "https://appdevs.net/_next/static/media/sales.e29bab45.png",
    backgroundImages: [
      { src: "https://appdevs.net/_next/static/media/whatsapp.03e0da43.webp", position: "top-8 right-[140px]" },
      { src: "https://appdevs.net/_next/static/media/skype.22b0de6c.webp", position: "top-16 right-10" },
      { src: "https://appdevs.net/_next/static/media/telegram.522aea4c.webp", position: "bottom-8 right-[100px] lg:right-[200px]" },
      { src: "https://appdevs.net/_next/static/media/tawkto.4bae8708.webp", position: "bottom-6 right-5" },
    ],
  },
  {
    title: "Technical Support",
    description:
      "Facing an issue or have technical questions? Our support team is ready to assist with any technical concerns to ensure a smooth experience.",
    link: "/technical-support",
    buttonText: "Submit Ticket",
    iconSrc: "https://appdevs.net/_next/static/media/technical.f2865f5e.png",
    backgroundImages: [
      { src: "https://appdevs.net/_next/static/media/support.4992acfb.webp", position: "top-8 right-14" },
    ],
  },
  {
    title: "Get Customization",
    description:
      "Looking for a tailored solution? We offer customization options to fit your specific requirements. Learn more about how we can personalize our services for you.",
    link: "/customization",
    buttonText: "Learn More",
    iconSrc: "https://appdevs.net/_next/static/media/customization.69ed1a4b.png",
    backgroundImages: [
      { src: "https://appdevs.net/_next/static/media/calender.a97d8b8a.webp", position: "top-8 right-14" },
    ],
  },
  {
    title: "Talk to Expert",
    description:
      "Have specific needs or in-depth questions? Schedule a session with one of our experts to discuss the best solutions for your goals.",
    link: "/consultation",
    buttonText: "Schedule Consultation",
    iconSrc: "https://appdevs.net/_next/static/media/expert.6415f359.png",
    backgroundImages: [
      { src: "https://appdevs.net/_next/static/media/expertMan.ec2fb555.webp", position: "bottom-8 right-8" },
    ],
  },
];

export default ContactSection;
