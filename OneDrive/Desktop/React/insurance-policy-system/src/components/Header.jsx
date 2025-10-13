



import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if(onLogout) onLogout();
    navigate("/login");
  };

  return (
    <header style={{
      background: "linear-gradient(90deg,#2193b0,#6dd5ed 85%)",
      padding: "22px 0 14px 0",
      marginBottom: 18,
      textAlign: "center",
      boxShadow: "0 2px 10px #0288d130"
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <Link to="/" style={{
          fontWeight: "bold", color: "#fff", fontSize: "2em", textDecoration: "none"
        }}>
          Insurance Policy System
        </Link>
        <nav>
          {!isAuthenticated ? (
              <>
                <Link to="/login" 
                  style={{
                    marginRight: 10,
                    color: "#fff",
                    background: "#0879c5",
                    borderRadius: 5,
                    padding: "8px 14px",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}>Login</Link>
                <Link to="/signup" 
                  style={{
                    color: "#fff",
                    background: "#29b764",
                    borderRadius: 5,
                    padding: "8px 14px",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}>Signup</Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                style={{
                  marginLeft: 18,
                  background: "#d90429",
                  color: "#fff",
                  border: "none",
                  borderRadius: 5,
                  padding: "8px 18px",
                  fontWeight: 600,
                  cursor: "pointer"
                }}
              >
                Logout
              </button>
            )}
        </nav>
      </div>
    </header>
  );
};

export default Header;

