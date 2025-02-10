import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './Nav/Navbar';
import Footer from './Nav/Footer';
import AppRoutes from './AppRoutes';
import Megamenu from './dropdown/Megamenu';


const App = () => {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    </Router>
  );
};

export default App;
