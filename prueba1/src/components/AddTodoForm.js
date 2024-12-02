import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../redux/todosSlice';

const AddTodoForm = () => {
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const selectedUser = useSelector((state) => state.users.selectedUser);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedUser) {
      alert('Por favor selecciona un usuario primero.');
      return;
    }

    if (title.trim() === '') {
      alert('El título no puede estar vacío.');
      return;
    }

    dispatch(addTodo({ userId: selectedUser.id, title, completed }));
    
    setTitle('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 p-3 border rounded shadow-sm">
  <h3 className="text-center mb-4">Agregar Nueva Tarea</h3>
  <div className="mb-3">
    <label className="form-label">Título:</label>
    <input
      type="text"
      className="form-control"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Escribe el título de la tarea"
    />
  </div>
  <div className="form-check mb-3">
    <input
      type="checkbox"
      className="form-check-input"
      id="completedCheckbox"
      checked={completed}
      onChange={(e) => setCompleted(e.target.checked)}
    />
    <label className="form-check-label" htmlFor="completedCheckbox">
      ¿Completada?
    </label>
  </div>
  <button type="submit" className="btn btn-success w-100">
    Guardar Tarea
  </button>
</form>
  );
};

export default AddTodoForm;