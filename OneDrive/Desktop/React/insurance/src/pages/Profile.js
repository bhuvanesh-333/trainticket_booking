import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const applied = JSON.parse(localStorage.getItem("appliedPolicies")) || [];
    setUser(userData);
    setPolicies(applied);
  }, []);

  if (!user)
    return <h2 style={{ textAlign: "center", color: "#341f97" }}>Please login to view your profile.</h2>;

  return (
    <div style={styles.container}>
      <h1>{user.name}'s Profile</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <h2>Applied Policies</h2>
      {policies.length === 0 ? (
        <p>No policies applied yet.</p>
      ) : (
        <ul>
          {policies.map((p, i) => (
            <li key={i} style={styles.listItem}>
              <strong>{p.policyType}</strong> - {p.duration}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "40px", color: "#341f97" },
  listItem: { backgroundColor: "#e0e0e0", margin: "10px auto", padding: "10px", borderRadius: "8px", width: "300px", color: "#333" }
};

export default Profile;
