import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, clearPosts } from '../redux/postsSlice';
import { fetchTodos, clearTodos } from '../redux/todosSlice';

const UserDetails = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);

  if (!selectedUser) return <p>Selecciona un usuario para ver los detalles.</p>;

  const handleFetchPosts = () => {
    dispatch(clearTodos()); // Limpiar las tareas al cargar publicaciones
    dispatch(fetchPosts(selectedUser.id));
  };

  const handleFetchTodos = () => {
    dispatch(clearPosts()); // Limpiar las publicaciones al cargar tareas
    dispatch(fetchTodos(selectedUser.id));
  };

  return (
    <div>
      <h2>Detalles del Usuario</h2>
      <p><strong>Nombre:</strong> {selectedUser.name}</p>
      <p><strong>Usuario:</strong> {selectedUser.username}</p>
      <p><strong>Email:</strong> {selectedUser.email}</p>

      <div style={{ marginTop: '20px' }}>
        <button onClick={handleFetchPosts}>Ver Publicaciones</button>
        <button onClick={handleFetchTodos}>Ver Tareas</button>
      </div>
    </div>
  );
};

export default UserDetails;