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

export const getTutors = (category, subjects) => async (dispatch) => {
  try {
    const res = await axios.get('/api/profile');
    const filteredTutors = [];

    const tutorTeachesCategory = (tutor) => {
      let result = false;

      subjects.forEach((subject) => {
        if (tutor.subjects.indexOf(subject) !== -1) {
          result = true;
        }
      });

      return result && filteredTutors.push(tutor);
    };

    res.data.forEach((item) => tutorTeachesCategory(item));

    dispatch(clearTutors());
    dispatch(successTutors(filteredTutors));
  } catch (error) {
    console.error(error.message);
    dispatch(failTutors());
  }
};

export default tutorsSlice.reducer;
