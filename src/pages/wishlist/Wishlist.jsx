import React from "react";
import "./Wishlist.css";
import Product from "../../components/products/Product";
import { NavLink } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";

const Wishlist = ({ heartCart, salling, heratDelete }) => {
  return (
    <>
      <div className="wishlist">
        <div className="container">
          <div className="wishlist-info">
            <h4>Wishlist ({heartCart.length})</h4>
            <button>Move All To Bag</button>
          </div>

          <div className="wishlist-card">
            {heartCart.map((product) => {
              return (
                <div key={product.id} className="card">
                  <div className="card-img">
                    {product.sale && (
                      <span className="sale">-{product.sale}%</span>
                    )}
                    <span
                      onClick={() => {
                        heratDelete(product.id);
                      }}
                      className="cart-delete"
                    >
                      <AiTwotoneDelete className="delete-icon" />
                    </span>

                    <NavLink to={`/oneproduct/${product.id}`}>
                      <img src={product.image} alt="" />
                    </NavLink>
                    <button
                      onClick={() => {
                        addCart(product.id);
                      }}
                      className="card-btn"
                    >
                      Add To Cart
                    </button>
                  </div>
                  <div className="card-info">
                    <h4>{product.title}</h4>
                    <div className="price">
                      <p className="newProduct">${product.price.new}</p>
                      {product.price.old && (
                        <p className="oldProduct">${product.price.old}</p>
                      )}
                    </div>
                    <div className="star">
                      <img src="images/Five star.svg" alt="" />
                      (88)
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="wishlist-title">
            <div className="month-title">
              <span className="month"></span>
              <h5>Just For You</h5>
            </div>
            <button>See All</button>
          </div>

          <div className="cards">
            {salling.map((item) => {
              return <Product key={item.id} product={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
