import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import setAuthToken from '../../components/util/setAuthToken';
import { v4 as uuid } from 'uuid';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    profile: null,
    loading: true,
    errors: [],
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
    addError: (state, action) => {
      state.errors.push(action.payload);
    },
    removeError: (state, action) => {
      const removeIndex = state.errors.findIndex(
        (err) => err.id === action.payload
      );
      state.errors.splice(removeIndex, 1);
    },
  },
});

export const {
  getProfileSuccess,
  createProfileSuccess,
  clearProfile,
  updateProfileSuccess,
  addError,
  removeError,
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
  try {
    const res = await axios.post('/api/profile', JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(res.data);
    dispatch(createProfileSuccess(res.data));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((err) => {
        const id = uuid();
        dispatch(
          addError({
            msg: err.msg,
            id,
          })
        );
        setTimeout(() => {
          dispatch(removeError(id));
        }, 4000);
      });
    }
  }
};

export const updateProfile = (body, history) => async (dispatch) => {
  try {
    const res = await axios.put('/api/profile', JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });

    dispatch(updateProfileSuccess(res.data));
    history.push('/profile');
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((err) => {
        const id = uuid();
        dispatch(
          addError({
            msg: err.msg,
            id,
          })
        );
        setTimeout(() => {
          dispatch(removeError(id));
        }, 4000);
      });
    }
  }
};

export default profileSlice.reducer;
