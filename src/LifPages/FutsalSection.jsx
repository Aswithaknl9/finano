import React from 'react';

const FutsalSection = () => {
  return (
    <section className="pt-[130px]">
      <div className="xl:max-w-[1280px] container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="sm:mr-5">
            <h2 className="mb-3 lg:mb-6 text-5xl font-semibold">⚽️ Friday Night Futsal: Kicking Off the Weekend</h2>
            <span className='text-[#6b7280]'>
              At AppDevs, we believe that a healthy body fosters a creative mind. That’s why every Friday night, as the workweek winds down, our team gathers for an exciting session of futsal (a smaller, faster-paced version of football). It’s not just a game for us—it’s a tradition that brings everyone together, both on and off the field.
            </span>
            <img
              alt="Experience Thumbnail"
              loading="lazy"
              width="3702"
              height="3019"
              decoding="async"
              data-nimg="1"
              className="rounded-[20px] shadow-lg p-2 mt-4"
              src="https://appdevs.net/_next/static/media/football.999aabbe.webp"
              style={{ color: 'transparent' }}
            />
          </div>
          <ul className="space-y-4">
            <li className="flex items-center rounded-[27px] p-6 lg:p-8 shadow-primary__shadow border border-primary_border_color">
              <img
                alt="Stress Relief"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                src="https://appdevs.net/_next/static/media/convenience&InsightfulAnalytics.fd5da22b.png"
                style={{ color: 'transparent' }}
              />
              <div className="ms-5">
                <h4 className="mb-2 font-semibold text-[24px]">Stress Relief</h4>
                <p className='text-[#6b7280]'>After a week of brainstorming, coding, and delivering, nothing beats the exhilaration of a fast-paced futsal match to blow off steam.</p>
              </div>
            </li>
            <li className="flex items-center rounded-[27px] p-6 lg:p-8 shadow-primary__shadow border border-primary_border_color">
              <img
                alt="Team Bonding"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                src="https://appdevs.net/_next/static/media/realTimeUpdates&StreamlinedOperations.05dc30ca.png"
                style={{ color: 'transparent' }}
              />
              <div className="ms-5">
                <h4 className="mb-2 font-semibold text-[24px]">Team Bonding</h4>
                <p className='text-[#6b7280]'>Whether you’re a star striker or new to the game, futsal is a leveler, building camaraderie and trust among teammates.</p>
              </div>
            </li>
            <li className="flex items-center rounded-[27px] p-6 lg:p-8 shadow-primary__shadow border border-primary_border_color">
              <img
                alt="Healthy Competition"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                src="https://appdevs.net/_next/static/media/securityControls.0858e0b9.png"
                style={{ color: 'transparent' }}
              />
              <div className="ms-5">
                <h4 className="mb-2 font-semibold text-[24px]">Healthy Competition</h4>
                <p className='text-[#6b7280]'>Friendly rivalries on the field translate into better collaboration in the workplace, fostering mutual respect.</p>
              </div>
            </li>
            <li className="flex items-center rounded-[27px] p-6 lg:p-8 shadow-primary__shadow border border-primary_border_color">
              <img
                alt="Enjoyment"
                loading="lazy"
                width="50"
                height="50"
                decoding="async"
                data-nimg="1"
                src="https://appdevs.net/_next/static/media/convenience&InsightfulAnalytics.fd5da22b.png"
                style={{ color: 'transparent' }}
              />
              <div className="ms-5">
                <h4 className="mb-2 font-semibold text-[24px]">Enjoyment</h4>
                <p className='text-[#6b7280]'>After a week of brainstorming, coding, and delivering, nothing beats the exhilaration of a fast-paced futsal match to blow off steam.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FutsalSection;
