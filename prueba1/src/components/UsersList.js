import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, selectUser } from '../redux/usersSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const { data: users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div className="d-flex justify-content-center">
    <div className="table-responsive" style={{ minWidth: '1200px' }}>
      <h2 className="text-center mt-4">Lista de Usuarios</h2>
      <table className="table table-striped table-hover mt-3 text-center ">
        <thead className="table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => dispatch(selectUser(user))}
                >
                  Ver Detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
};

export default UsersList;