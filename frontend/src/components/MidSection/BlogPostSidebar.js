import React from 'react';
import { Link } from 'react-router-dom';

const BlogSidebar = ({ blog, info }) => {
  const { left, btns, tag } = info;

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
                      <>
                        <ul className="style2">
                          {el.images.map((image, index) => {
                            return (
                              <li key={index}>
                                <article className="box post-excerpt">
                                  <Link to={image.link}>
                                    <img
                                      src={image.img}
                                      alt="leftImg"
                                      className="image left"
                                    />
                                  </Link>
                                  <Link to={image.link}>
                                    <h3>{image.heading}</h3>
                                  </Link>
                                  <p>{image.p}</p>
                                </article>
                              </li>
                            );
                          })}
                        </ul>
                        <Link
                          to={'/contact-us'}
                          className="button style1"
                          style={{ background: '#60479c' }}
                        >
                          Contact Us
                        </Link>
                      </>
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
                  <h2>{blog && blog.title}</h2>
                  <p className="italic">{blog && blog.date}</p>
                </header>
                <a href="#" className="image featured">
                  <img src="images/pic01.jpg" alt="" />
                </a>
                {blog &&
                  blog.headings.map((heading, index) => {
                    return (
                      <div key={index}>
                        <h2>{heading}</h2>
                        <p>{blog.paragraphs[index]}</p>
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

export default BlogSidebar;
