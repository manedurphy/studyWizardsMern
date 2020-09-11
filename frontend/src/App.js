import React, { useEffect } from 'react';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Courses from './pages/Courses';
import Course from './pages/Course';
import { Route } from 'react-router-dom';
import { authorized } from './features/auth/auth';
import { useDispatch } from 'react-redux';
import setAuthToken from './components/util/setAuthToken';
import Profile from './pages/Profile';
import CreateProfile from './components/ProfileForms/CreateProfile';
import EditProfile from './components/ProfileForms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(authorized());
    }
  });

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/courses" component={Courses} />
      <Route path="/courses/:id" component={Course} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/create-profile" component={CreateProfile} />
      <PrivateRoute exact path="/edit-profile" component={EditProfile} />
    </div>
  );
}

export default App;
