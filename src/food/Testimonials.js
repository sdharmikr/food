import React from "react";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="container">
        <div className="row visible">
          <div className="voffset20"></div>
          <div className="col-md-12">
            <div className="testimonials-img"></div>
            <h2>Testimonials</h2>
          </div>
          <div className="col-md-12">
            <div className="container">
              <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active item">
                    <p className="">
                      Applicake chocolate cake wafer toffee pie soufflé wafer.
                      Tart marshmallow wafer macaroon cheesecake jelly.
                      Gingerbread cookie soufflé sweet roll sweet roll jelly-o.
                    </p>
                    <span className="author">Alexander Smith</span>
                  </div>
                  <div className="carousel-item item">
                    <p className="">
                      "Awesome to work with. Incredibly organized, easy to
                      communicate with, responsive with next iterations, and
                      beautiful work. It’s great to work with someone so
                      open-minded and responsive. Thank you!"
                    </p>
                    <span className="author">John Berthier</span>
                  </div>
                  <div className="carousel-item item">
                    <p className="">
                      “Your designs were exactly what Josef had always imagined
                      — clear, clean, continuous, with a focus on stylistic
                      elements. It was a major help for us. Thank you so much
                      for your work on this project."
                    </p>
                    <span className="author">Carolyn Meyer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
