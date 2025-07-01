import React from "react";

function Header() {
  return (
    <div id="header">
      {/*------- Navigation-------- */}
      <div className="navigation transparent-nav">
        <div className="logo">
          <img
            src="https://i.postimg.cc/DZJR9Wq1/logo-elixir.png"
            alt="Elixir Logo"
          />
        </div>
        <ul className="mainmenu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
        </ul>
      </div>

      {/* -------MobileNavigation------- */}

      <div className="mobile">
        <div className="mobilenavigation">
          <div className="logo">
            <img
              src="https://i.postimg.cc/DZJR9Wq1/logo-elixir.png"
              alt="Elixir Logo"
            />
          </div>
          <div className="toggle">
            <i className="fa-solid fa-bars" />
          </div>
        </div>
        <ul className="mobilemainmenu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Reservation</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>

      {/* Bootstrap Carousel */}
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://i.postimg.cc/5Ntk038g/01.jpg"
              className="slider d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.postimg.cc/jS3K8crk/02.jpg"
              className="slider d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.postimg.cc/gjpPwBvr/03.jpg"
              className="slider d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="slide-content">
        <div className="voffset100"></div>
        <span className="logointro">
          <img src="https://i.postimg.cc/xjKJ7YNb/logo-intro.png" />
        </span>
        <div className="item">
          <h2>The soul food bistro</h2>
        </div>
        <div className="slide-sep">
          <img src="https://i.postimg.cc/HW51m5Kv/slide-separator.png" />
        </div>
        <p>The Chef creates divine combinations</p>
      </div>
    </div>
  );
}

export default Header;
