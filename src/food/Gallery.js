import React from "react";

function Gallery() {
  return (
    <div className="section dark">
      <div className="jt-row row visible">
        <div className="col-md-12">
          <h2 className="section-title2">Gallery</h2>
        </div>
        <div className="col-md-12">
          <div className="section-subtitle">
           <p>
             If a picture says a thousand words, then you can imagine how long it
            would take to describe all our mouthwatering selections.
           </p>
          </div>
        </div>
        <div className="col-md-12">
            <nav className="primary">
                <ul>
                    <li><a className="selected" href="#">All Photos</a></li>
                    <li><a className="selected" href="#">Food</a></li>
                    <li><a className="selected" href="#">Restaurant</a></li>
                    <li><a className="selected" href="#">Desserts</a></li>
                </ul>
            </nav>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
