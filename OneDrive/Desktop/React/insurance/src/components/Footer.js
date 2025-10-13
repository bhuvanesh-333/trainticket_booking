// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const Footer = () => (
  <footer style={styles.footer}>
    <p>© 2025 Insurance Hub. Contact: support@insurancehub.com</p>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: "#341f97",
    color: "white",
    textAlign: "center",
    padding: "20px",
    marginTop: "50px"
  }
};

export default Footer;
