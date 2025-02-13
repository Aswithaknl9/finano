import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './Nav/Navbar';
import Footer from './Nav/Footer';
import AppRoutes from './AppRoutes';
import Section55 from './pages/section55';


const App = () => {
  return (
     <Router>
      <Navbar />
      <AppRoutes />
      <Footer />
    {/*<Section55 />*/}
    </Router>

  );
};

export default App;
