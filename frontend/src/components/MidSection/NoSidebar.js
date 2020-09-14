import React, { Children } from 'react';

const NoSidebar = (props) => {
  return (
    <div id="main" className="wrapper style2">
      <div className="title">{props.heading}</div>
      <div className="container">
        <div id="content">
          <article className="box post">{props.children}</article>
        </div>
      </div>
    </div>
  );
};

export default NoSidebar;
