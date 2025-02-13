import React, { useEffect, useState } from "react";
import "./OneProduct.css";
import { Link, useParams } from "react-router-dom";

import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import Related from "../../components/related/Related";

const OneProduct = ({ products, related }) => {
  const { id } = useParams();

  const product = products.find((item) => item.id === parseInt(id));
  const [bigImg, setBigImg] = useState(product?.imgs[0]);
  const [count, setCount] = useState(1);
  const [isRed, setIsRed] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const handlePlusClick = () => {
    setCount(count + 1);
    setIsRed(true);
  };

  const handleMinusClick = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    setIsRed(false);
  };

  const totalPrice = (product?.price.new * count).toFixed(2);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    window.scrollTo(10, 140);
  }, []);

  return (
    <>
      <div className="oneproduct">
        <div className="container">
          <div className="links">
            <Link className="account" to="/account">
              Account <span>/</span>
            </Link>
            <Link className="gaming" to="/gaming">
              Gaming <span>/</span>
            </Link>
            <span>{product?.title}</span>
          </div>

          <div className="oneProduct">
            <div className="oneProduct-img">
              <div className="OneProduct-imgs">
                {product?.imgs.map((img) => (
                  <img
                    className="mini-img"
                    src={img}
                    alt=""
                    key={img}
                    onClick={() => {
                      setBigImg(img);
                    }}
                  />
                ))}
              </div>
              <div className="OneProduct-img">
                <img className="bigImg" src={bigImg} alt="" />
              </div>
            </div>
            <div className="oneProduct-info">
              <h2>{product?.title}</h2>
              <div className="stars">
                <img src="/public/images/Five star.svg" alt="" />
                <span>(150 Reviews)</span> |{" "}
                <span className="stock">In Stock</span>
              </div>
              <h1 className="onePrice">${totalPrice}</h1>
              <p className="desc">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>

              <h4 className="colours">
                <b>Colours:</b> <span className="green"></span>
                <span className="red"></span>
              </h4>

              <h2 className="size">
                <b>Size:</b>
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <span
                    key={size}
                    style={{
                      backgroundColor: selectedSize === size ? "red" : "white",
                      color: selectedSize === size ? "white" : "black",
                      cursor: "pointer",
                      padding: "5px 10px",
                      margin: "0 5px",
                    }}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </span>
                ))}
              </h2>

              <div className="buy">
                <div className="count">
                  <FaMinus className="minus" onClick={handleMinusClick} />
                  <span className="num">{count}</span>
                  <FaPlus
                    className="plus"
                    style={{
                      backgroundColor: isRed ? "red" : "transparent",
                      color: isRed ? "white" : "black",
                    }}
                    onClick={handlePlusClick}
                  />
                </div>
                <button className="buyBtn">Buy Now</button>
                <div className="heart">
                  <FaRegHeart className="heart-icon" />
                </div>
              </div>

              <div className="delivery">
                <div className="delivery-img">
                  <img src="/public/images/icon-delivery (1).svg" alt="" />
                  <div>
                    <h5>Free Delivery</h5>
                    <Link>
                      Enter your postal code for Delivery Availability
                    </Link>
                  </div>
                </div>
                <div className="return-img">
                  <img src="/public/images/Icon-return.svg" alt="" />
                  <div>
                    <h5>Return Delivery</h5>
                    <p>
                      Free 30 Days Delivery Returns. <Link>Details</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="related-section">
            <div className="container">
              <div className="month-title">
                <span className="month"></span>
                <h5>Related Item</h5>
              </div>
              <div className="cards">
                {related.map((product) => (
                  <Related key={product.id} product={product} bigImg={bigImg} setBigImg={setBigImg}/>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default OneProduct;
