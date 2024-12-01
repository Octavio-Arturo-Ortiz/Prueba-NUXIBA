import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, selectUser } from '../redux/usersSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const { data: users, loading } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => dispatch(selectUser(user))}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;