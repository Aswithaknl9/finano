import React from 'react';

const TechnologyStack = () => {
  return (
    <section className="py-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="section_header mb-12">
          <div className="max-w-[775px] mx-auto text-center">
            <h2 className="mb-5 font-bold text-5xl">Built with Leading-Edge Technology</h2>
            <span className='text-[#6B7280] text-[16px]'>Appdevs is a leading provider of custom financial software development services, catering to a diverse range of businesses within the banking and finance industry.</span>
          </div>
        </div>
        
        <ul className="space-y-[10px] mx-10">
          {/* Front-End */}
          <li className="sm:rounded-[32px] rounded-2xl xl:py-10 sm:py-6 py-4 sm:px-6 px-4 lg:flex items-center bg-[#F0E9F7]">
            <h4 className="lg:w-[15%] text-2xl font-bold w-full lg:mb-0 mb-5">Front-End</h4>
            <div className="lg:w-[88%] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-5 gap-4">
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Next.js" loading="lazy" width="45" height="45" className="object-cover" src="https://appdevs.net/_next/static/media/next.cb1d90a5.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">Next.js</h5>
                  <p className="text-[#6B7280] text-[14px]">Next.js is a popular React-based framework that enables developers to build fast, scalable, and SEO-friendly web applications.</p>
                </div>
              </div>
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="React.js" loading="lazy" width="45" height="55" className="object-cover" src="https://appdevs.net/_next/static/media/react.89d58278.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">React.js</h5>
                  <p className="text-[#6B7280] text-[14px]">React.js is an open-source JavaScript library for building user interfaces.</p>
                </div>
              </div>
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Vue.js" loading="lazy" width="45" height="39" className="object-cover" src="https://appdevs.net/_next/static/media/vue.b105c8ee.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">Vue.js</h5>
                  <p className="text-[#6B7280] text-[14px]">Vue.js is a progressive JavaScript framework used for building user interfaces and single-page applications.</p>
                </div>
              </div>
            </div>
          </li>

          {/* Back-End */}
          <li className="sm:rounded-[32px] rounded-2xl xl:py-10 sm:py-6 py-4 sm:px-6 px-4 lg:flex items-center bg-[#E6EFFF]">
            <h4 className="lg:w-[15%] text-2xl font-bold w-full lg:mb-0 mb-5">Back-End</h4>
            <div className="lg:w-[88%] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-5 gap-4">
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Laravel" loading="lazy" width="45" height="46" className="object-cover" src="https://appdevs.net/_next/static/media/laravel.bea31879.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">Laravel</h5>
                  <p className="text-[#6B7280] text-[14px]">Laravel is a powerful and elegant PHP framework designed for building modern web applications.</p>
                </div>
              </div>
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Node.js" loading="lazy" width="45" height="28" className="object-cover" src="https://appdevs.net/_next/static/media/nodeJS.5b61e125.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">Node.js</h5>
                  <p className="text-[#6B7280] text-[14px]">Node.js is a JavaScript runtime environment. Node.js runs on the V8 JavaScript engine.</p>
                </div>
              </div>
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Django" loading="lazy" width="45" height="45" className="object-cover" src="https://appdevs.net/_next/static/media/python.b96758ee.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">Django</h5>
                  <p className="text-[#6B7280] text-[14px]">Django is a high-level, open-source web framework written in Python.</p>
                </div>
              </div>
            </div>
          </li>

          {/* Mobile Apps */}
          <li className="sm:rounded-[32px] rounded-2xl xl:py-10 sm:py-6 py-4 sm:px-6 px-4 lg:flex items-center bg-[#FBF0E5]">
            <h4 className="lg:w-[12%] text-2xl font-bold w-full lg:mb-0 mb-5">Mobile Apps</h4>
            <div className="lg:w-[88%] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-5 gap-4">
              <div className="bg-white rounded-[20px] shadow-primary__shadow p-5 flex items-center">
                <img alt="Flutter" loading="lazy" width="45" height="57" className="object-cover" src="https://appdevs.net/_next/static/media/flutter.e7f646bb.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">Flutter</h5>
                  <p className="text-[#6B7280] text-[14px]">Flutter is an open-source UI software development kit created by Google.</p>
                </div>
              </div>
              <div className="bg-white rounded-[20px] shadow-primary__shadow p-5 flex items-center">
                <img alt="React Native" loading="lazy" width="45" height="44" className="object-cover" src="https://appdevs.net/_next/static/media/reactNative.e1093344.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">React Native</h5>
                  <p className="text-[#6B7280] text-[14px]">React Native is a popular open-source framework for building cross-platform mobile applications.</p>
                </div>
              </div>
              <div className="bg-white rounded-[20px] shadow-primary__shadow p-5 flex items-center">
                <img alt="Swift" loading="lazy" width="45" height="44" className="object-cover" src="https://appdevs.net/_next/static/media/swift.ea425c9c.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">Swift</h5>
                  <p className="text-[#6B7280] text-[14px]">Swift is a high-level general-purpose, multi-paradigm, compiled programming language.</p>
                </div>
              </div>
            </div>
          </li>

          {/* DevOps */}
          <li className="sm:rounded-[32px] rounded-2xl xl:py-10 sm:py-6 py-4 sm:px-6 px-4 lg:flex items-center bg-[#dff0ff]">
            <h4 className="lg:w-[12%] text-2xl font-bold w-full lg:mb-0 mb-5">DevOps</h4>
            <div className="lg:w-[88%] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-5 gap-4">
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Nginx" loading="lazy" width="45" height="52" className="object-cover" src="https://appdevs.net/_next/static/media/nginx.76aed3a5.png" />
                <div className="ms-4">
                  <h5 className="mb-1 font-semibold text-[18px]">Nginx</h5>
                  <p className="text-[#6B7280] text-[14px]">Nginx is a high-performance, open-source web server, reverse proxy, and load balancer.</p>
                </div>
              </div>
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Apache" loading="lazy" width="45" height="17" className="object-cover" src="https://appdevs.net/_next/static/media/apache.2e47b3bd.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px]">Apache</h5>
                  <p className="text-[#6B7280] text-[14px]">The Apache HTTP Server, commonly referred to as Apache, is a powerful, flexible, and open-source web server.</p>
                </div>
              </div>
            </div>
          </li>

          {/* UI/UX Design */}
          <li className="sm:rounded-[32px] rounded-2xl xl:py-10 sm:py-6 py-4 sm:px-6 px-4 lg:flex items-center bg-[#f7efff]">
            <h4 className="lg:w-[12%] text-2xl font-bold w-full lg:mb-0 mb-5">UI/UX Design</h4>
            <div className="lg:w-[88%] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-5 gap-4">
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Figma" loading="lazy" width="45" height="45" className="object-cover" src="https://appdevs.net/_next/static/media/figma.6010ec6b.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">Figma</h5>
                  <p className="text-[#6B7280] text-[14px]">Figma is a powerful, cloud-based design and prototyping tool that has revolutionized the way designers collaborate.</p>
                </div>
              </div>
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Adobe XD" loading="lazy" width="45" height="44" className="object-cover" src="https://appdevs.net/_next/static/media/adobexd.f65e5df9.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">Adobe XD</h5>
                  <p className="text-[#6B7280] text-[14px]">Adobe XD is a vector-based design tool for creating and prototyping user interfaces and experiences.</p>
                </div>
              </div>
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Sketch" loading="lazy" width="45" height="44" className="object-cover" src="https://appdevs.net/_next/static/media/sketch.42dd4a93.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">Sketch</h5>
                  <p className="text-[#6B7280] text-[14px]">Sketch is a digital design tool used for creating user interfaces, web pages, and mobile apps.</p>
                </div>
              </div>
            </div>
          </li>
          {/*Database*/}
          <li className="sm:rounded-[32px] rounded-2xl xl:py-10 sm:py-6 py-4 sm:px-6 px-4 lg:flex items-center bg-[#ebf4ef]">
            <h4 className="lg:w-[12%] text-2xl font-bold w-full lg:mb-0 mb-5">Database</h4>
            <div className="lg:w-[88%] w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:gap-5 gap-4">
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Figma" loading="lazy" width="45" height="45" className="object-cover" src="https://appdevs.net/_next/static/media/mySQL.284661c9.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">MySQL</h5>
                  <p className="text-[#6B7280] text-[14px]">MySQL is an open-source relational database management system.</p>
                </div>
              </div>
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Adobe XD" loading="lazy" width="45" height="44" className="object-cover" src="https://appdevs.net/_next/static/media/postgreSQL.79bba237.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">PostgreSQL</h5>
                  <p className="text-[#6B7280] text-[14px]">PostgreSQL, also known as Postgres, is a free and open-source relational database.</p>
                </div>
              </div>
              <div className="bg-white rounded-[20px] shadow-lg p-5 flex items-center">
                <img alt="Sketch" loading="lazy" width="45" height="44" className="object-cover" src="https://appdevs.net/_next/static/media/mongoDB.2bc9137c.png" />
                <div className="ms-4">
                  <h5 className="mb-1 text-[18px] font-semibold">MongoDB</h5>
                  <p className="text-[#6B7280] text-[14px]">MongoDB is a source-available, cross-platform, document-oriented database program.</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TechnologyStack;
