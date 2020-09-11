import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from '../../components/util/setAuthToken';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    loading: true,
  },
  reducers: {
    getProfileSuccess: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
    },
    createProfileSuccess: (state, action) => {
      state.profile = action.payload;
      state.loading = false;
    },
    clearProfile: (state) => {
      state.profile = null;
      state.loading = false;
    },
    updateProfileSuccess: (state, action) => {
      state.profile = action.payload;
      state.laoding = false;
    },
  },
});

export const {
  getProfileSuccess,
  createProfileSuccess,
  clearProfile,
  updateProfileSuccess,
} = profileSlice.actions;

export const getCurrentProfile = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(`/api/profile/me`);

    dispatch(getProfileSuccess(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const createProfile = (body) => async (dispatch) => {
  console.log(body);
  const res = await axios.post('/api/profile', JSON.stringify(body), {
    headers: { 'Content-Type': 'application/json' },
  });

  console.log(res.data);
  dispatch(createProfileSuccess(res.data));
};

export const updateProfile = (body, history) => async (dispatch) => {
  try {
    const res = await axios.put('/api/profile', JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });

    dispatch(updateProfileSuccess(res.data));
    history.push('/profile');
  } catch (error) {
    console.log(error);
  }
};

export default profileSlice.reducer;
