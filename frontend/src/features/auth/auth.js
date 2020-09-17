import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { getCurrentProfile } from '../tutors/profile';
import { clearProfile } from '../../features/tutors/profile';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: false,
    error: false,
    errors: [],
  },
  reducers: {
    success: (state, action) => {
      localStorage.setItem('token', action.payload);
      state.isAuthenticated = true;
      state.loading = false;
    },
    addError: (state, action) => {
      state.errors.push(action.payload);
      state.loading = false;
    },
    removeError: (state, action) => {
      const removeIndex = state.errors.findIndex(
        (err) => err.id === action.payload
      );
      state.errors.splice(removeIndex, 1);
    },
    authorized: (state) => {
      state.isAuthenticated = true;
    },
    deAuthorize: (state) => {
      localStorage.removeItem('token');
      state.isAuthenticated = false;
      state.loading = false;
      state.token = null;
    },
    errorTrue: (state) => {
      state.error = true;
    },
    errorFalse: (state) => {
      state.error = false;
    },
  },
});

//Reducers
export const {
  success,
  addError,
  removeError,
  authorized,
  deAuthorize,
  errorTrue,
  errorFalse,
} = authSlice.actions;

export const register = (body, history) => async (dispatch) => {
  try {
    const res = await axios.post('/api/tutors', JSON.stringify(body), {
      headers: { 'Content-Type': 'application/json' },
    });

    dispatch(success(res.data.token));
    history.push('/create-profile');
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

//Login
export const login = (email, password) => async (dispatch) => {
  try {
    const res = await axios.post('/api/auth', { email, password });
    dispatch(success(res.data.token));
    dispatch(getCurrentProfile());
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

export const logout = () => (dispatch) => {
  dispatch(deAuthorize());
  dispatch(clearProfile());
};

export default authSlice.reducer;
