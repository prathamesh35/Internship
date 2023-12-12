import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRegistration = () => {
    // Save registration information to localStorage
    saveRegistrationInfo(formData);

    alert('Registration successful!');

    // You can redirect or perform any other actions here
  };

  const saveRegistrationInfo = (userInfo) => {
    // Retrieve existing data from localStorage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem('registrationData')) || [];

    // Add new user information to the array
    existingData.push(userInfo);

    // Save the updated array back to localStorage
    localStorage.setItem('registrationData', JSON.stringify(existingData));
  };

  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        required
      />

      <button type="button" onClick={handleRegistration}>
        Register
      </button>
    </div>
  );
};

export default RegistrationForm;
