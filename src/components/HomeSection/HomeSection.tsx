import './HomeSection.css';

interface Props {
  handleClickScrollOffer: () => void;
}

const HomeSection: React.FunctionComponent<Props> = ({
  handleClickScrollOffer,
}) => {
  return (
    <div className="img-background">
      <section className="home-section">
        <h1>
          Nasza firma oferuje najwyższej
          <br /> jakości produkty.
        </h1>
        <h4>Nie wierz nam na słowo - sprawdź</h4>
        <button onClick={handleClickScrollOffer} className="offer-button">
          oferta
        </button>
      </section>
    </div>
  );
};

export default HomeSection;
