// import React, { useState } from 'react';
// import InputMask from 'react-input-mask';
// import './App.css';

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     guess: '',
//     pin: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//   };

//   return (
//     <div className="form-container">
//       <h2>Join the Air Fryer Revolution</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>First Name</label>
//           <input name="firstName" type="text" onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label>Last Name</label>
//           <input name="lastName" type="text" onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label>Phone Number</label>
//           <input name="phone" type="tel" onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label>Email Address</label>
//           <input name="email" type="email" onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label>Guess the Air Fryer's Cost ($)</label>
//           <input name="guess" type="number" min="0" onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label>Spidr Secret 16-digit PIN</label>
//           <InputMask
//             mask="9999-9999-9999-9999"
//             maskChar=""
//             name="pin"
//             onChange={handleChange}
//             required
//           >
//             {(inputProps) => <input {...inputProps} type="text" />}
//           </InputMask>
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    guess: '',
    pin: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePinChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 16) value = value.slice(0, 16); // Limit to 16 digits
    
    // Format with dashes
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += '-';
      }
      formatted += value[i];
    }
    
    setFormData(prev => ({ ...prev, pin: formatted }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email || !formData.guess || !formData.pin) {
      alert('Please fill in all fields');
      return;
    }
    
    if (formData.pin.replace(/-/g, '').length !== 16) {
      alert('PIN must be exactly 16 digits');
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('Form submitted successfully! Check the console for data.');
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>Join the Air Fryer Revolution</h2>
        
        <div className="form">
          <div className="form-group">
            <label>First Name</label>
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Guess the Air Fryer's Cost ($)</label>
            <input
              name="guess"
              type="number"
              min="0"
              step="0.01"
              value={formData.guess}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Spidr Secret 16-digit PIN</label>
            <input
              name="pin"
              type="text"
              value={formData.pin}
              onChange={handlePinChange}
              placeholder="####-####-####-####"
              required
              maxLength="19"
              className="pin-input"
            />
          </div>

          <button onClick={handleSubmit} className="submit-btn">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;