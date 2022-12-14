import './App.css';
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
    </div>
  );
};

export default App;
