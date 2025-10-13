import React, { useState } from "react";
import { Link } from "react-router-dom";


const ApplyPolicy = () => {
  const [form, setForm] = useState({ name: "", policyType: "", duration: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.policyType || !form.duration) {
      alert("Please fill all details!");
      return;
    }
    const appliedPolicies = JSON.parse(localStorage.getItem("appliedPolicies")) || [];
    appliedPolicies.push(form);
    localStorage.setItem("appliedPolicies", JSON.stringify(appliedPolicies));
    alert("Policy applied successfully!");
    setForm({ name: "", policyType: "", duration: "" });
  };

  return (
    <div style={styles.container}>
      <h2>Apply for a Policy</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input type="text" name="name" placeholder="Your Full Name" value={form.name} onChange={handleChange} style={styles.input} />
        <select name="policyType" value={form.policyType} onChange={handleChange} style={styles.input}>
          <option value="">Select Policy Type</option>
          <option value="Health">Health Insurance</option>
          <option value="Life">Life Insurance</option>
          <option value="Vehicle">Vehicle Insurance</option>
          <option value="Travel">Travel Insurance</option>
        </select>
        <input type="text" name="duration" placeholder="Duration (e.g. 1 Year)" value={form.duration} onChange={handleChange} style={styles.input} />
        <button type="submit" style={styles.button}>Apply</button>
      </form>
    </div>
  );
};

const styles = {
  container: { maxWidth: "400px", margin: "auto", background: "#fff", padding: "40px", borderRadius: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)", color: "#341f97", marginTop: "60px" },
  form: { display: "flex", flexDirection: "column", gap: "18px" },
  input: { padding: "10px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px" },
  button: { background: "#341f97", color: "#fff", border: "none", borderRadius: "8px", fontWeight: "bold", padding: "10px 0", fontSize: "18px", marginTop: "10px" }
};

export default ApplyPolicy;
