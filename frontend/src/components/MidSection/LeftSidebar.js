import React from 'react';
import { Link } from 'react-router-dom';
import { blogLinks } from '../../data/Blog/Blog';

const LeftSidebar = ({ info }) => {
  const {
    tag,
    img1,
    img2,
    img3,
    heading1,
    heading2,
    heading3,
    heading4,
    btnHeadingLeft,
    btnHeadingRight,
    btnP1,
    btnP2,
    btnLink1,
    btnLink2,
    isLink,
    icon1,
    icon2,
    p1,
    p2,
    p3,
    p4,
    leftHeading1,
    leftHeading2,
    leftHeading3,
    leftSubheading1,
    leftSubheading2,
    leftSubheading3,
    mainHeading,
    mainSubheading,
  } = info;

  return (
    <section id="main" className="wrapper style2">
      <div className="title">{tag}</div>
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
                      {/* <a href="#" className="image left"> */}
                      <img src={img1} alt="" className="image left" />
                      {/* </a> */}
                      <h3>{leftSubheading1}</h3>
                      <p>
                        Duis odio diam, luctus et vulputate vitae, vehicula ac
                        dolor. Pellentesque at urna eget tellus sed etiam.
                      </p>
                    </article>
                  </li>
                  <li>
                    <article className="box post-excerpt">
                      <img src={img2} alt="" className="image left" />
                      <h3>{leftSubheading2}</h3>
                      <p>
                        Duis odio diam, luctus et vulputate vitae, vehicula ac
                        dolor. Pellentesque at urna eget tellus sed etiam.
                      </p>
                    </article>
                  </li>
                  <li>
                    <article className="box post-excerpt">
                      <img src={img3} alt="" className="image left" />
                      <h3>{leftSubheading3}</h3>
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
                  {blogLinks.map((blog) => {
                    return (
                      <li>
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
                  <h2>{mainHeading}</h2>
                  <p>{mainSubheading}</p>
                </header>
                <a href="#" className="image featured">
                  <img src="images/pic01.jpg" alt="" />
                </a>
                <h2>{heading1}</h2>
                <p>{p1}</p>
                <h2>{heading2}</h2>
                <p>{p2}</p>
                <h2>{heading3}</h2>
                <p>{p3}</p>
                <h2>{heading4}</h2>
                <p>{p4}</p>
              </article>
              <div className="row gtr-150">
                <div className="col-6 col-12-small">
                  <section className="box">
                    <header>
                      <h2>
                        {btnHeadingLeft}
                        {icon1}
                      </h2>
                    </header>
                    <a href="#" className="image featured">
                      <img src="images/pic05.jpg" alt="" />
                    </a>
                    <p>{btnP1}</p>
                    {isLink ? (
                      <Link
                        to={btnLink1}
                        className="button style1"
                        style={{ background: '#60479c' }}
                      >
                        Read More
                      </Link>
                    ) : (
                      <a
                        href="https://www.yelp.com/biz/study-wizards-tutoring-san-jose-2?utm_medium=badge_star_rating_reviews&utm_source=biz_review_badge"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button style1"
                        style={{ background: '#60479c' }}
                      >
                        Read More
                      </a>
                    )}
                  </section>
                </div>
                <div className="col-6 col-12-small">
                  <section className="box">
                    <header>
                      <h2>
                        {btnHeadingRight}
                        {icon2}
                      </h2>
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
                    {isLink ? (
                      <Link
                        to={btnLink2}
                        className="button style1"
                        style={{ background: '#60479c' }}
                      >
                        Read More
                      </Link>
                    ) : (
                      <a
                        href="https://www.google.com/search?ei=BJJNX4jsOYLSmAXWzJawDg&q=study+wizards+tutoring+california+google+reviews&oq=study+wizards+tutoring+california+google+reviews&gs_lcp=CgZwc3ktYWIQA1DIMljQR2CsSWgDcAB4AIABWYgBlQeSAQIxMpgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab&ved=0ahUKEwiI_s-K1sbrAhUCKaYKHVamBeYQ4dUDCA0&uact=5#lrd=0x808e3497e52fe473:0xddcb817cb831628,1,,,"
                        className="button style1"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ background: '#60479c' }}
                      >
                        Read More
                      </a>
                    )}
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

export default LeftSidebar;
