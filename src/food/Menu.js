import React from "react";

function Menu() {
  return (
    <div className="timetable parallax">
      <div className="container">
        <div className="jt-row row visible">
          <span className="column-divider"></span>
          <div className="col-md-12">
            <h2 className="section-title">
              <div className="timetable-decorator"></div>
              <div className="opening-hours">Opening Hours</div>
              <div className="timetable-decorator2"></div>
            </h2>
          </div>
          <div className="col-md-12">
            <div className="section-subtitle2">Call For Reservations</div>
          </div>
          <div className="col-md-6">
            <div className="days">Sunday to Tuesday</div>
            <div className="hours">
              09:00
              <br /> 24:00
            </div>
          </div>
          <div className="col-md-6">
            <div className="days">Sunday to Tuesday</div>
            <div className="hours">
              08:00
              <br /> 03:00
            </div>
          </div>
          <div className="col-md-12">
            <div className="number">RESERVATION NUMBER: 0842-5484214</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
