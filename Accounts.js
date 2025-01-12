import React from 'react';

export default function Account() {
  const username = localStorage.getItem('username');
  const email = localStorage.getItem('email');

  return (
    <div className="account-container">
      <h2>Welcome, {username}!</h2>
      <p>Email: {email}</p>
      {/* Add more account-related information here */}
    </div>
  );
}
