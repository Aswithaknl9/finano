import { useState } from "react";

const tabs = [
  {
    id: "expert-team",
    title: "Expert Team",
    content: "Our expert team ensures top-notch solutions for your needs.",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/tab-image3.jpg",
  },
  {
    id: "best-finance-brand",
    title: "Best Finance Brand",
    content: "We are recognized as a top finance brand in the industry.",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/tab-image2.jpg",
  },
  {
    id: "best-leadership-ideas",
    title: "Best Leadership Ideas",
    content: "Innovative leadership strategies that drive success.",
    image: "https://demo.casethemes.net/finano/wp-content/uploads/2018/12/tab-image1.jpg",
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`block w-full text-left px-[40px] py-[35px] border rounded-lg transition-colors ${
                  activeTab.id === tab.id
                    ? "bg-[#ec0203] text-white"
                    : "border-gray-300 hover:border-gray-200"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <div className="font-bold lg:text-[24px] mb-2">{tab.title}</div>
                <div className="text-base ">{tab.content}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            src={activeTab.image}
            alt={activeTab.title}
            className="w-full h-300 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
