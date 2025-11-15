import React from "react";
function Maps() {
  return (
    <div className="section dark maps-wrapper">
            <div className="row">
        <div className="col-md-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9081.559728398719!2d72.81539559904972!3d21.157684281723327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1751688950881!5m2!1sen!2sin"
            width="1897"
            height="627"
            className="custom-map"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
      </div>
      </div>
    </div>
  );
}

export default Maps;
