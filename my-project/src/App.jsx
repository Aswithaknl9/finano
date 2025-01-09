import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import Navbar from './Nav/Navbar';
import Footer from './Nav/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Products from './Grid/Products';
import Solutions from './pages/Solutions';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/solutions" element={<Solutions />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
