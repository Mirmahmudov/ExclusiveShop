import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

const Explore = ({ item, addCart, addHeart }) => {
  return (
    <div>
      <div key={item.id} className="card">
        <div className="card-img">
          {item.new ? <span className="new-sale">New</span> : ""}
          <span onClick={() => addHeart(item.id)} className="card-heart">
            <FaRegHeart />
          </span>
          <span className="card-eye">
            <IoEyeOutline />
          </span>

          <Link to={`/oneproduct/${item.id}`}>
            <img src={item.image} alt="" />
          </Link>
          <button
            onClick={() => {
              addCart(item.id);
            }}
            className="card-btn"
          >
            Add To Cart
          </button>
        </div>
        <div className="card-info">
          <h4>{item.title}</h4>
          <div className="card-star">
            <p className="price">${item.price?.new ? item.price?.new : ""}</p>
            <img src="/public/images/Three Star.svg" alt="" />
            (35)
          </div>
          <div className="colors">
            {item.colors && (
              <>
                <span>
                  <img src={item.colors.color} alt="First color" />
                </span>
                <span>
                  <img src={item.colors.color2} alt="Second color" />
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
