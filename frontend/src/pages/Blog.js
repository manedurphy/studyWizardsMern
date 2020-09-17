import React, { useEffect } from 'react';
import NoSidebar from '../components/MidSection/NoSidebar';
import NewFooter from '../components/Footer/NewFooter';
import { Link } from 'react-router-dom';
import { blogLinks } from '../data/Blog/Blog';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NoSidebar heading="Study Wizards Blog">
        <section id="main" className="wrapper style2">
          <div className="container">
            <div className="row">
              {blogLinks.map((blog, index) => {
                return (
                  <div key={index}>
                    <div>
                      <Link to={blog.link}>
                        <img src={blog.img} alt="blog" className="blog-img" />
                      </Link>
                    </div>
                    <div>
                      <Link to={blog.link}>
                        <h2>{blog.title}</h2>
                      </Link>
                      <small className="blog-small">Posted: {blog.date}</small>
                      <p>{blog.prev}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </NoSidebar>
      <NewFooter />
    </>
  );
};

export default Blog;
