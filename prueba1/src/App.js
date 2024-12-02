import React from 'react';
import UsersList from './components/UsersList';
import UserDetails from './components/UserDetails';
import Posts from './components/Post';
import Todos from './components/Todos';

const App = () => {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Nuxiba Prueba Técnica</h1>
      <UsersList />
      <UserDetails />
      <Todos />
      <Posts />
    </div>
  );
};

export default App;