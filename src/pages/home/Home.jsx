import React, { useEffect } from "react";
import "./Home.css";

import { IoCameraOutline, IoHeadsetOutline } from "react-icons/io5";
import { IoIosPhonePortrait } from "react-icons/io";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { BsSmartwatch } from "react-icons/bs";
import { GrGamepad } from "react-icons/gr";
import Product from "../../components/products/Product";
import "aos/dist/aos.css";
import Delivery from "../../components/delivery/Delivery";

import Explore from "../../components/products/Explore";
import Aos from "aos";
import Swipper from "../../components/swipper/Swipper";
import SwipperHome from "../../components/swipperhome/SwipperHome";
import SellectHome from "../../components/selectHome/SellectHome";
import SellectMen from "../../components/selectHome/SellectMen";

function Home({ products, salling, explore, addCart, addHeart }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  Aos.init();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="home">
        <div className="container">
          <div className="menu">
            <ul>
                <SellectHome/> <br /><br />
                <SellectMen/>
              <li>Electronics</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby’s & Toys</li>
              <li>Groceries & Pets</li>
              <li>Health & Beauty</li>
            </ul>
          </div>
          <SwipperHome/>
          {/* <div className="hero">
            <div className="hero-info">
              <div className="apple-logo">
                <img src="./public/images/Apple.svg" alt="" />
                <h3>iPhone 14 Series</h3>
              </div>
              <h1>
                Up to 10% <br /> off Voucher
              </h1>
              <button>
                Shop Now <img src="./public/images/showNow-arrow.svg" alt="" />{" "}
              </button>
            </div>

            <div className="hero-img">
              <img src="./public/images/hero_endframe.png" alt="" />
            </div>
          </div> */}
        </div>
      </div>

      <section className="flash-sales">
        <div className="container">
          
          
          <Swipper products={products} addCart={addCart} addHeart={addHeart} />

          <div className="cards-btn">
            <button>View All Products</button>
          </div>
        </div>
      </section>

      <section className="section-catagory">
        <div className="container">
          <div data-aos="fade-right" className="caragory">
            <h5>Caragories</h5>
          </div>
          <div className="caragory-title">
            <h1 data-aos="fade-right">Browse By Category</h1>
            {/* <div className="arrows">
              <img src="./public/images/left-arrow.svg" alt="" />
              <img src="./public/images/right-arrow.svg" alt="" />
            </div> */}
          </div>
          <div className="block">
            <div className="box">
              <IoIosPhonePortrait className="box-icon" />
              <h5>Phones</h5>
            </div>
            <div className="box">
              <HiOutlineComputerDesktop className="box-icon" />
              <h5>Computers</h5>
            </div>
            <div className="box">
              <BsSmartwatch className="box-icon" />
              <h5>SmartWatch</h5>
            </div>
            <div className="box">
              <IoCameraOutline className="box-icon" />
              <h5>Camera</h5>
            </div>
            <div className="box">
              <IoHeadsetOutline className="box-icon" />
              <h5>HeadPhones</h5>
            </div>
            <div className="box">
              <GrGamepad className="box-icon" />
              <h5>Gaming</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="section-product">
        <div className="container">
          <div data-aos="fade-right" className="month-title">
            <span className="month"></span>
            <h5>This Month</h5>
          </div>

          <div className="product-title">
            <h1 data-aos="fade-right">Best Selling Products</h1>
            <button>View All</button>
          </div>
          <div className="cards">
            {salling.map((item) => {
              return (
                <Product
                  addCart={addCart}
                  addHeart={addHeart}
                  key={item.id}
                  product={item}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-music">
        <div className="container">
          <div className="music-info">
            <p className="catagory">Categories</p>
            <h1 className="title">
              Enhance Your <br /> Music Experience
            </h1>
            <div className="music-time">
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="hours"
              >
                <h3>23</h3>
                <p>Hours</p>
              </div>

              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="days"
              >
                <h3>05</h3>
                <p>Days</p>
              </div>

              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="minuts"
              >
                <h3>59</h3>
                <p>Minutes</p>
              </div>

              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                className="secunds"
              >
                <h3>35</h3>
                <p>Seconds</p>
              </div>
            </div>
            <button className="music-btn">Buy Now!</button>
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="music-img"
          >
            <img src="/public/images/music-img.png" alt="" />
          </div>
        </div>
      </section>

      <section className="explore-products">
        <div className="container">
          <div data-aos="fade-right" className="explore-title">
            <span className="explore"></span>
            <h5>Our Products</h5>
          </div>
          <div className="caragory-title">
            <h1 data-aos="fade-right">Explore Our Products</h1>
            {/* <div className="arrows">
              <img src="./public/images/left-arrow.svg" alt="" />
              <img src="./public/images/right-arrow.svg" alt="" />
            </div> */}
          </div>

          <div className="explore-cards">
            {explore.map((item) => {
              return (
                <Explore
                  addCart={addCart}
                  addHeart={addHeart}
                  key={item.id}
                  item={item}
                />
              );
            })}
          </div>
          <div className="cards-btn">
            <button>View All Products</button>
          </div>
        </div>
      </section>

      <section className="section-arrival">
        <div className="container">
          <div data-aos="fade-right" className="explore-title">
            <span className="explore"></span>
            <h5>Featured</h5>
          </div>
          <h1 data-aos="fade-right" className="arrival-title">
            New Arrival
          </h1>

          <div className="arrival-cards">
            <div data-aos="fade-right"
            data-aos-duration="2000"
             className="playsation">
              <img src="./public/images/playsation.png" alt="" />
              <div className="playation-info">
                <h3>Playstation 5</h3>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <a className="playation-btn" href="">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="womens-bolck">
              <div data-aos="fade-left"
              data-aos-duration="2000"
               className="women">
                <img src="/public/images/woman's.png" alt="" />
                <div className="women-info">
                  <h3>Women’s Collections</h3>
                  <p>Featured woman collections that give you another vibe.</p>
                  <a href="">Shop Now</a>
                </div>
              </div>
              <div className="speaker-parfume">
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                  data-aos-duration="2000"
                  className="speaker"
                >
                  <img src="/public/images/speakers.png" alt="" />
                  <div className="speaker-info">
                    <h3>Speakers</h3>
                    <p>Amazon wireless speakers</p>
                    <a href="">Shop Now</a>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="top-center"
                  data-aos-duration="2000"
                  className="parfume"
                >
                  <img src="/public/images/parfume.png" alt="" />
                  <div className="parfume-info">
                    <h3>Perfume</h3>
                    <p>GUCCI INTENSE OUD EDP</p>
                    <a href="">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Delivery />
      <section className="section-top">
        <div className="top-btn" onClick={scrollToTop}>
          <img src="/public/images/Animation - top.gif" alt="Scroll to top" />
        </div>
      </section>
    </>
  );
}

export default Home;
