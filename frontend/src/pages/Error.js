import React from 'react';
import NewNavbar from '../components/Navbar/NewNavbar';
import NavSidebar from '../components/Navbar/NavSidebar';

const Error = () => {
  const navInfo = {
    heading: '404 Page Not Found...',
    subheading: 'Please Return to the Homepage',
  };

  return (
    <>
      <NavSidebar />
      <NewNavbar info={navInfo} />
    </>
  );
};

export default Error;
