import React from "react";

function Reservation() {
  return (
    <div className="section reservations">
      <div className="row visible">
        <div className="col-md-12">
          <h2 className="section-title2">Reservations</h2>
        </div>
        <div className="col-md-12">
          <div className="section-subtitle3">
            <p>
              Booking a table has never been so easy with free instant online
              restaurant reservations, booking now!!
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <div className="reservations_logo"></div>
          <div className="voffset40"></div>
          <h4>
            <span className="above">Welcome to Elixir</span>
          </h4>
          <h3>Make a Reservation</h3>
          <h4>
            <span>Open Hours</span>
          </h4>
          <div className="voffset50"></div>
          <p>
            <strong>Sunday to Tuesday</strong> 09.00 - 24:00
            <strong>Friday and Sunday</strong> 08:00 - 03.00
          </p>
          <h3 className="reservation-phone">+1-506-890-0179</h3>
        </div>
        <form>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p>Book A Table</p>
                <input type="text" id="date" name="date" placeholder="Date" />
                <input type="text" id="date" name="date" placeholder="Time" />
                <input type="text" id="date" name="date" placeholder="Party" />
              </div>

              <div className="col-md-6">
                <p>Booking Details</p>
                <input type="text" id="date" name="date" placeholder="Name" />
                <input type="text" id="date" name="date" placeholder="Email" />
                <input type="text" id="date" name="date" placeholder="Phone" />
              </div>
              <div className="Message">
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="col-md-12 col-sm-4"
                ></textarea>
              </div>
                   <div className="col-md-12">
              <a className="button menu">Make Reservation</a>
            </div>

                 <div className="ornament ">
                <img src="https://i.postimg.cc/tJZJ45jX/ornament.png" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Reservation;
