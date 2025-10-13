// import React from "react";
// // import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

import React, { useState } from "react";
import { Link } from "react-router-dom";




const Navbar = () => (
  <nav style={styles.nav}>
    <div style={styles.logo}>🛡️ Insurance Hub</div>
    <div style={styles.links}>
      <Link to="/" style={styles.link}>Home</Link>
      <Link to="/policies" style={styles.link}>Policies</Link>
      <Link to="/apply" style={styles.link}>Apply</Link>
      <Link to="/profile" style={styles.link}>Profile</Link>
      <Link to="/login" style={styles.link}>Login</Link>
      <Link to="/signup" style={styles.link}>Sign Up</Link>
    </div>
  </nav>
);

const styles = {
  nav: { display: "flex", justifyContent: "space-between", alignItems: "center", background: "#341f97", padding: "15px 40px", color: "#ddd", fontWeight: "600", boxShadow: "0 5px 15px rgba(0,0,0,0.2)" },
  logo: { fontSize: "24px" },
  links: { display: "flex", gap: "20px" },
  link: { color: "#eee", textDecoration: "none", fontSize: "16px", transition: "color 0.3s" }
};

export default Navbar;
