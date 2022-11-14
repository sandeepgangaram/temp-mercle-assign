const rowCard = () => {
  return (
    <div className="row-card">
      <div className="row-card-email">rainwater@cloud.com</div>
      <div className="row-card-nft">
        <img src="images/crab.png" alt="nft" />
        <span className="row-card-nft__description">Orange Crab-Face</span>
      </div>
      <div className="row-card-desc">
        <p>
          Sickle-hedman is one of 1,000 Hedz. Hand drawn by Matt Furie on planet
          Earth in 2022.
        </p>
      </div>
      <div className="row-card-acs">
        <span>Silver</span>
        <span>Medal</span>
        <span>+1</span>
      </div>
      <div className="row-card-status">Yet to be claimed</div>
      <div className="row-card-date">Feb 20, 2022</div>
    </div>
  );
};

export default rowCard;
