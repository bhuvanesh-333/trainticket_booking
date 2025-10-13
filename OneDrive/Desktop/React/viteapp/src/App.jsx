
// function App() {
  
//   return (
//     <>
//       <h1>welcome to bhuvi world</h1>
//     </>
//   )
// }

// export default App


// function App(){
// return  <Greeting name ="bhuvi"/>;
// }
// export default App
// function Greeting({ name }){
//   return <h1>hello, {name}</h1>;
// }

// import React, { useState } from 'react';
// function counter(){
//   const [count,setcount] = useState(0);

// return(
//   <div>
//     <p>count: {count}</p>
//     <button onclick={() => setcount(count+1)}>increase</button>
//   </div>
// );
// }

// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }

// export default Counter;

// function ClickHandler(){
//   const handleClick =() =>{
//     alert("button clicked")
//   };
//   return <button onClick={handleClick}>click me </button>
// }
// export default ClickHandler;



// import React,{ useState } from "react";

// function logincontrol(){
//   const[isLoggedIn,setIsLoggedIn] =useState(false);

//   const handleLoginClick = () =>setIsLoggedIn(true);
//   const handleLogoutClick = () =>setIsLoggedIn(false);

//   return(
//     <div>
//       {
//         isLoggedIn   ? (
//       <div>
//         <h2>welcome back</h2>
//         <button onClick={handleLogoutClick}> logut</button>
//         </div>
//         ):
//         (
//           <div>
//             <h2>please login in</h2>
//             <button onClick={handleLoginClick}>login</button>
//           </div>
//         )
//       }
//     </div>
//   )
// }
// export default logincontrol


// import React,{ useState } from "react";

// function MultiInputForm(){
//  const [FormData,setFormData]=useState({
//   name:"",
//   email:"",
//   password:"",
//   gender:"",


// });
// return(
//   <form onSubmit={handleSubmit}>
//     <h2>registration form</h2>
//     <input 
//     type="text"
//     name="name"
//     placeholder="fullname"
//     value={FormData.email} 
//     onChange={handleChange}
//     /> <br/>



// <button type="submit">register</button>
//   </form>
//   )}
//   export default MultiInputForm;


// import React, { useState } from "react";

// function MultiInputForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     gender: "",
//   });

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     // Form submission logic here
//     console.log(formData);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>registration form</h2>
//       <input
//         type="text"
//         name="name"
//         placeholder="fullname"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="email"
//         name="email"
//         placeholder="email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <br />
//       <input
//         type="password"
//         name="password"
//         placeholder="password"
//         value={formData.password}
//         onChange={handleChange}
//       />
//       <br />
//       <select
//         name="gender"
//         value={formData.gender}
//         onChange={handleChange}
//       >
//         <option value="">Select gender</option>
//         <option value="male">Male</option>
//         <option value="female">Female</option>
//         <option value="other">Other</option>
//       </select>
//       <br />
//       <button type="submit">register</button>
//     </form>
//   );
// }

// export default MultiInputForm;


// import React, { useState } from "react";

// export default function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert(`Welcome ${formData.name}! Your email is ${formData.email}`);
//   };

//   return (
//     <div>
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Name */}
//         <div>
//           <label>Name: </label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Email */}
//         <div>
//           <label>Email: </label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {/* Password */}
//         <div>
//           <label>Password: </label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }





// return(
//   <div>
//   <h2>fetched uders</h2>
//   <ul>
//     {
//       users.map(users =>)
//     }
//   </ul>
//   </div>
// )

// import React, { useState, useEffect } from 'react';

// function UserFetchingComponent() {
//   const [users, setUsers] = useState([]); // State to store fetched users
//   const [loading, setLoading] = useState(true); // State to track loading status
//   const [error, setError] = useState(null); // State to track errors

//   useEffect(() => {
//     // Fetching data inside useEffect
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const result = await response.json();
//         setUsers(result); // Store the fetched users
//       } catch (err) {
//         setError('Error fetching users'); // Handle any errors
//       } finally {
//         setLoading(false); // Set loading to false once fetching is complete
//       }
//     };

//     fetchUsers(); // Call the fetch function

//   }, []); // Empty dependency array: run only once when the component mounts

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h2>Fetched Users:</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>
//             <h3>{user.name}</h3>
//             <p>Email: {user.email}</p>
//             <p>Phone: {user.phone}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserFetchingComponent;





// // // gemini
// import React, { useState, useEffect } from "react";

// function UserFetchingComponent() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Define the async function inside useEffect
//     const fetchUsers = async () => {
//       try {
//         // CORRECTED: Fixed the typo in the URL and checked for response status
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const result = await response.json();
//         setUsers(result);
//         setError(null); // Clear any previous error
//       } catch (err) {
//         // The catch block handles network errors or errors thrown above
//         console.error("Error fetching data:", err);
//         setError('Failed to fetch users. Please check the network or API.');
//       } finally {
//         // This runs regardless of success or failure
//         setLoading(false);
//       }
//     };
    
//     // Call the function to initiate the fetch
//     fetchUsers();
//   }, []); // The empty dependency array [] ensures this runs only once after the initial render

//   // --- Conditional Renders for State Handling ---

//   // CORRECTED: The return statement for the loading state
//   if (loading) {
//     return <h2>Loading users...</h2>;
//   }

//   // Handle the error state
//   if (error) {
//     return <h2>Error: {error}</h2>;
//   }

//   // --- Main Render (Success) ---

//   return (
//     <div>
//       <h2>Fetched Users</h2>
//       <ul>
//         {
//           // CORRECTED: The map function syntax
//           users.map(user => (
//             // Key prop is required for list items
//             <li key={user.id}>
//               <strong>{user.name}</strong> ({user.email})
//             </li>
//           ))
//         }
//       </ul>
//     </div>
//   );
// }

// export default UserFetchingComponent;