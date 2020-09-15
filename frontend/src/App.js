import React, { useEffect } from 'react';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import { Route, Switch } from 'react-router-dom';
import { authorized } from './features/auth/auth';
import { useDispatch } from 'react-redux';
import setAuthToken from './components/util/setAuthToken';
import CreateProfile from './components/ProfileForms/CreateProfile';
import EditProfile from './components/ProfileForms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import BlogPost from './components/Blog/BlogPost';
import {
  About,
  Error,
  Contact,
  Course,
  Calendar,
  Blog,
  NewCourses,
  NewHome,
  Profile,
  YelpReviews,
} from './pages';
import UserPrivateRoute from './components/routing/UserPrivateRoute';

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
  }, []);

  return (
    <div className="App" id="page-wrapper">
      <Switch>
        <Route exact path="/" component={NewHome} />
        <Route exact path="/courses" component={NewCourses} />
        <Route exact path="/about" component={About} />
        <Route path="/courses/:id" component={Course} />
        <Route exact path="/contact-us" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/reviews" component={YelpReviews} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogPost} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <UserPrivateRoute exact path="/appointment" component={Calendar} />
        <Error path="/" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
