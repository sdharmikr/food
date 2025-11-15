import React from "react";

function Footer() {
  return (
    <div className="section" id="footer" role="cotentinfo">
      <div className="container">
        <ul className="social">
          <li>
            <a href="#" className="icon tw">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icon fb">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icon in">
              <i class="fa-brands fa-pinterest"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icon go">
              <i class="fa-brands fa-google-plus-g"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
