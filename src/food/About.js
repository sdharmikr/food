import React from "react";

function About() {
  return (
    <div>
      <section className="section about">
        <div className="container">
          <div className="jt-row row gx-5 visible">
            <div className="col-md-12">
              <h2 className="section-title">
                <span className="decor-line"></span>
                About Us
                <span className="decor-line"></span>
              </h2>
            </div>
            <div className="col-md-12">
              <div className="section-subtitle">
                <p>
                  We love restaurants as much as you do. That’s why we’ve been
                  helping them fill tables since 1999. Welcome to elixir
                  restaurant
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <h2 className="heading font-smoothing">The History</h2>
              <p className="text">
                The <strong> History of Kitchens </strong>
                and Cooks gives further intimation on Mr Boulanger usual menu,
                stating confidently that "Boulanger served salted poultry and
                fresh eggs, all presented without a tablecloth on small marble
                tables". Numerous commentators have also referred to the
                supposed restaurant owner's eccentric habit of touting for
                custom outside his establishment, dressed in aristocratic
                fashion and brandishing a sword
              </p>
              <p className="text">
                According to Miss Spang, there is not a shred of evidence for
                any of it. She said: These legends just get passed on by hearsay
                and then spiral out of control. Her interest in
                <strong> Boulanger </strong> dates back to a history of food
                seminar in Paris in the mid-1990s
              </p>
              <div className="ornament">
                <img src="https://i.postimg.cc/tJZJ45jX/ornament.png" />
              </div>
            </div>

            <div className="col-md-6">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="https://i.postimg.cc/432h4n9Q/about01.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://i.postimg.cc/mgbcQ73S/about02.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://i.postimg.cc/3wNdq7c4/about03.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="jt-row row gx-5 visible">
            <div className="col-md-6">
              <div
                id="carouselExampleFade"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner mb-5">
                  <div className="carousel-item active">
                    <img
                      src="https://i.postimg.cc/pdzgR57g/about04.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://i.postimg.cc/L61QW4d1/about05.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="https://i.postimg.cc/QtDWjbVD/about06.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>

            <div className="col-md-6 ">
              <p className="text">
                The <strong> History of Kitchens </strong>
                and Cooks gives further intimation on Mr Boulanger usual menu,
                stating confidently that "Boulanger served salted poultry and
                fresh eggs, all presented without a tablecloth on small marble
                tables". Numerous commentators have also referred to the
                supposed restaurant owner's eccentric habit of touting for
                custom outside his establishment, dressed in aristocratic
                fashion and brandishing a sword
              </p>
              <p className="text">
                According to Miss Spang, there is not a shred of evidence for
                any of it. She said: These legends just get passed on by hearsay
                and then spiral out of control. Her interest in
                <strong> Boulanger </strong> dates back to a history of food
                seminar in Paris in the mid-1990s
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
