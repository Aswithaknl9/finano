import React from 'react';

const PaymentLogo = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center gap-4 lg:mt-0 mt-5">
      <a
        className="transition-all hover:opacity-60"
        href="#"
        onClick={handleScrollToTop}
      >
        <img
          alt="GDPR"
          loading="lazy"
          width="69"
          height="36"
          decoding="async"
          className="object-cover xl:w-auto lg:w-10"
          src="https://appdevs.net/_next/static/media/gdpr.acfc3409.png"
          style={{ color: 'transparent' }}
        />
      </a>
      <a
        className="transition-all hover:opacity-60"
        href="#"
        onClick={handleScrollToTop}
      >
        <img
          alt="Success Payment"
          loading="lazy"
          width="73"
          height="31"
          decoding="async"
          className="object-cover xl:w-auto lg:w-10"
          src="https://appdevs.net/_next/static/media/successPayment.888b314c.png"
          style={{ color: 'transparent' }}
        />
      </a>
      <a
        className="transition-all hover:opacity-60"
        href="#"
        onClick={handleScrollToTop}
      >
        <img
          alt="Stripe"
          loading="lazy"
          width="64"
          height="28"
          decoding="async"
          className="object-cover xl:w-auto lg:w-10"
          src="https://appdevs.net/_next/static/media/stripe.25e087c4.png"
          style={{ color: 'transparent' }}
        />
      </a>
    </div>
  );
};

export default PaymentLogo;
