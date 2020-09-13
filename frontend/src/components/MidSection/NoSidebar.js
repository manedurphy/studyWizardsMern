import React, { Children } from 'react';

const NoSidebar = (props) => {
  return (
    <div id="main" class="wrapper style2">
      <div class="title">{props.heading}</div>
      <div class="container">
        <div id="content">
          <article class="box post">{props.children}</article>
        </div>
      </div>
    </div>
  );
};

export default NoSidebar;
