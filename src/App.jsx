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
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
