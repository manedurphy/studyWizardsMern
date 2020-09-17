import React, { useEffect } from 'react';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import { Route, Switch } from 'react-router-dom';
import { authorized, errorFalse } from './features/auth/auth';
import { useDispatch, useSelector } from 'react-redux';
import setAuthToken from './components/util/setAuthToken';
import CreateProfile from './components/ProfileForms/CreateProfile';
import EditProfile from './components/ProfileForms/EditProfile';
import PrivateRoute from './components/routing/PrivateRoute';
import BlogPost from './components/Blog/BlogPost';
import SuccessStories from './pages/SucessStories';
import { navInfo, loggedInNavInfo, errorNavInfo } from './data/Navbar/Navbar';
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
  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      dispatch(authorized());
    }
  }, []);

  const withContainer = () => {
    return (
      <>
        <NewNavbar
          info={
            !isAuthenticated && !error
              ? navInfo
              : isAuthenticated && !error
              ? loggedInNavInfo
              : errorNavInfo
          }
        />
        <Switch>
          <Route exact path="/" component={NewHome} />
          <Route exact path="/courses" component={NewCourses} />
          <Route exact path="/about" component={About} />
          <Route exact path="/courses/:id" component={Course} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/reviews" component={YelpReviews} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={BlogPost} />
          <Route exact path="/our-success-stories" component={SuccessStories} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <Error component={Error} />
        </Switch>
      </>
    );
  };

  return (
    <div className="App" id="page-wrapper">
      <NavSidebar />
      {/* <NewNavbar info={!isAuthenticated ? navInfo : loggedInNavInfo} /> */}
      {/* <Switch> */}
      <PrivateRoute exact path="/create-profile" component={CreateProfile} />
      <PrivateRoute exact path="/edit-profile" component={EditProfile} />
      <UserPrivateRoute exact path="/appointment" component={Calendar} />
      <Route exact path="/contact-us" component={Contact} />
      <Route component={withContainer} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
