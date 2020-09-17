import React from 'react';
import { Link } from 'react-router-dom';

const AboutSidebar = ({ info }) => {
  const { tag, mainHeading, mainSubheading, body, images, btns, left } = info;

  return (
    <section id="main" className="wrapper style2">
      <div className="title">{tag}</div>
      <div className="container">
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            {/* Sidebar */}
            <div id="sidebar">
              {left.map((el, index) => {
                return (
                  <section className="box" key={index}>
                    <header>
                      <h2>{el.heading}</h2>
                    </header>
                    {el.p ? (
                      <>
                        <p>{el.p}</p>
                        <Link
                          to={el.link}
                          className="button style1"
                          style={{ background: '#60479c' }}
                        >
                          Read More
                        </Link>
                      </>
                    ) : el.images ? (
                      <ul className="style2">
                        {el.images.map((image, index) => {
                          return (
                            <li key={index}>
                              <article className="box post-excerpt">
                                <img
                                  src={image.img}
                                  alt="leftImg"
                                  className="image left"
                                />
                                <h3>{image.heading}</h3>
                                <p>
                                  Duis odio diam, luctus et vulputate vitae,
                                  vehicula ac dolor. Pellentesque at urna eget
                                  tellus sed etiam.
                                </p>
                              </article>
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      <ul className="style3">
                        {el.blog.map((blog, index) => {
                          return (
                            <li key={index}>
                              <Link to={blog.link}>{blog.title}</Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </section>
                );
              })}
            </div>
          </div>
          <div className="col-8 col-12-medium imp-medium">
            {/* Content */}
            <div id="content">
              <article className="box post">
                <header className="style1">
                  <h2>{mainHeading}</h2>
                  <p>{mainSubheading}</p>
                </header>
                <a href="#" className="image featured">
                  <img src="images/pic01.jpg" alt="" />
                </a>
                {body.map((bodyEl, index) => {
                  return (
                    <div key={index}>
                      <h2>{bodyEl.heading}</h2>
                      <p>{bodyEl.p}</p>
                    </div>
                  );
                })}
              </article>
              <div className="row gtr-150">
                {btns.map((btn, index) => {
                  return (
                    <div className="col-6 col-12-small" key={index}>
                      <section className="box">
                        <header>
                          <h2>{btn.heading}</h2>
                        </header>
                        <p>{btn.p}</p>
                        <Link
                          to={btn.link}
                          className="button style1"
                          style={{ background: '#60479c' }}
                        >
                          Read More
                        </Link>
                      </section>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSidebar;
