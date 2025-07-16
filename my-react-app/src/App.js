import React, { useState } from 'react';
import InputMask from 'react-input-mask';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      <h2>Join the Air Fryer Revolution</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input name="firstName" type="text" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input name="lastName" type="text" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input name="phone" type="tel" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input name="email" type="email" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Guess the Air Fryer's Cost ($)</label>
          <input name="guess" type="number" min="0" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Spidr Secret 16-digit PIN</label>
          <InputMask
            mask="9999-9999-9999-9999"
            maskChar=""
            name="pin"
            onChange={handleChange}
            required
          >
            {(inputProps) => <input {...inputProps} type="text" />}
          </InputMask>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
