import React from 'react';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';
import Posts from './components/Post';
import Todos from './components/Todos';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Nuxiba Prueba Técnica</h1>
      <UsersList />
      <UserDetails />
      <Posts />
      <Todos />
    </div>
  );
};

export default App;