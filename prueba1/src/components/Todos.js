import React from 'react';
import { useSelector } from 'react-redux';
import AddTodoForm from './AddTodoForm';

const Todos = () => {
  const { data: todos, loading, error } = useSelector((state) => state.todos);

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p>Error al cargar tareas: {error}</p>;
  if (todos.length === 0) return <p></p>;

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
      {/* Formulario para agregar tareas */}
      <AddTodoForm />
    </div>
  );
};

export default Todos;