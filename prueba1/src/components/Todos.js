import React from 'react';
import { useSelector } from 'react-redux';

const Todos = () => {
  const { data: todos, loading, error } = useSelector((state) => state.todos);

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p>Error al cargar tareas: {error}</p>;
  if (todos.length === 0) return null;

  return (
    <div>
      <h2>Tareas</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly /> {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;