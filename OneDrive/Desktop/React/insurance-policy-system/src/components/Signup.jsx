



import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Signup = ({ onSignup }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setMessage("Please fill all fields.");
      return;
    }
    if (localStorage.getItem(email)) {
      setMessage("Account already exists with this email.");
      return;
    }
    localStorage.setItem(email, JSON.stringify({ name, email, password }));
    setMessage("Signup successful! You can now login.");
    setTimeout(() => {
      onSignup();
      navigate("/login");
    }, 1200);
  };

  return (
    <div className="login-bg-root">
      <form onSubmit={handleSubmit} className="animated-login-form">
        <h2 className="login-title">Sign Up</h2>
        <div className="animated-field">
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="name"
            placeholder="Name"
            className={name ? "has-content" : ""}
          />
          <label>Name</label>
          <span className="input-circle"></span>
        </div>
        <div className="animated-field">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="username"
            placeholder="Email"
            className={email ? "has-content" : ""}
          />
          <label>Email</label>
          <span className="input-circle"></span>
        </div>
        <div className="animated-field">
          <input
            type="password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="new-password"
            placeholder="Password"
            className={password ? "has-content" : ""}
          />
          <label>Password</label>
          <span className="input-circle"></span>
        </div>
        <div className="button-group">
          <button className="glow-btn" type="submit">
            <span></span><span></span><span></span><span></span>
            Signup
          </button>
          <Link to="/login" className="glow-btn mini-btn">
            <span></span><span></span><span></span><span></span>
            Login
          </Link>
        </div>
        {message && <p className="login-message">{message}</p>}
      </form>
    </div>
  );
};
export default Signup;

