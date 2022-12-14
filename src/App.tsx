import './App.css';
import HomeSection from './components/HomeSection/HomeSection';
import NavBar from './components/Navbar/NavBar';
import Specialists from './components/Specialists/Specialists';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <HomeSection />
      <Specialists />
    </div>
  );
};

export default App;
