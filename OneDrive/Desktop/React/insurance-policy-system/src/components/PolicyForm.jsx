




import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PolicyForm.css";

const policies = [
  {
    id: 1,
    name: "Life Secure Plan",
    subtitle: "Long-term life insurance",
    price: 12000,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 2,
    name: "Health Shield",
    subtitle: "Comprehensive health coverage",
    price: 8000,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 3,
    name: "Car Protect Plus",
    subtitle: "Advanced auto insurance",
    price: 7500,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 4,
    name: "Two Wheeler Cover",
    subtitle: "Affordable bike insurance",
    price: 2200,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 5,
    name: "Personal Accident Guard",
    subtitle: "Accident emergency cover",
    price: 3100,
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 6,
    name: "Travel Globe",
    subtitle: "Global travel insurance",
    price: 3500,
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 7,
    name: "Home Safety Plan",
    subtitle: "Home and property coverage",
    price: 9500,
    img: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 8,
    name: "Critical Illness Care",
    subtitle: "Severe illness coverage",
    price: 11000,
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 9,
    name: "Family Health Care",
    subtitle: "Family health security",
    price: 9800,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 10,
    name: "Senior Citizen Health",
    subtitle: "Senior medical expenses",
    price: 12500,
    img: "https://images.unsplash.com/photo-1468519411786-d0374bb017b1?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 11,
    name: "Term Life Protect",
    subtitle: "Flexible term plans",
    price: 14200,
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 12,
    name: "Retirement Pension Plan",
    subtitle: "Retirement plans",
    price: 9200,
    img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3027?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 13,
    name: "Child Education Secure",
    subtitle: "Secure your child's future",
    price: 5200,
    img: "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 14,
    name: "Cancer Care Plan",
    subtitle: "Cancer treatment cover",
    price: 13000,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 15,
    name: "Property Insurance",
    subtitle: "Protect your property assets",
    price: 10500,
    img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 16,
    name: "Cashless Mediclaim",
    subtitle: "Hassle free mediclaim",
    price: 9400,
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a8595?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 17,
    name: "Technology Gadget Cover",
    subtitle: "Covers your gadgets",
    price: 2100,
    img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 18,
    name: "Professional Indemnity",
    subtitle: "For professionals",
    price: 6700,
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 19,
    name: "Fire Safety Cover",
    subtitle: "Fire and damage protection",
    price: 3200,
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 20,
    name: "Marine Insurance",
    subtitle: "Marine asset insurance",
    price: 9100,
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 21,
    name: "Loan Protection",
    subtitle: "Loan repayment cover",
    price: 6600,
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 22,
    name: "Wedding Insurance",
    subtitle: "Wedding event insurance",
    price: 4300,
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 23,
    name: "Pet Health Insurance",
    subtitle: "Coverage for your pets",
    price: 3500,
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 24,
    name: "Income Protection",
    subtitle: "Income loss cover",
    price: 7800,
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=450&q=80"
  },
  {
    id: 25,
    name: "Group Health Plan",
    subtitle: "Health insurance for groups",
    price: 10800,
    img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3027?auto=format&fit=crop&w=450&q=80"
  }
  // ... add the rest of the policies here ...
];

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

