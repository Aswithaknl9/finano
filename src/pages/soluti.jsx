import React from 'react';
import Card from '../component/Card';
import digital from '../assets/digitalWallet.png';
import currency from '../assets/currencyExchange.png';
import crowd from '../assets/crowdFunding.png';
import pay from '../assets/paymentGateway.png';
import solutionBg from '../assets/solutionBg.png';

const Soluti = () => {
  return (
    <div
      className="grid gap-6 p-6 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${solutionBg})` }}
    >
      {/* First Row of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        <Card
          imgSrc="https://appdevs.net/_next/static/media/remittance.6985c065.webp"
          imgAlt="Mobile Banking Solutions"
          title="Mobile Banking Solutions"
          description="Seamless banking on-the-go with secure transactions and features."
          link="Cardpage"
        />
        <Card
          imgSrc="https://appdevs.net/_next/static/media/mobileBanking.26967535.webp"
          imgAlt="Remittance Solutions"
          title="Remittance Solutions"
          description="Fast and affordable international money transfers made easy."
          link="Cardpage"
        />
        <Card
          imgSrc={digital}
          imgAlt="Digital Wallet Solutions"
          title="Digital Wallet Solutions"
          description="Secure digital wallet for effortless payments and fund management."
          link="Cardpage"
        />
        <Card
          imgSrc={pay}
          imgAlt="Payment Gateway Solutions"
          title="Payment Gateway Solutions"
          description="Reliable payment processing for online transactions and businesses."
          link="Cardpage"
        />
      </div>

      {/* Second Row of Cards with Space on the Right */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
        <Card
          imgSrc={currency}
          imgAlt="Currency Exchange Solutions"
          title="Currency Exchange Solutions"
          description="Real-time currency conversion for global transactions at competitive rates."
          link="Cardpage"
        />
        <Card
          imgSrc={currency}
          imgAlt="Currency Exchange Solutions"
          title="Currency Exchange Solutions"
          description="Real-time currency conversion for global transactions at competitive rates."
          link="Cardpage"
        />
        <Card
          imgSrc={crowd}
          imgAlt="Crowdfunding Solutions"
          title="Crowdfunding Solutions"
          description="Effective platform for raising funds and supporting projects with ease."
          link="Cardpage"
        />
      </div>
    </div>
  );
};

export default Soluti;
