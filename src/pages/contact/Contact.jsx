import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div className="contact-block">
        <div className="container">
          <div className="link-con">
            <Link to="/" className="home-con">
              Home
            </Link>{" "}
            /<Link to="/contact">Contact</Link>
          </div>

          <div className="contacts">
            <div className="contact-left">
              <div className="call-info">
                <img src="images/call.svg" alt="" />
                <h5>Call To Us</h5>
              </div>
              <p className="manzil">We are available 24/7, 7 days a week.</p>
              <p className="call-numer">Phone: +998934434742</p>
              <hr />
              <div className="email-info">
                <img src="images/mail.svg" alt="" />
                <h5>Write To US</h5>
              </div>
              <p className="email-p">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="email-p">Emails: xusanboyev03@inbox.ru</p>
              <p className="email-p">Emails: xusanboyevomadbek04@gmail.com</p>
            </div>
            <div className="contact-right">
              <form>
                <div>
                  <input type="text" placeholder="Your Name *" />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email *"
                  />
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone *"
                  />
                </div>
                <textarea
                  name="message"
                  id="message"
                  rows={10}
                  placeholder="Your Message *"
                ></textarea>

                <div className="sentBtn">
                  <button type="submit">Send Massage</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