const PolicyForm = ({ onPolicyTaken }) => {
  const { policySlug } = useParams();
  const policy = policies.find(p => slugify(p.name) === policySlug);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    medicalHistory: "",
    paymentType: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    upiId: ""
  });
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  if (!policy) return <p>Policy not found.</p>;

  const handleInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      !form.name ||
      !form.age ||
      !form.gender ||
      !form.contact ||
      !form.email ||
      !form.address ||
      !form.paymentType ||
      (["Credit Card", "Debit Card"].includes(form.paymentType) &&
        (!form.cardNumber || !form.cardName || !form.expiry || !form.cvv)) ||
      (form.paymentType === "UPI" && !form.upiId)
    ) {
      setMessage("Please fill all required fields!");
      return;
    }
    const existingData = JSON.parse(localStorage.getItem("purchasedPolicies")) || {};
    existingData[policy.id] = { ...form, policy };
    localStorage.setItem("purchasedPolicies", JSON.stringify(existingData));
    if (onPolicyTaken) onPolicyTaken(policy.id);
    setSuccess(true);
    setMessage("");
  };

  if (success) {
    return (
      <div className="form-container" style={{ maxWidth: '480px', margin: '40px auto', padding: '30px', background: '#d4edda', borderRadius: '12px', color: '#155724', fontWeight: '600', textAlign: 'center' }}>
        <h2>Purchase Successful!</h2>
        <p>You have successfully purchased the <strong>{policy.name}</strong> policy.</p>
        <button 
          style={{ marginTop: '15px', padding: '10px 20px', cursor: 'pointer' }} 
          onClick={() => navigate('/')}
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="form-container" style={{ maxWidth: "480px", margin: "40px auto", padding: "30px", boxShadow: "0 0 15px #CCC", borderRadius: "10px", background: "#fff" }}>
      <h2 style={{ marginBottom: "24px" }}>Provide Proof for: {policy.name}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
        {/* Form fields go here */}
        <div>
          <label>Name *</label>
          <input type="text" name="name" value={form.name} onChange={handleInputChange} required style={{ width: "100%", padding: "8px" }} />
        </div>
        <div>
          <label>Age *</label>
          <input type="number" name="age" min="1" value={form.age} onChange={handleInputChange} required style={{ width: "100%", padding: "8px" }} />
        </div>
        <div>
          <label>Gender *</label>
          <select name="gender" value={form.gender} onChange={handleInputChange} required style={{ width: "100%", padding: "8px" }}>
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label>Contact *</label>
          <input type="tel" name="contact" value={form.contact} onChange={handleInputChange} required style={{ width: "100%", padding: "8px" }} />
        </div>
        <div>
          <label>Email *</label>
          <input type="email" name="email" value={form.email} onChange={handleInputChange} required style={{ width: "100%", padding: "8px" }} />
        </div>
        <div>
          <label>Address *</label>
          <input type="text" name="address" value={form.address} onChange={handleInputChange} required style={{ width: "100%", padding: "8px" }} />
        </div>
        <div>
          <label>Medical History (if any)</label>
          <textarea name="medicalHistory" value={form.medicalHistory} onChange={handleInputChange} style={{ width: "100%", padding: "8px" }} />
        </div>
        <div>
          <label>Payment Type *</label>
          <select name="paymentType" value={form.paymentType} onChange={handleInputChange} required style={{ width: "100%", padding: "8px" }}>
            <option value="">Select</option>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>UPI</option>
          </select>
        </div>
        {(form.paymentType === "Credit Card" || form.paymentType === "Debit Card") && (
          <>
            <div>
              <label>Card Number *</label>
              <input type="text" name="cardNumber" maxLength={16} value={form.cardNumber} onChange={handleInputChange} required style={{ width: "100%", padding: "8px" }} />
            </div>
            <div>
              <label>Name on Card *</label>
              <input type="text" name="cardName" value={form.cardName} onChange={handleInputChange} required style={{ width: "100%", padding: "8px" }} />
            </div>
            <div>
              <label>Expiry Date *</label>
              <input type="month" name="expiry" value={form.expiry} onChange={handleInputChange} required style={{ width: "100%", padding: "8px" }} />
            </div>
            <div>
              <label>CVV *</label>
              <input type="password" name="cvv" maxLength={4} value={form.cvv} onChange={handleInputChange} required style={{ width: "100%", padding: "8px" }} />
            </div>
          </>
        )}
        {form.paymentType === "UPI" && (
          <div>
            <label>UPI ID *</label>
            <input type="text" name="upiId" value={form.upiId} onChange={handleInputChange} required style={{ width: "100%", padding: "8px" }} />
          </div>
        )}
        <button type="submit" style={{ background: "#005f73", color: "white", padding: "10px 24px", borderRadius: "7px", border: "none", fontSize: "1em", cursor: "pointer", marginTop: "8px" }}>Submit</button>
        {message && <p style={{ color: "red" }}>{message}</p>}
      </form>
    </div>
  );
};

export default PolicyForm;
