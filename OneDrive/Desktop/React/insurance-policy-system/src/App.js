


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PolicyForm from "./components/PolicyForm";
import "./App.css";

const policies = [
  { id: 1, name: "Life Secure Plan", price: 12000 },
  { id: 2, name: "Health Shield", price: 8000 },
  { id: 3, name: "Car Protect Plus", price: 7500 },
  { id: 4, name: "Two Wheeler Cover", price: 2200 },
  { id: 5, name: "Personal Accident Guard", price: 3100 },
  { id: 6, name: "Travel Globe", price: 3500 },
  { id: 7, name: "Home Safety Plan", price: 9500 },
  { id: 8, name: "Critical Illness Care", price: 11000 },
  { id: 9, name: "Family Health Care", price: 9800 },
  { id: 10, name: "Senior Citizen Health", price: 12500 },
  { id: 11, name: "Term Life Protect", price: 14200 },
  { id: 12, name: "Retirement Pension Plan", price: 9200 },
  { id: 13, name: "Child Education Secure", price: 5200 },
  { id: 14, name: "Cancer Care Plan", price: 13000 },
  { id: 15, name: "Property Insurance", price: 10500 },
  { id: 16, name: "Cashless Mediclaim", price: 9400 },
  { id: 17, name: "Technology Gadget Cover", price: 2100 },
  { id: 18, name: "Professional Indemnity", price: 6700 },
  { id: 19, name: "Fire Safety Cover", price: 3200 },
  { id: 20, name: "Marine Insurance", price: 9100 },
  { id: 21, name: "Loan Protection", price: 6600 },
  { id: 22, name: "Wedding Insurance", price: 4300 },
  { id: 23, name: "Pet Health Insurance", price: 3500 },
  { id: 24, name: "Income Protection", price: 7800 },
  { id: 25, name: "Group Health Plan", price: 10800 }
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [purchased, setPurchased] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      const logged = JSON.parse(localStorage.getItem("loggedUser"));
      setUserName(logged?.name || "");
    } else {
      setUserName("");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("purchasedPolicies")) || {};
    setPurchased(Object.keys(saved).map(k => parseInt(k)));
  }, []);

  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("loggedUser");
  };
  const handlePolicyTaken = (policyId) => {
    if (!purchased.includes(policyId)) {
      setPurchased([...purchased, policyId]);
    }
  };

  return (
    <Router>
      {/* Header placed here, receives props */}
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/" /> : <Signup onSignup={handleLogin} />}
        />
        <Route
          path="/"
          element={
            isAuthenticated
              ? <Home userName={userName} onLogout={handleLogout} purchased={purchased} setPurchased={setPurchased} />
              : <Navigate to="/login" />
          }
        />
        <Route
          path="/policyform/:policySlug"
          element={
            isAuthenticated
              ? <PolicyForm policies={policies} onPolicyTaken={handlePolicyTaken} />
              : <Navigate to="/login" />
          }
        />
      </Routes>

      {/* Conditional footer */}
      {isAuthenticated && <Footer />}
    </Router>
  );
}

export default App;

