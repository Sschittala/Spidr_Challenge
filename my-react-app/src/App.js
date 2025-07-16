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

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 10) value = value.slice(0, 10); 
    
    // Format with dashes: XXX-XXX-XXXX
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
      if (i === 3 || i === 6) {
        formatted += '-';
      }
      formatted += value[i];
    }
    
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handlePinChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) value = value.slice(0, 16); 
    
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
    
    if (formData.phone.replace(/-/g, '').length !== 10) {
      alert('Phone number must be exactly 10 digits');
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
        <h2>Become an Air Fryer insider</h2>
        
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
              onChange={handlePhoneChange}
              placeholder="123-456-7890"
              maxLength="12"
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