import React from 'react';
import NavBar from './components/Navbar/NavBar';
import HomeSection from './components/HomeSection/HomeSection';
import Specialists from './components/Specialists/Specialists';
import ServiceBoxes from './components/ServiceBoxes/ServiceBoxes';
import Footer from './components/Footer/Footer';

const DesktopView: React.FunctionComponent = () => {
  return (
    <div>
      <NavBar />
      <HomeSection />
      <Specialists />
      <ServiceBoxes />
      <Footer />
    </div>
  );
};

export default DesktopView;
