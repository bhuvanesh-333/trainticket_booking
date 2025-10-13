import React, { useState } from 'react';

function TodoApp() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([]);
  // State to hold the current input value
  const [taskInput, setTaskInput] = useState('');

  // Handle input change event
  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  // Handle adding a new task
  const addTask = () => {
    if (taskInput.trim() !== '') {
      // Create a new task object
      const newTask = {
        id: Date.now(), // unique id
        text: taskInput,
        completed: false,
      };
      // Add new task to tasks array
      setTasks([...tasks, newTask]);
      // Clear input field
      setTaskInput('');
    }
  };

  // Handle toggling task completion
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  // Handle deleting a task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  // Handle pressing Enter key in input box to add task
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', fontFamily: 'Arial' }}>
      <h2>React To-Do List</h2>
      <div style={{ display: 'flex', marginBottom: '1rem' }}>
        <input
          type="text"
          value={taskInput}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter a new task"
          style={{ flexGrow: 1, padding: '8px', fontSize: '16px' }}
        />
        <button onClick={addTask} style={{ padding: '8px 12px', marginLeft: '8px' }}>
          Add
        </button>
      </div>

      <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              padding: '8px',
              marginBottom: '4px',
              display: 'flex',
              justifyContent: 'space-between',
              backgroundColor: '#f0f0f0',
              borderRadius: '4px',
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? 'gray' : 'black',
              cursor: 'pointer',
            }}
          >
            <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
            <button
              onClick={() => deleteTask(task.id)}
              style={{
                backgroundColor: '#ff4d4d',
                border: 'none',
                color: 'white',
                borderRadius: '4px',
                cursor: 'pointer',
                padding: '0 8px',
              }}
              aria-label="Delete task"
            >
              X
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && <p>No tasks added yet.</p>}
    </div>
  );
}

export default TodoApp;




// import React, { useState } from 'react';

// function InsuranceForm() {
//   // State to hold the form data
//   const [formData, setFormData] = useState({
//     name: '',
//     age: '',
//     policyType: 'Health',
//   });

//   // State to track if the form is submitted
//   const [submitted, setSubmitted] = useState(false);

//   // Update form state on input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Basic validation
//     if (formData.name.trim() === '' || formData.age.trim() === '') {
//       alert('Please fill in all fields');
//       return;
//     }
//     setSubmitted(true);
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto', fontFamily: 'Arial' }}>
//       <h2>Insurance Policy Form</h2>

//       {!submitted ? (
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: '12px' }}>
//             <label>
//               Name:
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 style={{ width: '100%', padding: '8px', marginTop: '4px' }}
//               />
//             </label>
//           </div>
//           <div style={{ marginBottom: '12px' }}>
//             <label>
//               Age:
//               <input
//                 type="number"
//                 name="age"
//                 value={formData.age}
//                 onChange={handleChange}
//                 style={{ width: '100%', padding: '8px', marginTop: '4px' }}
//                 min="0"
//               />
//             </label>
//           </div>
//           <div style={{ marginBottom: '12px' }}>
//             <label>
//               Policy Type:
//               <select
//                 name="policyType"
//                 value={formData.policyType}
//                 onChange={handleChange}
//                 style={{ width: '100%', padding: '8px', marginTop: '4px' }}
//               >
//                 <option value="Health">Health</option>
//                 <option value="Life">Life</option>
//                 <option value="Car">Car</option>
//                 <option value="Home">Home</option>
//               </select>
//             </label>
//           </div>
//           <button type="submit" style={{ padding: '10px 20px' }}>Submit</button>
//         </form>
//       ) : (
//         <div>
//           <h3>Policy Summary</h3>
//           <p><strong>Name:</strong> {formData.name}</p>
//           <p><strong>Age:</strong> {formData.age}</p>
//           <p><strong>Policy Type:</strong> {formData.policyType}</p>
//           <button onClick={() => setSubmitted(false)} style={{ padding: '8px 16px', marginTop: '12px' }}>
//             Edit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default InsuranceForm;
