import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import RegistrationForm from './components/RegistrationForm';
import './App.css';

import RohitPic from './Images/Rohit_pic.jpg';
import ViratPic from './Images/Virat_pic.jpg';
import DhoniPic from './Images/Dhoni_pic.jpg';
import SachinPic from './Images/Sachin_pic.jpg';


function App() {
  const users = [
    { id: 'rohit', name: 'Rohit Sharma', email: 'rohit45@email.com', contact: 7558515246, img: RohitPic },
    { id: 'virat', name: 'Virat Kohli', email: 'virat18@email.com', contact: 7558515247, img: ViratPic },
    { id: 'dhoni', name: 'M S Dhoni', email: 'dhoni7@email.com', contact: 7558515248, img: DhoniPic },
    { id: 'sachin', name: 'Sachin Tendulkar', email: 'sachin10@email.com', contact: 7558515249, img: SachinPic }
  ];

  const [showRegistration, setShowRegistration] = useState(true);

  const handleCloseRegistration = () => {
    setShowRegistration(false);
  };
  
  return (
<>
<div className="app-container">
      {showRegistration && (
        <div className="registration-modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseRegistration}>
              &times;
            </span>
            <RegistrationForm />
          </div>
        </div>
      )}
          <Router>
    <Navbar users={users} title="PK" aboutText="About us" />
    <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm heading="Enter your text below" />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/users/:id" element={<User users={users} />} />
      </Routes>
    </div>
  </Router>

    </div>

  </>
  );
}

export default App;
