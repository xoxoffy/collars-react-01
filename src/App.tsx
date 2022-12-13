import './App.css';
import HomeSection from './components/HomeSection/HomeSection';
import NavBar from './components/Navbar/NavBar';

const App = () => {
  return (
    <div className="App">
      <div className="main">
        <NavBar />
        <HomeSection />
      </div>
    </div>
  );
};

export default App;
