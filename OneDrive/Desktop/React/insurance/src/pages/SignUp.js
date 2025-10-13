import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      alert("Please fill all fields!");
      return;
    }
    localStorage.setItem("user", JSON.stringify(form));
    alert("Signup successful! Please login.");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} style={styles.input} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} style={styles.input} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} style={styles.input} />
        <button type="submit" style={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px", color: "#341f97" },
  form: { display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" },
  input: { width: "300px", padding: "10px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "16px" },
  button: { backgroundColor: "#341f97", color: "#fff", padding: "10px 20px", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "bold" }
};

export default SignUp;
