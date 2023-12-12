import React from 'react';
import { useParams } from 'react-router-dom';
import './Styles/User.css';

const User = ({ users }) => {
  const { id } = useParams();
  console.log('User Component : id:', id);
  console.log('User Component : users:', users);

  const selectedUser = users.find((user) => user.id === id);
  console.log('User Component : selectedUser:', selectedUser);

  return (
    <div className="user-container">
      {selectedUser ? (
        <div>
          <img className="user-image" src={selectedUser.img} alt={selectedUser.name} />
          <h1 className="user-details">{selectedUser.name}</h1>
          <p className="user-email">{selectedUser.email}</p>
          <p className="user-email">{selectedUser.contact}</p>
        </div>
      ) : (
        <p className="user-not-found">User not found.</p>
      )}
    </div>
  );
};

export default User;
