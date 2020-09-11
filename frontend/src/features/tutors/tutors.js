import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const tutorsSlice = createSlice({
  name: 'tutors',
  initialState: {
    tutors: [],
    loading: true,
  },
  reducers: {
    success: (state, action) => {
      action.payload.forEach((tutor) => state.tutors.push(tutor));
      state.loading = false;
    },
    fail: (state, action) => {
      state.loading = false;
    },
  },
});

const { success, fail } = tutorsSlice.actions;

export const getTutors = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile');
    dispatch(success(res.data));
  } catch (error) {
    console.error(error.message);
    dispatch(fail());
  }
};

export default tutorsSlice.reducer;
