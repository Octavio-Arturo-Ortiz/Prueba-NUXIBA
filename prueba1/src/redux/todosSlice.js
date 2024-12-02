import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Acción para obtener las tareas del usuario
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (userId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  return response.data;
});

// Acción para agregar una nueva tarea
export const addTodo = createAsyncThunk('todos/addTodo', async ({ userId, title, completed }) => {
  const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
    userId,
    title,
    completed,
  });
  return response.data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: { data: [], loading: false, error: null },
  reducers: {
    clearTodos: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        // Ordenar las tareas por ID de mayor a menor
        state.data = action.payload.sort((a, b) => b.id - a.id);
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        // Agregar la nueva tarea al inicio y reordenar por ID
        state.data.unshift(action.payload);
        state.data.sort((a, b) => b.id - a.id);
      });
  },
});

export const { clearTodos } = todosSlice.actions;
export default todosSlice.reducer;