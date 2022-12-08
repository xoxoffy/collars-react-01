import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-home">
        <b>moja firma</b>
      </div>
      <div className="navbar-links">
        <button>o nas</button>
        <button>oferta</button>
        <button>kontakt</button>
      </div>
    </nav>
  );
};

export default NavBar;
