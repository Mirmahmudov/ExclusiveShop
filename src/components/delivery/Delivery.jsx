import React from "react";
import "aos/dist/aos.css";
import Aos from "aos";

function Delivery() {
  Aos.init();
  return (
    <div>
      <section className="section-delivery">
        <div className="container">
          <div className="delive">
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-anchor-placement="center-bottom"
              className="delive-img"
            >
              <img src="/public/images/icon-delivery.svg" alt="" />
            </div>
            <h2>FREE AND FAST DELIVERY</h2>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="headset">
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-anchor-placement="center-bottom"
              className="headset-img"
            >
              <img src="/public/images/Icon-Customer.svg" alt="" />
            </div>
            <h2>24/7 CUSTOMER SERVICE</h2>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="secure">
            <div
              data-aos="fade-up"
              data-aos-duration="2500"
              data-aos-anchor-placement="center-bottom"
              className="secure-img"
            >
              <img src="/public/images/Icon-secure.svg" alt="" />
            </div>
            <h2>MONEY BACK GUARANTEE</h2>
            <p>We reurn money within 30 days</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Delivery;
