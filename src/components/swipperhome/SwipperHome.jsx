import React, { useRef, useState } from 'react';
import "./SwipperHome.css"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwipperHome = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        //  onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="HomeSwiper"
      >
        <SwiperSlide>
          <div className="hero">
            <div className="hero-info">
              <div className="apple-logo">
                <img src="images/Apple.svg" alt="" />
                <h3>iPhone 14 Series</h3>
              </div>
              <h1>
                Up to 10% <br /> off Voucher
              </h1>
              <button>
                Shop Now <img src="images/showNow-arrow.svg" alt="" />{" "}
              </button>
            </div>

            <div className="hero-img">
              <img src="images/hero_endframe.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <div className="hero-info">
              <div className="apple-logo">
                <img src="images/Apple.svg" alt="" />
                <h3>iPhone 14 Series</h3>
              </div>
              <h1>
                Up to 10% <br /> off Voucher
              </h1>
              <button>
                Shop Now <img src="images/showNow-arrow.svg" alt="" />{" "}
              </button>
            </div>

            <div className="hero-img">
              <img src="images/hero_endframe.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <div className="hero-info">
              <div className="apple-logo">
                <img src="images/Apple.svg" alt="" />
                <h3>iPhone 14 Series</h3>
              </div>
              <h1>
                Up to 10% <br /> off Voucher
              </h1>
              <button>
                Shop Now <img src="images/showNow-arrow.svg" alt="" />{" "}
              </button>
            </div>

            <div className="hero-img">
              <img src="images/hero_endframe.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <div className="hero-info">
              <div className="apple-logo">
                <img src="images/Apple.svg" alt="" />
                <h3>iPhone 14 Series</h3>
              </div>
              <h1>
                Up to 10% <br /> off Voucher
              </h1>
              <button>
                Shop Now <img src="images/showNow-arrow.svg" alt="" />{" "}
              </button>
            </div>

            <div className="hero-img">
              <img src="images/hero_endframe.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <div className="hero-info">
              <div className="apple-logo">
                <img src="images/Apple.svg" alt="" />
                <h3>iPhone 14 Series</h3>
              </div>
              <h1>
                Up to 10% <br /> off Voucher
              </h1>
              <button>
                Shop Now <img src="images/showNow-arrow.svg" alt="" />{" "}
              </button>
            </div>

            <div className="hero-img">
              <img src="images/hero_endframe.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  )
}

export default SwipperHome
