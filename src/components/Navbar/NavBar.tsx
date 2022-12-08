import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-home">
        <b>moja firma</b>
      </div>
      <div className="navbar-links"></div>
      <a>o nas</a>
      <a>oferta</a>
      <a>kontakt</a>
    </nav>
  );
};

export default NavBar;
