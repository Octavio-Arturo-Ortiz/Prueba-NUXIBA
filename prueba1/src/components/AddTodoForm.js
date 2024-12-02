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

    // Enviar la nueva tarea al backend
    dispatch(addTodo({ userId: selectedUser.id, title, completed }));

    // Limpiar el formulario
    setTitle('');
    setCompleted(false);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <h3>Agregar Nueva Tarea</h3>
      <div>
        <label>Título: </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe el título de la tarea"
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          ¿Completada?
        </label>
      </div>
      <button type="submit">Guardar Tarea</button>
    </form>
  );
};

export default AddTodoForm;