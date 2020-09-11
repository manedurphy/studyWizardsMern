import React from 'react';
import services from '../../data/serviceData/Services';

const Footer = () => {
  return (
    <div className="services row">
      {services.map((service) => {
        const { id, name, desc, icon } = service;
        return (
          <div className="service col-md-3 col-sm-6 text-center" key={id}>
            <span>{icon}</span>
            <h5>{name}</h5>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
