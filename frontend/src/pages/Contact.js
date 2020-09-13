import React from 'react';
import { Link } from 'react-router-dom';
import NewFooter from '../components/Footer/NewFooter';

const Contact = () => {
  const homeBtn = (
    <Link to="/" className="button">
      Back Home
    </Link>
  );
  return (
    <>
      <NewFooter btn={homeBtn} />
    </>
  );
};

export default Contact;
