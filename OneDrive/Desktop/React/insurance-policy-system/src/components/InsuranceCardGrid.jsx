



import "./InsuranceCardGrid.css";

export default function InsuranceCardGrid({ policies, onBuy }) {
  return (
    <div className="resource-center">
      <div className="card-grid">
        {policies.map((card, idx) => (
          <div className="policy-card" key={idx}>
            <div className="card-img-wrap">
              <img src={card.img} alt={card.name} />
            </div>
            <div className="card-content">
              <div className="policy-link">{card.name}</div>
              <div className="card-desc">{card.subtitle}</div>
              <div className="card-price">₹{card.price.toLocaleString()}</div>
              <button className="card-buy-btn" onClick={() => onBuy(card)}>
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
