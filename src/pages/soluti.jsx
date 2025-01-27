import React from "react";
import Card from "../component/Card";
import digital from "../assets/digitalWallet.png";
import currency from "../assets/currencyExchange.png";
import crowd from "../assets/crowdFunding.png";
import pay from "../assets/paymentGateway.png";
import solutionBg from "../assets/solutionBg.png";

const Soluti = () => {
  return (
    <div
      className="bg-no-repeat  flex items-center justify-center min-h-screen "
      style={{ backgroundImage: `url(${solutionBg})` }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1280px]">
        {/* Card Components */}
        <Card
          imgSrc="https://appdevs.net/_next/static/media/remittance.6985c065.webp"
          imgAlt="Mobile Banking Solutions"
          title="Mobile Banking Solutions"
          description="Seamless banking on-the-go with secure transactions and features."
          link="/solutions/mobile-banking-solutions"
        />
        <Card
          imgSrc="https://appdevs.net/_next/static/media/mobileBanking.26967535.webp"
          imgAlt="Remittance Solutions"
          title="Remittance Solutions"
          description="Fast and affordable international money transfers made easy."
          link="/solutions/remittance-solution"
        />
        <Card
          imgSrc={digital}
          imgAlt="Digital Wallet Solutions"
          title="Digital Wallet Solutions"
          description="Secure digital wallet for effortless payments and fund management."
          link="/solutions/digital-wallet-solutions"
        />
        <Card
          imgSrc={pay}
          imgAlt="Payment Gateway Solutions"
          title="Payment Gateway Solutions"
          description="Reliable payment processing for online transactions and businesses."
          link="/solutions/white-label-payment-gateway-solutions"
        />
        <Card
          imgSrc={currency}
          imgAlt="Currency Exchange Solutions"
          title="Currency Exchange Solutions"
          description="Real-time currency conversion for global transactions at competitive rates."
          link="/solutions/currency-exchange-solutions"
        />
        <Card
          imgSrc={currency}
          imgAlt="Card Issuing Solutions"
          title="Card Issuing Solutions"
          description="Custom card solutions tailored for businesses and brands."
          link="/solutions/card-issuing-solutions"
        />
        <Card
          imgSrc={crowd}
          imgAlt="Crowdfunding Solutions"
          title="Crowdfunding Solutions"
          description="Effective platform for raising funds and supporting projects with ease."
          link="/solutions/crowdfunding-solutions"
        />
      </div>
    </div>
  );
};

export default Soluti;
