import React from 'react';
import { useSelector } from 'react-redux';

const UserDetails = () => {
  const selectedUser = useSelector((state) => state.users.selectedUser);

  if (!selectedUser) return <p>Select a user to see details.</p>;

  return (
    <div>
      <h2>User Details</h2>
      <p><strong>Name:</strong> {selectedUser.name}</p>
      <p><strong>Email:</strong> {selectedUser.email}</p>
    </div>
  );
};

export default UserDetails;