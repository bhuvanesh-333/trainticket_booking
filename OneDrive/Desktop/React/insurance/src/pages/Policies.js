import React, { useState } from "react";
import { Link } from "react-router-dom";

const policies = [
  { id: 1, name: "Health Insurance", type: "Health", premium: "₹5,000/year", duration: "1 Year", benefits: ["Hospitalization cover", "Critical illness cover", "Tax benefits"], icon: "❤️", color: "#f28b82" },
  { id: 2, name: "Life Insurance", type: "Life", premium: "₹10,000/year", duration: "10 Years", benefits: ["Life cover", "Savings plan", "Tax benefits"], icon: "👨‍👩‍👦", color: "#fbbc04" },
  { id: 3, name: "Vehicle Insurance", type: "Vehicle", premium: "₹3,500/year", duration: "1 Year", benefits: ["Accident cover", "Third-party liability", "Roadside assistance"], icon: "🚗", color: "#34a853" },
  { id: 4, name: "Travel Insurance", type: "Travel", premium: "₹1,500/year", duration: "1 Month", benefits: ["Medical cover abroad", "Trip cancellation", "Baggage loss cover"], icon: "✈️", color: "#4285f4" }
];

const Policies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filtered = policies.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  return (
    <div style={styles.container}>
      <h1>Available Policies</h1>
      <input
        type="text"
        placeholder="Search policies..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={styles.input}
      />
      <div style={styles.cards}>
        {filtered.map(p => (
          <div key={p.id} style={{ ...styles.card, background: p.color }}>
            <h2>{p.icon} {p.name}</h2>
            <p><strong>Type:</strong> {p.type}</p>
            <p><strong>Premium:</strong> {p.premium}</p>
            <p><strong>Duration:</strong> {p.duration}</p>
            <ul>
              {p.benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: "900px", margin: "auto", padding: "20px", textAlign: "center" },
  input: { padding: "10px", fontSize: "16px", borderRadius: "6px", border: "none", margin: "15px 0", width: "50%" },
  cards: { display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" },
  card: { padding: "24px", borderRadius: "12px", width: "250px", color: "#fff", boxShadow: "0 2px 8px rgba(0,0,0,0.15)" }
};

export default Policies;
