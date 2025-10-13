




// import React from "react";
// import { useNavigate } from "react-router-dom";
// import InsuranceCardGrid from "./InsuranceCardGrid";

// const policies = [
//   {
//     id: 1,
//     name: "Life Secure Plan",
//     subtitle: "Long-term life insurance",
//     price: 12000,
//     img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 2,
//     name: "Health Shield",
//     subtitle: "Comprehensive health coverage",
//     price: 8000,
//     img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 3,
//     name: "Car Protect Plus",
//     subtitle: "Advanced auto insurance",
//     price: 7500,
//     img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 4,
//     name: "Two Wheeler Cover",
//     subtitle: "Affordable bike insurance",
//     price: 2200,
//     img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 5,
//     name: "Personal Accident Guard",
//     subtitle: "Accident emergency cover",
//     price: 3100,
//     img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 6,
//     name: "Travel Globe",
//     subtitle: "Global travel insurance",
//     price: 3500,
//     img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 7,
//     name: "Home Safety Plan",
//     subtitle: "Home and property coverage",
//     price: 9500,
//     img: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 8,
//     name: "Critical Illness Care",
//     subtitle: "Severe illness coverage",
//     price: 11000,
//     img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 9,
//     name: "Family Health Care",
//     subtitle: "Family health security",
//     price: 9800,
//     img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 10,
//     name: "Senior Citizen Health",
//     subtitle: "Senior medical expenses",
//     price: 12500,
//     img: "https://images.unsplash.com/photo-1468519411786-d0374bb017b1?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 11,
//     name: "Term Life Protect",
//     subtitle: "Flexible term plans",
//     price: 14200,
//     img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 12,
//     name: "Retirement Pension Plan",
//     subtitle: "Retirement plans",
//     price: 9200,
//     img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3027?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 13,
//     name: "Child Education Secure",
//     subtitle: "Secure your child's future",
//     price: 5200,
//     img: "https://images.unsplash.com/photo-1424746219973-8fe3bd07d8e3?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 14,
//     name: "Cancer Care Plan",
//     subtitle: "Cancer treatment cover",
//     price: 13000,
//     img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 15,
//     name: "Property Insurance",
//     subtitle: "Protect your property assets",
//     price: 10500,
//     img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 16,
//     name: "Cashless Mediclaim",
//     subtitle: "Hassle free mediclaim",
//     price: 9400,
//     img: "https://images.unsplash.com/photo-1465101178521-c1a9136a8595?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 17,
//     name: "Technology Gadget Cover",
//     subtitle: "Covers your gadgets",
//     price: 2100,
//     img: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 18,
//     name: "Professional Indemnity",
//     subtitle: "For professionals",
//     price: 6700,
//     img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 19,
//     name: "Fire Safety Cover",
//     subtitle: "Fire and damage protection",
//     price: 3200,
//     img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 20,
//     name: "Marine Insurance",
//     subtitle: "Marine asset insurance",
//     price: 9100,
//     img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 21,
//     name: "Loan Protection",
//     subtitle: "Loan repayment cover",
//     price: 6600,
//     img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 22,
//     name: "Wedding Insurance",
//     subtitle: "Wedding event insurance",
//     price: 4300,
//     img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 23,
//     name: "Pet Health Insurance",
//     subtitle: "Coverage for your pets",
//     price: 3500,
//     img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 24,
//     name: "Income Protection",
//     subtitle: "Income loss cover",
//     price: 7800,
//     img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=450&q=80"
//   },
//   {
//     id: 25,
//     name: "Group Health Plan",
//     subtitle: "Health insurance for groups",
//     price: 10800,
//     img: "https://images.unsplash.com/photo-1515168833906-d2a3b82b3027?auto=format&fit=crop&w=450&q=80"
//   }
//   // ... include other policies as previously defined ...
// ];

// function slugify(name) {
//   return name.toLowerCase().replace(/\s+/g, "-");
// }

// const Home = ({ userName, onLogout, purchased, setPurchased }) => {
//   const navigate = useNavigate();

//   const handleBuy = (policy) => {
//     navigate(`/policyform/${slugify(policy.name)}`);
//   };

