import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; 
import Navbar from './Nav/Navbar';
import Footer from './Nav/Footer';
import AppRoutes from './AppRoutes';
import Header from './Nav/Header';


const App = () => {
  return (
     <Router>
      <Navbar />
      {/*<Header />*/}
      <AppRoutes />
      <Footer />
    {/*<Section55 />*/}
    </Router>

  );
};

export default App;
