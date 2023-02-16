import './NavBar.css';

interface Props {
  handleClickScrollOffer: () => void;
  handleClickAboutUs: () => void;
}

const NavBar: React.FunctionComponent<Props> = ({
  handleClickScrollOffer,
  handleClickAboutUs,
}) => {
  return (
    <nav className="navbar">
      <div className="title">
        <h3>
          <b>moja firma</b>
        </h3>
      </div>

      <div className="navbar-buttons">
        <button onClick={handleClickAboutUs}>
          <h3>o nas</h3>
        </button>
        <button onClick={handleClickScrollOffer}>
          <h3>oferta</h3>
        </button>
        <button className="notAllowedBtn">
          <h3>kontakt</h3>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
