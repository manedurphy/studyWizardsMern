import React from 'react';
import NoSidebar from '../components/MidSection/NoSidebar';
import NewNavbar from '../components/Navbar/NewNavbar';
import NewFooter from '../components/Footer/NewFooter';
import { Link } from 'react-router-dom';
import { blogLinks } from '../data/Blog/Blog';
import NavSidebar from '../components/Navbar/NavSidebar';

const Blog = () => {
  const navInfo = {
    heading: 'Study Wizards Private Tutoring',
    subheading: 'Personalized For Success',
  };

  return (
    <>
      <NavSidebar />
      <NewNavbar info={navInfo} />
      <NoSidebar heading="Study Wizards Blog">
        <section id="main" className="wrapper style2">
          <div className="container">
            <div className="row">
              {blogLinks.map((blog) => {
                return (
                  <>
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
                  </>
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
