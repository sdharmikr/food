import React from "react";

function Menu2() {
  return (
    <div>
      <div className="section menu">
        <div className="container">
          <div className=" row visible">
            <div className="col-md-12">
              <div className="voffset100"></div>
              <img
                className="center"
                src="https://i.postimg.cc/VkVr5xCs/menu-logo.png"
              />
              <div className="voffset100"></div>
            </div>
            <div className="col-md-4">
              <h3>Prime Steaks</h3>
              <ul>
                <li>
                  Filet
                  <div className="detail">
                    7 oz. Center Cut10 oz. Double cut
                    <span className="price">$14.49</span>
                  </div>
                </li>

                <li>
                  Boine in filet
                  <div className="detail">
                    10 oz Greg Norman Ranch, Australia
                    <span className="price">$20.50</span>
                  </div>
                </li>

                <li>
                  New York Strip
                  <div className="detail">
                    9 oz. Center Cut12 oz. Double cut ozx
                    <span className="price">$9.99</span>
                  </div>
                </li>

                <li>
                  Porterhouse
                  <div className="detail">
                    7 oz. Center Cut10 oz. Double cut
                    <span className="price">$7.99</span>
                  </div>
                </li>

                <li>
                  Delmonico
                  <div className="detail">
                    10 oz Greg Norman Ranch, Australia
                    <span className="price">$17.99</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Drinks &amp; Wines</h3>
              <ul>
                <li>
                  Raimat Abadia
                  <div class="detail">
                    Complex, Dark Cherry, Spice, bodied
                    <span class="price">$8.50</span>
                  </div>
                </li>
                <li>
                  Eden Chardonnay
                  <div class="detail">
                    Elegant, Lemon, Vanilla, bodied
                    <span class="price">$15.50</span>
                  </div>
                </li>
                <li>
                  Mailly Brut Reserva
                  <div class="detail">
                    Dry, Toast, Citrus, Medium-bodied{" "}
                    <span class="price">$17.50</span>
                  </div>
                </li>
                <li>
                  Leon V de Armenia
                  <div class="detail">
                    Crisp, Citrus, Full-bodied<span class="price">$12.50</span>
                  </div>
                </li>
                <li>
                  Caberenet Sauvignon
                  <div class="detail">
                    Intense, Cherry, Chocolate, Full-bodied
                    <span class="price">$30.50</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Desserts</h3>
              <ul>
                <li>
                  Creme Brulee
                  <div class="detail">
                    Creme Anglaise, Vanilla Bean Ice Cream{" "}
                    <span class="price">$7.49</span>
                  </div>
                </li>
                <li>
                  Warm chocolate
                  <div class="detail">
                    Amarena Cherries, Kirsch Cream
                    <span class="price">$6.50</span>
                  </div>
                </li>
                <li>
                  Cheese cake
                  <div class="detail">
                    Cheese creme, ice cream, strawberry{" "}
                    <span class="price">$4.50</span>
                  </div>
                </li>
                <li>
                  Apple Turnover
                  <div class="detail">
                    Creme Anglaise, Vanilla Bean Ice Cream
                    <span class="price">$7.99</span>
                  </div>
                </li>
                <li>
                  Sorbet with fruit
                  <div class="detail">
                    Lemon, organge, strawberry or mango
                    <span class="price">$8.50</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <a className="button menu">View Complete Menu</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu2;
