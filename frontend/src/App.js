import React, { useEffect } from 'react';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Course from './pages/Course';
import { Route } from 'react-router-dom';
import { authorized } from './features/auth/auth';
import { useDispatch } from 'react-redux';
import setAuthToken from './components/util/setAuthToken';
import Profile from './pages/Profile';
import CreateProfile from './components/ProfileForms/CreateProfile';
import EditProfile from './components/ProfileForms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import NewHome from './pages/NewHome';
import NewCourses from './pages/NewCourses';
import About from './pages/About';
import Contact from './pages/Contact';

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
    <div className="App" id="page-wrapper">
      <Route exact path="/" component={NewHome} />
      <Route exact path="/courses" component={NewCourses} />
      <Route exact path="/about" component={About} />
      <Route path="/courses/:id" component={Course} />
      <Route exact path="/contact-us" component={Contact} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/create-profile" component={CreateProfile} />
      <PrivateRoute exact path="/edit-profile" component={EditProfile} />
    </div>
  );
}

export default App;
