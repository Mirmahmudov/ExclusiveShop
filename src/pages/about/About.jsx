import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Delivery from "../../components/delivery/Delivery";

function About() {
  return (
    <div>
      <div className="about">
        <div className="container">
          <section className="story-section">
            <div className="link">
              <Link to="/" className="home">
                Home
              </Link>{" "}
              /<Link to="/about">About</Link>
            </div>

            <div className="story">
              <div className="sort-text">
                <h1>Our Story</h1>
                <p>
                  Launced in 2015, Exclusive is South Asia’s premier online
                  shopping makterplace with an active presense in Bangladesh.
                  Supported by wide range of tailored marketing, data and
                  service solutions, Exclusive has 10,500 sallers and 300 brands
                  and serves 3 millioons customers across the region. <br />
                  <br />
                  Exclusive has more than 1 Million products to offer, growing
                  at a very fast. Exclusive offers a diverse assotment in
                  categories ranging from consumer.
                </p>
              </div>
              <div className="story-img">
                <img src="images/story Image.png" alt="" />
              </div>
            </div>
          </section>

          <section className="reyting-section">
            <div className="container">
              <div className="reyting">
                <div className="boxs">
                  <div className="boxs-img">
                    <img
                      className="imgs"
                      src="images/icon_shop.svg"
                      alt=""
                    />
                  </div>
                  <h1>10.5k </h1>
                  <p>Sallers active our site</p>
                </div>

                <div className="boxs">
                  <div className="boxs-img">
                    <span></span>
                    <img
                      className="money"
                      src="images/Icon-money.svg"
                      alt=""
                    />
                  </div>
                  <h1>33k</h1>
                  <p>Mopnthly Produduct Sale</p>
                </div>

                <div className="boxs">
                  <div className="boxs-img">
                    <img
                      className="imgs"
                      src="images/Icon-Shopping bag.svg"
                      alt=""
                    />
                  </div>
                  <h1>45.5k</h1>
                  <p>Customer active in our site</p>
                </div>

                <div className="boxs">
                  <div className="boxs-img">
                    <img
                      className="imgs"
                      src="images/Icon-Moneybag (1).svg"
                      alt=""
                    />
                  </div>
                  <h1>25k</h1>
                  <p>Anual gross sale in our site</p>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section">
            <div className="container">
              <div className="abouts">
                <div className="about-them">
                  <img src="images/about-img1.png" alt="" />
                  <div className="about-info">
                    <h3>Tom Cruise</h3>
                    <p>Founder & Chairman</p>
                    <div className="social-about">
                      <a href="">
                        <img src="images/twiiter.svg" alt="" />
                      </a>
                      <a href="">
                        <img src="images/instagram.svg" alt="" />
                      </a>
                      <a href="">
                        <img src="images/linkedin.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="about-them">
                  <img src="images/about-img2.png" alt="" />
                  <div className="about-info">
                    <h3>Tom Cruise</h3>
                    <p>Founder & Chairman</p>
                    <div className="social-about">
                      <a href="">
                        <img src="images/twiiter.svg" alt="" />
                      </a>
                      <a href="">
                        <img src="images/instagram.svg" alt="" />
                      </a>
                      <a href="">
                        <img src="images/linkedin.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="about-them">
                  <img src="images/about-img.png" alt="" />
                  <div className="about-info">
                    <h3>Tom Cruise</h3>
                    <p>Founder & Chairman</p>
                    <div className="social-about">
                      <a href="">
                        <img src="images/twiiter.svg" alt="" />
                      </a>
                      <a href="">
                        <img src="images/instagram.svg" alt="" />
                      </a>
                      <a href="">
                        <img src="images/linkedin.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Delivery />
        </div>
      </div>
    </div>
  );
}

export default About;
