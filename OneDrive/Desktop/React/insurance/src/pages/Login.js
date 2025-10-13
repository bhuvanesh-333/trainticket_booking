import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      alert("No user found. Please sign up first!");
      return;
    }
    if (storedUser.email === email && storedUser.password === password) {
      localStorage.setItem("loggedIn", true);
      alert("Login successful!");
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} style={styles.input} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} style={styles.input} />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px", color: "#341f97" },
  form: { display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" },
  input: { width: "300px", padding: "10px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" },
  button: { backgroundColor: "#4285f4", color: "white", padding: "10px 20px", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }
};

export default Login;
