import React from 'react';
import { Link } from 'react-router-dom';
// import './Dropdown.css';

const Dropdown = () => {
  const items = [
    {
      title: 'Why Study Wizards',
      path: '/why-study-wizards',
      cName: 'dropdown-link',
    },
    {
      title: 'Our Success Stories',
      path: '/our-success-stories',
      cName: 'dropdown-link',
    },
    {
      title: 'Our Locations',
      path: '/locations',
      cName: 'dropdown-link',
    },
    {
      title: 'Pricing',
      path: '/pricing',
      cName: 'dropdown-link',
    },
  ];
  return (
    <>
      <ul
        className="dropotron level-0 center"
        style={{
          position: 'absolute',
          display: 'block',
        }}
      >
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.path} className={item.cName}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Dropdown;
