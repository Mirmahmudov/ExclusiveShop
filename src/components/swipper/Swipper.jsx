import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Swipper.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Product from "../products/Product";

const Swipper = ({ products, addCart, addHeart }) => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >


        <div className="fresh-time">
        <div className="todays">
            <h5>Today's</h5>
          </div>

          <div className="sale-times">
            <div className="sale">
              <h1>Flash Sales</h1>

              <div className="time">
                <div className="days">
                  <span>Days</span>
                  <div>03</div>
                </div>
                <span className="doc">:</span>
                <div className="hours">
                  <span>Hours</span>
                  <div>23</div>
                </div>
                <span className="doc">:</span>
                <div className="min">
                  <span>Minutes</span>
                  <div>19</div>
                </div>
                <span className="doc">:</span>
                <div className="sec">
                  <span>Seconds</span>
                  <div>56</div>
                </div>
              </div>
            </div>
            <div className="arrows">
              
            </div>
          </div>
        </div>
        <div  className="cards">
          {products?.map((product) => (
            <SwiperSlide>
              <Product
                key={product.id}
                addCart={addCart}
                addHeart={addHeart}
                product={product}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
};

export default Swipper;
