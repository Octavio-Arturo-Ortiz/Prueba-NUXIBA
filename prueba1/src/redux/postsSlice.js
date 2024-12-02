import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (userId) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  const postsWithComments = await Promise.all(
    response.data.map(async (post) => {
      const comments = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
      return { ...post, comments: comments.data };
    })
  );
  return postsWithComments;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { data: [], loading: false, error: null },
  reducers: {
    clearPosts: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearPosts } = postsSlice.actions;
export default postsSlice.reducer;