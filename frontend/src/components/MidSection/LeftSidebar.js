import React from 'react';

const LeftSidebar = ({ info }) => {
  const {
    tag,
    img1,
    img2,
    img3,
    heading1,
    heading2,
    heading3,
    btnHeadingLeft,
    btnHeadingRight,
    btnP1,
    btnP2,
    icon1,
    icon2,
    p1,
    p2,
    p3,
    leftHeading1,
    leftHeading2,
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
                  <h2>Ipsum nullam luctus</h2>
                </header>
                <p>
                  Malesuada quis eget eros. Nullam sodales cursus sapien, id
                  consequat leo suscipit ut. Praesent id turpis vitae turpis
                  pretium ultricies. Vestibulum sit amet risus elit.
                </p>
                <a
                  href="#"
                  className="button style1"
                  style={{ background: '#60479c' }}
                >
                  Learn More
                </a>
              </section>
              <section className="box">
                <header>
                  <h2>{leftHeading1}</h2>
                </header>
                <ul className="style2">
                  <li>
                    <article className="box post-excerpt">
                      <a href="#" className="image left">
                        <img src={img1} alt="" />
                      </a>
                      <h3>
                        <a href="#">Diam odio lorem</a>
                      </h3>
                      <p>
                        Duis odio diam, luctus et vulputate vitae, vehicula ac
                        dolor. Pellentesque at urna eget tellus sed etiam.
                      </p>
                    </article>
                  </li>
                  <li>
                    <article className="box post-excerpt">
                      <a href="#" className="image left">
                        <img src={img2} alt="" />
                      </a>
                      <h3>
                        <a href="#">Sed duis consequat</a>
                      </h3>
                      <p>
                        Duis odio diam, luctus et vulputate vitae, vehicula ac
                        dolor. Pellentesque at urna eget tellus sed etiam.
                      </p>
                    </article>
                  </li>
                  <li>
                    <article className="box post-excerpt">
                      <a href="#" className="image left">
                        <img src={img3} alt="" />
                      </a>
                      <h3>
                        <a href="#">Tellus nulla volutpat</a>
                      </h3>
                      <p>
                        Duis odio diam, luctus et vulputate vitae, vehicula ac
                        dolor. Pellentesque at urna eget tellus sed etiam.
                      </p>
                    </article>
                  </li>
                </ul>
                <a
                  href="#"
                  className="button style1"
                  style={{ background: '#60479c' }}
                >
                  Archives
                </a>
              </section>
              <section className="box">
                <header>
                  <h2>{leftHeading2}</h2>
                </header>
                <ul className="style3">
                  <li>
                    <a href="#">Nulla iaculis egestas varius</a>
                  </li>
                  <li>
                    <a href="#">Augue massa feugiat quam pretium</a>
                  </li>
                  <li>
                    <a href="#">Orci sem vel libero cras nisi odio</a>
                  </li>
                  <li>
                    <a href="#">Sed hendrerit massa nam mattis</a>
                  </li>
                  <li>
                    <a href="#">Turpis vel leo accumsan aliquet</a>
                  </li>
                  <li>
                    <a href="#">Dapibus mi fermentum fusce non</a>
                  </li>
                  <li>
                    <a href="#">Arcu laoreet sapien tempus</a>
                  </li>
                  <li>
                    <a href="#">Nulla iaculis egestas varius</a>
                  </li>
                  <li>
                    <a href="#">Augue massa feugiat quam pretium</a>
                  </li>
                  <li>
                    <a href="#">Orci sem vel libero cras nisi odio</a>
                  </li>
                  <li>
                    <a href="#">Sed hendrerit massa nam mattis</a>
                  </li>
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
                    <a
                      href="https://www.yelp.com/biz/study-wizards-tutoring-san-jose-2?utm_medium=badge_star_rating_reviews&utm_source=biz_review_badge"
                      target="_blank"
                      className="button style1"
                      style={{ background: '#60479c' }}
                    >
                      Read More
                    </a>
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
                    <a href="#" target="_blank" className="image featured">
                      <img src="images/pic06.jpg" alt="" />
                    </a>
                    <p>{btnP2}</p>
                    <a
                      href="https://www.google.com/search?ei=BJJNX4jsOYLSmAXWzJawDg&q=study+wizards+tutoring+california+google+reviews&oq=study+wizards+tutoring+california+google+reviews&gs_lcp=CgZwc3ktYWIQA1DIMljQR2CsSWgDcAB4AIABWYgBlQeSAQIxMpgBAKABAaoBB2d3cy13aXrAAQE&sclient=psy-ab&ved=0ahUKEwiI_s-K1sbrAhUCKaYKHVamBeYQ4dUDCA0&uact=5#lrd=0x808e3497e52fe473:0xddcb817cb831628,1,,,"
                      className="button style1"
                      target="_blank"
                      style={{ background: '#60479c' }}
                    >
                      Read More
                    </a>
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
