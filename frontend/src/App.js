import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import SuccessStories from './pages/SucessStories';
import { navInfo, loggedInNavInfo } from './data/Navbar/Navbar';
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
import NewNavbar from './components/Navbar/NewNavbar';
import NavSidebar from './components/Navbar/NavSidebar';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(authorized());
    }
  }, []);

  return (
    <div className="App" id="page-wrapper">
      <NavSidebar />
      <NewNavbar info={!isAuthenticated ? navInfo : loggedInNavInfo} />
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
        <Route exact path="/our-success-stories" component={SuccessStories} />
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
