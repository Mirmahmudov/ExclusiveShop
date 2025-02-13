import React from "react";
import "./Related.css";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";

function Related({ product, setBigImg }) {
  const { new: newPrice, old: oldPrice } = product.price;
  return (
    <div>
      <div className="related-cards">
        <div className="card">
          <div className="card-img">
            {product.sale && <span className="sale">-{product.sale}%</span>}
            <span className="card-heart">
              <FaRegHeart />
            </span>
            <span className="card-eye">
              <IoEyeOutline />
            </span>

            <NavLink to={`/oneproduct/${product.id}`}>
              <img src={product.image} alt="" onClick={()=>{
                setBigImg(product.image)
              }}/>
            </NavLink>
            <button className="card-btn">Add To Cart</button>
          </div>
          <div className="card-info">
            <h4>{product.title}</h4>
            <div className="price">
              <p className="new">${newPrice}</p>
              {oldPrice && <p className="old">${oldPrice}</p>}
            </div>
            <div className="star">
              <img src="/public/images/Five star.svg" alt="" />
              (88)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Related;
