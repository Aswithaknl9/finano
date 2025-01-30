const CustomizationProcess = () => {
    const steps = [
      {
        number: "1",
        title: "Consultation",
        description: "Start by scheduling a consultation where we discuss your business goals and requirements."
      },
      {
        number: "2",
        title: "Requirements Analysis",
        description: "We conduct an in-depth analysis and provide a tailored proposal with pricing."
      },
      {
        number: "3",
        title: "Customization and Development",
        description: "Our team customizes the software according to the agreed-upon specifications."
      },
      {
        number: "4",
        title: "Launch and Support",
        description: "We deliver the final solution and provide ongoing support to ensure seamless integration."
      }
    ];
  
    return (
      <section className="pt-32">
        <div className="xl:max-w-[1280px] container mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-[28px] lg:text-[38px] font-bold mb-2">How Our Customization Process Works</h2>
            <p className="text-[#6b7280] sm:w-[80%] mx-auto">We’ve streamlined our process to make it easy for you to get a tailored solution that matches your needs.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {steps.map((step, index) => (
              <div key={index} className="bg-[#f3f4f6] rounded-2xl py-6 px-8 shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-white rounded-full flex justify-center items-center shadow-md">
                    <span className="text-blue-600 text-[26px] font-bold">{step.number}</span>
                  </div>
                  <h5 className="ml-4 text-lg lg:text-xl font-semibold">{step.title}</h5>
                </div>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CustomizationProcess;
  