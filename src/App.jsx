import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Navbar';
import Footer from './Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import About from './component2/About';
import Servicestyle from './Services/Servicestyle';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Servicestyle />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
