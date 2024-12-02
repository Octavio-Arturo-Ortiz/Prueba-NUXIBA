import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, clearPosts } from '../redux/postsSlice';
import { fetchTodos, clearTodos } from '../redux/todosSlice';

const UserDetails = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);

  if (!selectedUser) {
    return <p className="text-muted text-center">Selecciona un usuario para ver los detalles.</p>;
  }

  const handleFetchPosts = () => {
    dispatch(clearTodos()); // Limpiar las tareas al cargar publicaciones
    dispatch(fetchPosts(selectedUser.id));
  };

  const handleFetchTodos = () => {
    dispatch(clearPosts()); // Limpiar las publicaciones al cargar tareas
    dispatch(fetchTodos(selectedUser.id));
  };

  return (
    <div className="d-flex justify-content-center my-5">
      <div className="card shadow" style={{ width: '500px', padding: '20px' }}>
        <h2 className="text-center mb-4">Detalles del Usuario</h2>
        <p><strong>Nombre:</strong> {selectedUser.name}</p>
        <p><strong>Usuario:</strong> {selectedUser.username}</p>
        <p><strong>Email:</strong> {selectedUser.email}</p>

        <div className="d-flex justify-content-around mt-4">
          <button
            className="btn btn-primary"
            onClick={handleFetchPosts}
          >
            Ver Publicaciones
          </button>
          <button
            className="btn btn-info"
            onClick={handleFetchTodos}
          >
            Ver Tareas
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;