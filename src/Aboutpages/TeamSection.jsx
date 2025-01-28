import React from "react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Joy Chakraborty",
      role: "Product Designer",
      image: "https://appdevs.net/_next/static/media/joy.0cbba324.webp",
    },
    {
      name: "Mehedi Hasan",
      role: "Senior Software Engineer (Laravel)",
      image: "https://appdevs.net/_next/static/media/mehedi.df69a511.webp",
    },
    {
      name: "Mahbubur Rahman",
      role: "Senior Software Engineer (Laravel)",
      image: "https://appdevs.net/_next/static/media/rokon.13693ea7.webp",
    },
    {
      name: "Ruddra Khan",
      role: "Senior Frontend Developer",
      image: "https://appdevs.net/_next/static/media/ruddra.fc76fa9b.webp",
    },
    {
      name: "Fardin Mehbub Rupak",
      role: "Frontend Developer",
      image: "https://appdevs.net/_next/static/media/rupak.377d8e4c.webp",
    },
    {
      name: "Rabbi Hossain",
      role: "Senior Software Developer (Flutter)",
      image: "https://appdevs.net/_next/static/media/rabbi.d0bd030c.webp",
    },
    {
      name: "Asif Ur Rahman",
      role: "Senior Software Engineer (Flutter)",
      image: "https://appdevs.net/_next/static/media/abir.74e4914f.webp",
    },
    {
      name: "Yasin Ali",
      role: "Software Developer (Flutter)",
      image: "https://appdevs.net/_next/static/media/yasin.bf164f42.webp",
    },
    {
      name: "Arefin Mukto",
      role: "Frontend Developer",
      image: "https://appdevs.net/_next/static/media/mukto.671cda43.webp",
    },
    {
      name: "Amir Sohel Akash",
      role: "Software Engineer (Laravel)",
      image: "https://appdevs.net/_next/static/media/akash.fc6b6b91.webp",
    },
    {
      name: "Saem Sarkar",
      role: "Software Engineer (Flutter)",
      image: "https://appdevs.net/_next/static/media/saem.082c09ed.webp",
    },
    {
      name: "Abu Bakkar Siddik",
      role: "Software Engineer (Laravel)",
      image: "https://appdevs.net/_next/static/media/abs.11253b5a.webp",
    },
    {
      name: "Sajedul Islam Fahim",
      role: "Software Engineer (Laravel)",
      image: "https://appdevs.net/_next/static/media/fahim.fc95b1b7.webp",
    },
    {
      name: "Sakib Hasan Badhon",
      role: "Software Engineer (Laravel)",
      image: "https://appdevs.net/_next/static/media/sakib.908e5b3d.webp",
    },
    {
      name: "Zahid Hasan",
      role: "Junior SQA Engineer",
      image: "https://appdevs.net/_next/static/media/zahid.998519a7.webp",
    },
  ];

  return (
    <section className="pt-[130px] pb-[180px] bg-[#F1F5F9]">
      <div className="container mx-auto px-4 xl:max-w-[1280px]">
        {/* Section Header */}
        <div className="section_header mb-7 lg:mb-12 text-center">
          <div className="max-w-[550px] mx-auto">
            <h2 className="mb-5 font-semibold text-[50px]">
              Here's <span className="text-[#7c3aed] inline">the Experts</span> Behind AppDevs
            </h2>
            <p className="text-[#6b7280]">
              Our team of dedicated experts is here to turn your vision into reality, with passion and precision.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-shadow__primary rounded-[10px] p-[10px] text-center"
            >
              {/* Team Member Image */}
              <div className="w-[270px] h-[270px] bg-[#f7f7f7] rounded-[5px] overflow-hidden mx-auto mb-2 pt-[15px]">
                <img
                  alt={`Image of ${member.name}`}
                  src={member.image}
                  className="object-cover w-full h-auto"
                />
              </div>
              {/* Team Member Info */}
              <div className="p-[10px]">
                <h4 className="text-[20px] font-semibold mb-1">{member.name}</h4>
                <p className="text-[14px] font-semibold text-blue-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
