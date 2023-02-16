import './App.css';
import Footer from './components/Footer/Footer';
import HomeSection from './components/HomeSection/HomeSection';
import NavBar from './components/Navbar/NavBar';
import Specialists from './../containers/Specialists/Specialists';
import ServiceBoxes from './../containers/ServiceBoxes/ServiceBoxes';

const App: React.FunctionComponent = () => {
  const handleClickScrollOffer = () => {
    const serviceBoxesElement = document.getElementById('service-boxes');
    if (serviceBoxesElement) {
      serviceBoxesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScrollAboutUs = () => {
    const specialistsElement = document.getElementById('specialists');
    if (specialistsElement) {
      specialistsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      <NavBar
        handleClickScrollOffer={handleClickScrollOffer}
        handleClickAboutUs={handleClickScrollAboutUs}
      />
      <HomeSection handleClickScrollOffer={handleClickScrollOffer} />
      <div id="specialists">
        <Specialists />
      </div>
      <div id="service-boxes">
        <ServiceBoxes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
