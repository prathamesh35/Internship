// User.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Styles/User.css';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({
    name: '',
    email: '',
    contact: '',
    img: '', // Add img property to updatedUser
  });

  useEffect(() => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched user data:', data);
        setUser(data);
        // Set the img property in updatedUser when fetching user data
        setUpdatedUser((prevUpdatedUser) => ({ ...prevUpdatedUser, img: data.img }));
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, [id]);

  const handleUpdateClick = () => {
    setIsEditing(true);
    setUpdatedUser({
      ...user,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Updated user data:', updatedUser);

    // Update the user state with the new data
    setUser(updatedUser);

    // Disable editing mode
    setIsEditing(false);
  };

  return (
    <div className="user-container">
      {user ? (
        <div>
          <img className="user-image" src={isEditing ? updatedUser.img : user.img} alt={user.name} />
          {isEditing ? (
            <form onSubmit={handleFormSubmit}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={updatedUser.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={updatedUser.email}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Contact:
                <input
                  type="text"
                  name="contact"
                  value={updatedUser.contact}
                  onChange={handleInputChange}
                />
              </label>
              <button className='btn btn-success' type="submit">Save Changes</button>
            </form>
          ) : (
            <div>
              <h1 className="user-details">{user.name}</h1>
              <p className="user-email">{user.email}</p>
              <p className="user-email">{user.contact}</p>
            </div>
          )}
        </div>
      ) : (
        <p className="user-not-found">User not found.</p>
      )}

      {!isEditing && (
        <button className='btn btn-primary' onClick={handleUpdateClick}>Update</button>
      )}
    </div>
  );
};

export default User;
