import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const blogSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    loading: true,
  },
  reducers: {
    getBlogPostsSuccess: (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
    },
    clearBlogPosts: (state) => {
      state.blogs = [];
    },
  },
});

const { getBlogPostsSuccess, clearBlogPosts } = blogSlice.actions;

export const getBlogPosts = (path) => async (dispatch) => {
  try {
    dispatch(clearBlogPosts());
    const res = await axios.get('/api/blog', { path });

    dispatch(getBlogPostsSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
};

export default blogSlice.reducer;
