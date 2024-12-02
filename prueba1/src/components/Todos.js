import React from 'react';
import { useSelector } from 'react-redux';
import AddTodoForm from './AddTodoForm';

const Todos = () => {
  const { data: todos, loading, error } = useSelector((state) => state.todos);

  if (loading) return <p className="text-primary text-center">Cargando tareas...</p>;
  if (error) return <p className="text-danger text-center">Error al cargar tareas: {error}</p>;
  if (todos.length === 0) return null;

  return (
    <div className="d-flex justify-content-center">
      <div className="card shadow" style={{ width: '500px', padding: '20px' }}>
        <h2 className="text-center mb-4">Lista de Tareas</h2>
        <ul className="list-group mb-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                todo.completed ? 'list-group-item-success' : ''
              }`}
            >
              <span>{todo.title}</span>
              <input
                type="checkbox"
                className="form-check-input"
                checked={todo.completed}
                readOnly
              />
            </li>
          ))}
        </ul>
        <AddTodoForm />
      </div>
    </div>
  );
};

export default Todos;