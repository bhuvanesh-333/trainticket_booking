




import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
      setMessage(`Welcome, ${userData.name}! You are successfully logged in.`);
      localStorage.setItem("loggedUser", JSON.stringify({ email, name: userData.name }));
      onLogin();
    } else {
      setMessage("Email or Password is not matching with our records.");
    }
  };

  return (
    <div className="login-bg-root">
      <form onSubmit={handleSubmit} className="animated-login-form">
        <h2 className="login-title">Login</h2>
        <div className="animated-field">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="username"
            className={email ? "has-content" : ""}
            placeholder="Email"
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
            autoComplete="current-password"
            className={password ? "has-content" : ""}
            placeholder="Password"
          />
          <label>Password</label>
          <span className="input-circle"></span>
        </div>
        <div className="button-group">
          <button className="glow-btn" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
          <Link to="/signup" className="glow-btn mini-btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign up
          </Link>
        </div>
        {message && <p className="login-message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;


