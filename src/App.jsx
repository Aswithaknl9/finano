import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import Navbar from './Nav/Navbar';
import Footer from './Nav/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Products from './Grid/Products';
import Solutions from './pages/Solutions'; 
import Services from './pages/Services';
import MobileBankingSolution from './Solutiondroplist/mobliebanksolution'; 
import RemittanceSolution from './Solutiondroplist/remittancesolutions' ;
import DigitalWallet from './Solutiondroplist/digitalwallet';
import PaymentGateway from './Solutiondroplist/paymentgateway';
import CurrencyExchange from './Solutiondroplist/CurrencyExchange';
import CardIssuing from './Solutiondroplist/CardIssuing';
import CrowdFunding from './Solutiondroplist/CrowdFunding';
import InvestmentManagement from './Solutiondroplist/InvestmentManagement';
import Escrow from './Solutiondroplist/Escrow';
import AIchatbot from './Solutiondroplist/AIchatbot';
import OnlineBooking from './Solutiondroplist/OnlineBooking';
import MultiVendor from './Solutiondroplist/MultiVendor';
import Installation from './Servicesdropdownlist/Installation';
import Fintech from './Servicesdropdownlist/Fintech';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/solutions" element={<Solutions />} /> 
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/solutions/mobile-banking-solutions" element={<MobileBankingSolution />} />
        <Route path="/solutions/remittance-solution" element={<RemittanceSolution />} /> 
        <Route path="/solutions/digital-wallet-solutions" element={<DigitalWallet />} />
        <Route path='/solutions/white-label-payment-gateway-solutions' element={<PaymentGateway />} />
        <Route path='/solutions/currency-exchange-solutions' element={<CurrencyExchange />} />
        <Route path='/solutions/card-issuing-solutions' element={<CardIssuing />} />
        <Route path='/solutions/crowdfunding-solutions' element={<CrowdFunding />} />
        <Route path='/solutions/investment-management-solutions' element={<InvestmentManagement />} />
        <Route path='/solutions/escrow-solutions' element={<Escrow />} />
        <Route path='/solutions/ai-chatbot-solutions' element={<AIchatbot />} />
        <Route path='/solutions/online-booking-solutions' element={<OnlineBooking />} />
        <Route path='/solutions/multi-vendor-solutions' element={<MultiVendor />} />
        <Route path='/services/installation-service' element={<Installation />} />
        <Route path='/services/fintech-software-development' element={<Fintech />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
