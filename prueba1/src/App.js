import React from 'react';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Nuxiba Prueba Técnica</h1>
      <UsersList />
      <UserDetails />
    </div>
  );
};

export default App;