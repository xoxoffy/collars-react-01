import './App.css';
import HomeSection from './components/HomeSection/HomeSection';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <NavBar />
        <HomeSection />
      </div>
    </div>
  );
}

export default App;
