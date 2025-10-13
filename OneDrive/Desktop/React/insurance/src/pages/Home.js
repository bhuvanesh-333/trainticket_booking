// import React from "react";
// import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Welcome to Insurance Hub</h1>
    <p style={styles.desc}>Discover, Apply, and Manage your insurance policies with ease.</p>
    <Link to="/policies">
      <button style={styles.button}>Explore Policies</button>
    </Link>
  </div>
);

const styles = {
  container: { maxWidth: "600px", margin: "auto", textAlign: "center", paddingTop: "120px" },
  title: { fontSize: "48px", marginBottom: "20px", fontWeight: "700" },
  desc: { fontSize: "20px", marginBottom: "36px" },
  button: { backgroundColor: "#ffda79", padding: "15px 40px", border: "none", borderRadius: "30px", fontWeight: "600", fontSize: "18px", cursor: "pointer", color: "#341f97", boxShadow: "0 6px 15px rgba(255,218,121,0.5)", transition: "transform 0.3s ease" }
};

export default Home;
