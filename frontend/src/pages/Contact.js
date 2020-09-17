import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NewFooter from '../components/Footer/NewFooter';
import { errorFalse } from '../features/auth/auth';

const Contact = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const homeBtn = (
    <Link to="/" className="button">
      Back Home
    </Link>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(errorFalse());
  }, []);
  return (
    <>
      <NewFooter btn={homeBtn} />
      {isAuthenticated && <Redirect to="/" />}
    </>
  );
};

export default Contact;
