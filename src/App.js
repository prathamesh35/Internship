// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import './App.css';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  return (
    <>
      <Router>
        <Navbar users={users} title="PK" aboutText="About us" />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={<TextForm heading="Enter your text below" />}
            />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="/users/:id" element={<User />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
