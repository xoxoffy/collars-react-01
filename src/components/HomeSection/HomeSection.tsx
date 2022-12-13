import './HomeSection.css';

const HomeSection = () => {
  return (
    <div className="img-background">
      <section className="home-section">
        <h1>
          Nasza firma oferuje najwyższej
          <br /> jakości produkty.
        </h1>
        <h4>Nie wierz nam na słowo - sprawdź</h4>
        <button className="offer-button">oferta</button>
      </section>
    </div>
  );
};

export default HomeSection;
