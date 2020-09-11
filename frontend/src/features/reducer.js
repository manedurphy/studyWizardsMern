import { combineReducers } from 'redux';
import authReducer from './auth/auth';
import tutorsReducer from './tutors/tutors';
import profileReducer from './tutors/profile';

export default combineReducers({
  auth: authReducer,
  tutors: tutorsReducer,
  profile: profileReducer,
});
