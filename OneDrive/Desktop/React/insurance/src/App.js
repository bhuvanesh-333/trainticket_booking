// import React from "react";
// import React, { useState } from "react";
// import React, { useState, useRef } from 'react';

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./Navbar";
// import Navbar from "./components/Navbar";
// // import Footer from "./Footer";
// // import Home from "./Home";
// // import Policies from "./Policies";
// // import ApplyPolicy from "./ApplyPolicy";
// // import Login from "./Login";
// // import SignUp from "./SignUp";
// // import Profile from "./Profile";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Policies from "./pages/Policies";
// import ApplyPolicy from "./pages/ApplyPolicy";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
// import Profile from "./pages/Profile";
// import { Link } from "react-router-dom";

import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";  // Adjust the path as per your folder structure
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Policies from "./pages/Policies";
import ApplyPolicy from "./pages/ApplyPolicy";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";



function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <div style={{ flex: 1, background: "linear-gradient(135deg, #326282ff, #9b59b6)", padding: "40px 20px", color: "#fff" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/apply" element={<ApplyPolicy />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
