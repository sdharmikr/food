import React from "react";

function Contact() {
  return (
    <div className="section contact dark">
      <div className="container">
        <div className="row visible">
          <div className="col-md-12">
            <h2 className="section-title2 mb-5">Contact</h2>
          </div>
          <div className="col-md-12">
            <div class="section-subtitle mb-5">
              W325 State Road 123 Mondovi, WI (Wisconsin) 98746-54321
            </div>
          </div>
          <form>
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <input type="text" id="name" name="name" placeholder="Name" />
                  <input type="text" id="email" name="email" placeholder="Email" />
                  <input type="text" id="subject" name="subject" placeholder="Subject" />
                </div>

                <div className="col-md-6">
                     <textarea id="message" name="message" placeholder="Message" rows={10} defaultValue={""} />
                </div>
                <div className="col-md-12">
             <input type="submit" className="button contact center" defaultValue="Submit" />

                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
