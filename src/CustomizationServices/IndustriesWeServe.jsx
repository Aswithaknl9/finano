const IndustriesWeServe = () => {
    const industries = [
      { name: "Banking", description: "Enhance customer experience with seamless digital banking services.", img: "https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png" },
      { name: "Financial Services", description: "Streamline operations with secure and efficient financial tools.", img: "https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png" },
      { name: "Insurance", description: "Enable policyholders with easy claims processing and management.", img: "https://appdevs.net/_next/static/media/security.22ebe9d6.png" },
      { name: "E-commerce", description: "Integrate flexible payment options and secure transactions.", img: "https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png" },
      { name: "Banking", description: "Enhance customer experience with seamless digital banking services.", img: "https://appdevs.net/_next/static/media/streamlinedOperations.873e8c0b.png" },
      { name: "Financial Services", description: "Streamline operations with secure and efficient financial tools.", img: "https://appdevs.net/_next/static/media/userManagement.78ccbfb4.png" },
      { name: "Insurance", description: "Enable policyholders with easy claims processing and management.", img: "https://appdevs.net/_next/static/media/security.22ebe9d6.png" },
      { name: "E-commerce", description: "Integrate flexible payment options and secure transactions.", img: "https://appdevs.net/_next/static/media/insightfulAnalytics.a8aebbd3.png" }
    ];
  
    return (
      <section className="pt-32">
        <div className="xl:max-w-[1280px] container mx-auto px-4">
          <div className="bg-[#f7efff] py-10 px-6 sm:py-14 sm:px-10 rounded-[50px] overflow-hidden relative">
            <div className="text-center max-w-xl mx-auto mb-12 relative z-10">
              <h2 className="lg:text-[38px] font-bold mb-2">Industries We Serve</h2>
              <p className="text-[#6b7280]">Our expertise spans multiple sectors, delivering adaptable solutions tailored to unique industry needs.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 relative z-10">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-md p-6 text-start">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-4">
                    <img src={industry.img} alt={industry.name} className="w-6 h-6" />
                  </div>
                  <h5 className="text-lg font-semibold mb-2 tracking-wide ">{industry.name}</h5>
                  <p className="text-sm text-gray-500">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default IndustriesWeServe;
  