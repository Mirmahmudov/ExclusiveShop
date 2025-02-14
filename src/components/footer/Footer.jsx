import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="footer-info">
            <div className="exclusive">
              <h3>Exclusive</h3>
              <h4>Subscribe</h4>
              <p>Get 10% off your first order</p>
              <div className="footer-email">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
                <img src="images/footer-email-icon.svg" alt="" />
              </div>
            </div>

            <div className="support">
              <h3>Support</h3>
              <p>
                111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
              </p>
              <p>xusanboyev03@inbox.ru</p>
              <p>+998(93)443_47_42</p>
            </div>

            <div className="account">
              <h3>Account</h3>
              <p>My Account</p>
              <p>Login / Register</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Shop</p>
            </div>

            <div className="quick">
              <h3>Quick Link</h3>
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>

            <div className="payment">
              <h3>Download App</h3>
              <p>Save $3 with App New User Only</p>
              <div className="pay">
                <img src="images/Qr Code.png" alt="" />
                <div className="apps">
                  <img src="images/google-play.png" alt="" />
                  <img src="images/download-appstore.png" alt="" />
                </div>
              </div>
              <div className="socials">
                <div className="icon facebook">
                  <div className="tooltip">Facebook</div>
                  <span>
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100095231617106"
                    >
                      <FaFacebookF />
                    </a>
                  </span>
                </div>

                <div className="icon twitter">
                  <div className="tooltip">Twitter</div>
                  <span>
                    <a target="_blank" href="#">
                      <FaXTwitter />
                    </a>
                  </span>
                </div>

                <div className="icon instagram">
                  <div className="tooltip">Instagram</div>
                  <span>
                    <a
                      target="_blank"
                      href="#"
                    >
                      <FaInstagram />
                    </a>
                  </span>
                </div>

                <div className="icon linkedin">
                  <div className="tooltip">Linkedin</div>
                  <span>
                    <a
                      target="_blank"
                      href="#"
                    >
                      <FaLinkedinIn />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright">
            <h4>
              © Copyright Asadbek<span>Mirmahmudov</span> 2024. All right reserved
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
