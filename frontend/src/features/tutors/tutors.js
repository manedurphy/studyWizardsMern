import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const tutorsSlice = createSlice({
  name: 'tutors',
  initialState: {
    tutors: [],
    loading: true,
  },
  reducers: {
    successTutors: (state, action) => {
      action.payload.forEach((tutor) => state.tutors.push(tutor));
      state.loading = false;
    },
    failTutors: (state, action) => {
      state.loading = false;
    },
    clearTutors: (state) => {
      state.tutors = [];
    },
  },
});

const { successTutors, failTutors, clearTutors } = tutorsSlice.actions;

export const getTutors = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile');
    dispatch(clearTutors());
    dispatch(successTutors(res.data));
  } catch (error) {
    console.error(error.message);
    dispatch(failTutors());
  }
};

export default tutorsSlice.reducer;
