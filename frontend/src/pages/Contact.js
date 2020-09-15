import React, { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NewFooter from '../components/Footer/NewFooter';

const Contact = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const homeBtn = (
    <Link to="/" className="button">
      Back Home
    </Link>
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NewFooter btn={homeBtn} />
      {isAuthenticated && <Redirect to="/" />}
    </>
  );
};

export default Contact;
