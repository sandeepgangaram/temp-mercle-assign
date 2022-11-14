import Tooltip from "./Tooltip";

const RowCard = ({ data }) => {
  const { email, nft, description, accessories, status, date } = data;
  return (
    <div className="row-card">
      <div className="row-card-email">{email}</div>
      <div className="row-card-nft">
        <img src={nft.image} alt={nft.description} />
        <span className="row-card-nft__description">{nft.description}</span>
      </div>
      <div className="row-card-desc">
        <p>{description}</p>
      </div>
      <div className="row-card-acs">
        {accessories.map((item, i) => {
          if (i <= 1)
            return (
              <Tooltip
                key={i}
                title="Accessories"
                description={item.description}
                message={item.message}
              >
                <span>{item.description}</span>
              </Tooltip>
            );
          if (i === 2) return <span key={i}>+{accessories.length - 2}</span>;
          return false;
        })}
      </div>
      <div className="row-card-status">
        {status.startsWith("Yet") && (
          <span className="row-card-status__yet">{status}</span>
        )}
        {status.startsWith("Pending") && (
          <span className="row-card-status__pending">{status}</span>
        )}
        {status.startsWith("Claimed") && (
          <span className="row-card-status__claimed">{status}</span>
        )}
      </div>
      <div className="row-card-date">{date}</div>
    </div>
  );
};

export default RowCard;
