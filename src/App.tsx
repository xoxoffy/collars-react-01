import './App.css';
import Footer from './components/Footer/Footer';
import HomeSection from './components/HomeSection/HomeSection';
import NavBar from './components/Navbar/NavBar';
import ServiceBoxes from './components/ServiceBoxes/ServiceBoxes';
import Specialists from './components/Specialists/Specialists';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <NavBar />
      <HomeSection />
      <Specialists />
      <ServiceBoxes />
      <Footer />
    </div>
  );
};

export default App;