//   const handleDelete = (policyId) => {
//     // Remove from purchased list in state
//     const updatedPurchased = purchased.filter(id => id !== policyId);
//     setPurchased(updatedPurchased);

//     // Remove from localStorage
//     const saved = JSON.parse(localStorage.getItem("purchasedPolicies")) || {};
//     delete saved[policyId];
//     localStorage.setItem("purchasedPolicies", JSON.stringify(saved));
//   };

//   return (
//     <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px" }}>
//       <div style={{ marginBottom: "24px", fontSize: "1.15em", fontWeight: "600", color: "#0275d8" }}>
//         Hello, <strong>{userName}</strong>! You have purchased <span style={{ color: "#5cb85c" }}>{purchased.length}</span> {purchased.length === 1 ? "policy" : "policies"}.
//         <button
//           onClick={onLogout}
//           style={{
//             marginLeft: "20px",
//             padding: "8px 16px",
//             backgroundColor: "#d9534f",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             fontWeight: 600,
//             cursor: "pointer"
//           }}
//         >
//           Logout
//         </button>
//       </div>

//       {/* Purchased policies with delete option */}
//       <div style={{ marginBottom: "30px" }}>
//         <h3>Your Purchased Policies</h3>
//         {purchased.length === 0 && <p>No policies purchased yet.</p>}
//         <ul>
//           {purchased.map(id => {
//             const policy = policies.find(p => p.id === id);
//             if (!policy) return null;
//             return (
//               <li key={id} style={{ marginBottom: "10px" }}>
//                 <strong>{policy.name}</strong> - ₹{policy.price.toLocaleString()}
//                 <button
//                   style={{
//                     marginLeft: "12px",
//                     backgroundColor: "#c9302c",
//                     color: "#fff",
//                     border: "none",
//                     borderRadius: "5px",
//                     cursor: "pointer",
//                     padding: "4px 10px"
//                   }}
//                   onClick={() => handleDelete(id)}
//                 >
//                   Delete
//                 </button>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       {/* Insurance cards grid for buying */}
//       <InsuranceCardGrid policies={policies} onBuy={handleBuy} />
//     </main>
//   );
// };

// export default Home;





import React from "react";
import { useNavigate } from "react-router-dom";
import InsuranceCardGrid from "./InsuranceCardGrid";

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
  // ...add all other policies with same structure...
];

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

const Home = ({ userName, onLogout, purchased, setPurchased }) => {
  const navigate = useNavigate();

  const handleBuy = (policy) => {
    navigate(`/policyform/${slugify(policy.name)}`);
  };

  const handleDelete = (policyId) => {
    const updatedPurchased = purchased.filter(id => id !== policyId);
    setPurchased(updatedPurchased);

    const saved = JSON.parse(localStorage.getItem("purchasedPolicies")) || {};
    delete saved[policyId];
    localStorage.setItem("purchasedPolicies", JSON.stringify(saved));
  };

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "20px" }}>
      <div style={{ marginBottom: "24px", fontSize: "1.15em", fontWeight: "600", color: "#0275d8" }}>
        Hello, <strong>{userName}</strong>! You have purchased <span style={{ color: "#5cb85c" }}>{purchased.length}</span> {purchased.length === 1 ? "policy" : "policies"}.
        <button
          onClick={onLogout}
          style={{
            marginLeft: "20px",
            padding: "8px 16px",
            backgroundColor: "#d9534f",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h3>Your Purchased Policies</h3>
        {purchased.length === 0 && <p>No policies purchased yet.</p>}
        <ul>
          {purchased.map(id => {
            const policy = policies.find(p => p.id === id);
            if (!policy) return null;
            return (
              <li key={id} style={{ marginBottom: "10px" }}>
                <strong>{policy.name}</strong> - ₹{policy.price.toLocaleString()}
                <button
                  style={{
                    marginLeft: "12px",
                    backgroundColor: "#c9302c",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    padding: "4px 10px"
                  }}
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <InsuranceCardGrid policies={policies} onBuy={handleBuy} />
    </main>
  );
};

export default Home;
