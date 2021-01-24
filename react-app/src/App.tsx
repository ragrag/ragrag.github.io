import React from "react";
import "./App.css";
// @ts-ignore
import BackToTop from "react-back-to-top-button";
function App() {
  const [isMenuActive, setIsMenuActive] = React.useState(false);
  var prevScrollpos = window.pageYOffset;
  const navBarRef = React.useRef<HTMLElement | null>(null);
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      if (navBarRef?.current) navBarRef.current.style.top = "0";
    } else {
      if (navBarRef?.current) navBarRef.current.style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div className="App">
      <div className="container ">
        <br></br>
        <div className="columns">
          <div className="column is-offset-half">{/* <h2>AS</h2> */}</div>
        </div>
        <nav
          className="navbar is-black is-fixed-top"
          style={{
            backgroundColor: "#1f1f1f",
            transition: "top 0.3s",
            opacity: 0.7,
          }}
          role="navigation"
          aria-label="main navigation"
          ref={navBarRef}
        >
          <div className="navbar-brand">
            {/* <a className="navbar-item" href="/">
              <span className="icon">
                <i className="fas fa-home"></i>
              </span>
            </a> */}
            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-menu-taget"
              onClick={() => setIsMenuActive(!isMenuActive)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div
            id="navbar-menu-taget"
            className={`navbar-menu ${isMenuActive ? "is-active" : ""}`}
            style={{
              backgroundColor: "#2f2f2f",
            }}
          >
            <div
              className="navbar-start"
              style={{
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              <a
                href="#about-section"
                className="navbar-item"
                style={{ color: isMenuActive ? "#FFFFF" : "#FFFFFF" }}
                onClick={() => setIsMenuActive(false)}
              >
                <span className="icon" style={{ marginRight: "5px" }}>
                  <i className="far fa-sm fa-address-card"></i>
                </span>
                <span className="is-size-5">About</span>
              </a>

              <a
                href="#interests-section"
                className="navbar-item"
                style={{ color: isMenuActive ? "#FFFFF" : "#FFFFFF" }}
                onClick={() => setIsMenuActive(false)}
              >
                <span className="icon" style={{ marginRight: "5px" }}>
                  <i className="far fa-sm fa-bookmark"></i>
                </span>
                <span className="is-size-5">Interests</span>
              </a>

              <a
                href="#articles-section"
                className="navbar-item"
                style={{ color: isMenuActive ? "#FFFFF" : "#FFFFFF" }}
                onClick={() => setIsMenuActive(false)}
              >
                <span className="icon" style={{ marginRight: "5px" }}>
                  <i className="far fa-sm fa-newspaper"></i>
                </span>

                <span className="is-size-5">Latest Articles </span>
              </a>

              <a
                className="navbar-item"
                href="#projects-section"
                style={{ color: isMenuActive ? "#FFFFF" : "#FFFFFF" }}
                onClick={() => setIsMenuActive(false)}
              >
                <span className="icon" style={{ marginRight: "5px" }}>
                  <i className="fas fa-sm fa-hard-hat"></i>
                </span>
                <span className="is-size-5">Projects</span>
              </a>
            </div>
          </div>
        </nav>
        <br></br>

        <div className="columns is-mobile is-centered ">
          <div className="column has-text-centered is-half ">
            <div id="about-section">
              <h2 className="is-size-2" style={{ whiteSpace: "nowrap" }}>
                Hello ❄
              </h2>
              <p className="is-size-4">
                I am a Software Engineer with interest in building, learning
                about and working on large-scale applications
              </p>
              <br></br>
              <div className="columns is-centered is-mobile">
                <div className="column is-2">
                  <a href="mailto:ragy.design@gmail.com">
                    <span className="icon">
                      <i
                        className="fas fa-lg fa-envelope"
                        style={{ color: "#BB001B" }}
                      ></i>
                    </span>
                  </a>
                </div>
                <div className="column is-2">
                  <a href="https://www.linkedin.com/in/raggi-h/">
                    <span className="icon">
                      <i
                        className="fab fa-lg fa-linkedin"
                        style={{ color: "#0e76a8" }}
                      ></i>
                    </span>
                  </a>
                </div>

                <div className="column is-2">
                  <a href="https://github.com/ragrag">
                    <span className="icon">
                      <i
                        className="fab fa-lg fa-github"
                        style={{ color: "#FFFFFF" }}
                      ></i>
                    </span>
                  </a>
                </div>
                <div className="column is-2">
                  <a href="https://dev.to/ragrag">
                    <span className="icon">
                      <i
                        className="fab fa-lg fa-dev"
                        style={{ color: "#FFFFFF" }}
                      ></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <br></br>
            <hr />
            <br></br>
            <div id="interests-section">
              <h3 className="is-size-3" style={{ whiteSpace: "nowrap" }}>
                Technologies / Interests
              </h3>
              <p className="is-size-5">
                Technologies and topics I enjoy learning about and using
              </p>
            </div>

            <h6
              className="is-size-5"
              style={{ marginBottom: "10px", marginTop: "10px" }}
            >
              Technologies
            </h6>
            <div>
              {/* <h6
                className="is-size-6"
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                Languages
              </h6> */}
              <div
                className="columns is-centered is-mobile"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                <div className="column has-text-centered is-2">
                  <span className="icon">
                    <i
                      className="devicon-typescript-plain colored fa-2x"
                      // style={{ color: "grey" }}
                    ></i>
                  </span>
                  <p style={{ fontSize: 12 }}>TypeScript</p>
                </div>
                <div className="column has-text-centered is-2">
                  <span className="icon">
                    <i className="devicon-nodejs-plain colored fa-2x "></i>
                  </span>
                  <p style={{ fontSize: 12 }}>Node.js</p>
                </div>
                <div className="column has-text-centered is-2">
                  <span className="icon">
                    <i
                      className="devicon-go-plain fa-2x "
                      style={{ color: "#00ACD7" }}
                    ></i>
                  </span>
                  <p style={{ fontSize: 12 }}>Golang</p>
                </div>
                <div className="column has-text-centered is-2">
                  <span className="icon">
                    <i
                      className="devicon-cplusplus-plain colored fa-2x "
                      style={{ color: "#00427E" }}
                    ></i>
                  </span>
                  <p style={{ fontSize: 12 }}>C++</p>
                </div>
              </div>
            </div>

            <div>
              {/* <h6
                className="is-size-6"
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                Frameworks/Libraries
              </h6> */}
              <div
                className="columns is-centered  is-mobile"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                <div className="column has-text-centered is-2">
                  <span className="icon">
                    <i className="devicon-express-original-wordmark  fa-2x "></i>
                  </span>
                  <p style={{ fontSize: 12 }}>Express</p>
                </div>
                <div className="column has-text-centered is-2">
                  <span className="icon">
                    <i
                      className="devicon-react-original colored fa-2x "
                      // style={{ color: "grey" }}
                    ></i>
                  </span>
                  <p style={{ fontSize: 12 }}>React/Next.js</p>
                </div>
                <div className="column has-text-centered is-2">
                  <span className="icon">
                    <i className="devicon-postgresql-plain colored fa-2x "></i>
                  </span>
                  <p style={{ fontSize: 12 }}>PostgreSQL</p>
                </div>
                <div className="column has-text-centered is-2">
                  <span className="icon">
                    <i
                      className="devicon-mongodb-plain colored fa-2x "
                      // style={{ color: "grey" }}
                    ></i>
                  </span>
                  <p style={{ fontSize: 12 }}>MongoDB</p>
                </div>
              </div>
            </div>

            <h6
              className="is-size-5"
              style={{ marginBottom: "10px", marginTop: "10px" }}
            >
              Topics of Interest
            </h6>
            <div>
              {/* <h6
                className="is-size-6"
                style={{ marginBottom: "10px", marginTop: "10px" }}
              >
                Languages
              </h6> */}
              <div
                className="columns is-centered is-mobile"
                style={{ marginTop: "10px", marginBottom: "10px" }}
              >
                <div className="column has-text-centered is-3">
                  <span className="icon">
                    <i
                      className="fab fa-hive fa-2x"
                      style={{ color: "#666" }}
                    ></i>
                  </span>
                  <p style={{ fontSize: 12 }}>Backend Engineering</p>
                </div>
                <div className="column has-text-centered is-3">
                  <span className="icon">
                    <i
                      className="fas fa-arrows-alt-h fa-2x"
                      style={{ color: "#666" }}
                    ></i>
                  </span>
                  <p style={{ fontSize: 12 }}>Scalability</p>
                </div>
                <div className="column has-text-centered is-3">
                  <span className="icon">
                    <img src="/microservices.png" />
                  </span>
                  <p style={{ fontSize: 12 }}>Microservices</p>
                </div>
                <div className="column has-text-centered is-3">
                  <span className="icon">
                    <img src="/ds.png" />
                  </span>
                  <p style={{ fontSize: 12 }}>Distributed Systems</p>
                </div>
              </div>
            </div>
            <br></br>
            <hr />
            <br></br>
            <div id="articles-section">
              <div>
                <span
                  className="is-size-3"
                  style={{
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    marginRight: "10px",
                  }}
                >
                  My Recent Articles
                </span>
                <a href="https://dev.to/ragrag">
                  <span className="icon">
                    <i
                      className="fab fa-lg fa-dev"
                      style={{ color: "#FFFFFF" }}
                    ></i>
                  </span>
                </a>
              </div>
              <br></br>
              <div className="columns is-centered is-mobile">
                <div className="column">
                  <a href="https://dev.to/ragrag/asynchronous-request-response-pattern-2pbj">
                    <article
                      className="media"
                      style={{ backgroundColor: "#333" }}
                    >
                      <figure className="media-left">
                        <img src="article-bg-1.jpg" width={150} />
                      </figure>
                      <div
                        className="media-content"
                        style={{ minHeight: "100%" }}
                      >
                        <div className="content">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              alignContent: "center",
                            }}
                          >
                            <br></br>

                            <p className="is-size-6" style={{ color: "#FFF" }}>
                              <b>Asynchronous Request-Response Pattern</b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </a>
                </div>
              </div>

              <div className="columns is-centered is-mobile">
                <div className="column">
                  <a href="https://dev.to/ragrag/adding-a-pub-sub-layer-to-your-express-backend-3p09">
                    <article
                      className="media"
                      style={{ backgroundColor: "#333" }}
                    >
                      <figure className="media-left">
                        <img src="article-bg-2.jpg" width={150} />
                      </figure>
                      <div
                        className="media-content"
                        style={{ minHeight: "100%" }}
                      >
                        <div className="content">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              alignContent: "center",
                            }}
                          >
                            <br></br>

                            <p className="is-size-6" style={{ color: "#FFF" }}>
                              <b>
                                Adding a Pub/Sub Layer to your express backend
                              </b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </a>
                </div>
              </div>

              <div className="columns is-centered is-mobile">
                <div className="column">
                  <a href="https://dev.to/ragrag/rest-api-maturity-towards-the-glory-of-rest-5cm3">
                    <article
                      className="media"
                      style={{ backgroundColor: "#333" }}
                    >
                      <figure className="media-left">
                        <img src="article-bg-3.jpg" width={150} />
                      </figure>
                      <div
                        className="media-content"
                        style={{ minHeight: "100%" }}
                      >
                        <div className="content">
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "center",
                              alignItems: "center",
                              alignContent: "center",
                            }}
                          >
                            <br></br>

                            <p className="is-size-6" style={{ color: "#FFF" }}>
                              <b>
                                REST API Maturity - Towards The Glory of REST
                              </b>
                            </p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </a>
                </div>
              </div>
            </div>
            <br></br>
            <hr></hr>
            <br></br>
            <div id="projects-section">
              <div>
                <span
                  className="is-size-3"
                  style={{
                    whiteSpace: "nowrap",
                    display: "inline-block",
                    marginRight: "10px",
                  }}
                >
                  My Recent Projects
                </span>
              </div>
              <br></br>
              <div className="columns is-centered is-mobile">
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img
                          src="https://bulma.io/images/placeholders/1280x960.png"
                          alt="Placeholder image"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48">
                            <img
                              src="https://bulma.io/images/placeholders/96x96.png"
                              alt="Placeholder image"
                            />
                          </figure>
                        </div>
                        <div className="media-content">
                          <p className="title is-4">John Smith</p>
                          <p className="subtitle is-6">@johnsmith</p>
                        </div>
                      </div>

                      <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br />
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackToTop showOnScrollUp={false} showAt={100}>
        <span className="icon">
          <i className="fas fa-angle-up fa-lg" style={{ color: "#FFF" }}></i>
        </span>
      </BackToTop>
    </div>
  );
}

export default App;
