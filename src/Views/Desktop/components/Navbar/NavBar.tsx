import './NavBar.css';

const NavBar: React.FunctionComponent = () => {
  return (
    <nav className="navbar">
      <div className="title">
        <h3>
          <b>moja firma</b>
        </h3>
      </div>

      <div className="navbar-buttons">
        <button>
          <h3>o nas</h3>
        </button>
        <button>
          <h3>oferta</h3>
        </button>
        <button style={{ cursor: 'not-allowed' }}>
          <h3>kontakt</h3>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
