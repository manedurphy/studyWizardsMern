import React from 'react';
import { Link } from 'react-router-dom';
import { blogLinks } from '../../data/Blog/Blog';

const BlogSidebar = ({ info, blog }) => {
  const {
    img1,
    img2,
    img3,
    btnHeadingLeft,
    btnHeadingRight,
    btnP1,
    btnP2,
    btnLink1,
    btnLink2,
    leftHeading1,
    leftHeading2,
    leftHeading3,
    leftSubheading1,
    leftSubheading2,
    leftSubheading3,
  } = info;

  return (
    <section id="main" className="wrapper style2">
      <div className="title">Blog</div>
      <div className="container">
        <div className="row gtr-150">
          <div className="col-4 col-12-medium">
            {/* Sidebar */}
            <div id="sidebar">
              <section className="box">
                <header>
                  <h2>{leftHeading1}</h2>
                </header>
                <p>
                  Read about the strategies we implement in order to push our
                  students towards success. We cover the importance of
                  developing great study skills as well as stress managemnet and
                  emotional wellness.
                </p>
                <Link
                  to="/blog"
                  className="button style1"
                  style={{ background: '#60479c' }}
                >
                  Read More
                </Link>
              </section>
              <section className="box">
                <header>
                  <h2>{leftHeading2}</h2>
                </header>
                <ul className="style2">
                  <li>
                    <article className="box post-excerpt">
                      <Link to="/blog/study-ap-exams/">
                        <img src={img1} alt="leftImg" className="image left" />
                      </Link>
                      <Link to={'/blog/study-ap-exams/'}>
                        <h3>{leftSubheading1}</h3>
                      </Link>
                      <p>
                        Duis odio diam, luctus et vulputate vitae, vehicula ac
                        dolor. Pellentesque at urna eget tellus sed etiam.
                      </p>
                    </article>
                  </li>
                  <li>
                    <article className="box post-excerpt">
                      <Link to="/blog/how-to-help-your-adhd-child-in-school">
                        <img src={img2} alt="leftImg" className="image left" />
                      </Link>
                      <Link to={'/blog/how-to-help-your-adhd-child-in-school'}>
                        <h3>{leftSubheading2}</h3>
                      </Link>
                      <p>
                        Duis odio diam, luctus et vulputate vitae, vehicula ac
                        dolor. Pellentesque at urna eget tellus sed etiam.
                      </p>
                    </article>
                  </li>
                  <li>
                    <article className="box post-excerpt">
                      <Link to="/blog/regular-family-dinner-improve-childs-grades-and-health">
                        <img src={img3} alt="leftImg" className="image left" />
                      </Link>
                      <Link
                        to={
                          '/blog/regular-family-dinner-improve-childs-grades-and-health'
                        }
                      >
                        <h3>{leftSubheading3}</h3>
                      </Link>
                      <p>
                        Duis odio diam, luctus et vulputate vitae, vehicula ac
                        dolor. Pellentesque at urna eget tellus sed etiam.
                      </p>
                    </article>
                  </li>
                </ul>
                <Link
                  to="/contact-us"
                  className="button style1"
                  style={{ background: '#60479c' }}
                >
                  Contact Us
                </Link>
              </section>
              <section className="box">
                <header>
                  <h2>{leftHeading3}</h2>
                </header>
                <ul className="style3">
                  {blogLinks.map((blog, index) => {
                    return (
                      <li key={index}>
                        <Link to={blog.link}>{blog.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </section>
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
                <div className="col-6 col-12-small">
                  <section className="box">
                    <header>
                      <h2>{btnHeadingLeft}</h2>
                    </header>
                    <a href="#" className="image featured">
                      <img src="images/pic05.jpg" alt="" />
                    </a>
                    <p>{btnP1}</p>
                    <Link
                      to={btnLink1}
                      className="button style1"
                      style={{ background: '#60479c' }}
                    >
                      Read More
                    </Link>
                  </section>
                </div>
                <div className="col-6 col-12-small">
                  <section className="box">
                    <header>
                      <h2>{btnHeadingRight}</h2>
                    </header>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="image featured"
                    >
                      <img src="images/pic06.jpg" alt="" />
                    </a>
                    <p>{btnP2}</p>
                    <Link
                      to={btnLink2}
                      className="button style1"
                      style={{ background: '#60479c' }}
                    >
                      Read More
                    </Link>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSidebar;
