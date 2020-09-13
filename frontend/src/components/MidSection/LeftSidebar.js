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
                <a href="#" className="button style1">
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
                <a href="#" className="button style1">
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
                      <h2>Magna pulvinar tempus</h2>
                    </header>
                    <a href="#" className="image featured">
                      <img src="images/pic05.jpg" alt="" />
                    </a>
                    <p>
                      Rutrum bibendum. Proin pellentesque diam non ligula
                      commodo tempor. Vivamus eget urna nibh. Curabitur non
                      fringilla nisl. Donec accumsan interdum nisi, quis tempus.
                    </p>
                    <a href="#" className="button style1">
                      More
                    </a>
                  </section>
                </div>
                <div className="col-6 col-12-small">
                  <section className="box">
                    <header>
                      <h2>Magna pulvinar tempus</h2>
                    </header>
                    <a href="#" className="image featured">
                      <img src="images/pic06.jpg" alt="" />
                    </a>
                    <p>
                      Rutrum bibendum. Proin pellentesque diam non ligula
                      commodo tempor. Vivamus eget urna nibh. Curabitur non
                      fringilla nisl. Donec accumsan interdum nisi, quis tempus.
                    </p>
                    <a href="#" className="button style1">
                      More
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
