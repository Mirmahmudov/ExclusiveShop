import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

const Cart = ({ cartMenu, cartDelete }) => {
  const [cartItems, setCartItems] = useState(
    cartMenu.map((item) => ({ ...item, quantity: item.quantity || 1 }))
  );

  useEffect(() => {
    window.scrollTo(10, 130);
  }, []);

  const handleQuantityChange = (id, quantity) => {
    const updatedItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: quantity < 1 ? 1 : quantity } : item
    );
    setCartItems(updatedItems);
  };

  const handleDelete = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    cartDelete(id);
  };

  const calculateSubtotal = (item) => {
    return (item.price.new * item.quantity).toFixed(2);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price.new * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <div className="cart">
        <div className="container">
          <div className="cart-link">
            <Link to="/" className="home">
              Home /
            </Link>{" "}
            Cart
          </div>

          <div className="productTitle">
            <h5>Product</h5>
            <h5 className="price-cart">Price</h5>
            <h5 className="quantity-cart">Quantity</h5>
            <h5 className="subtotal-cart">Subtotal</h5>
          </div>

          <div className="info-cart-block">
            {cartItems.map((item) => (
              <div key={item.id} className="product-info-cart">
                <div className="product-img-cart">
                  <span
                    onClick={() => handleDelete(item.id)}
                    className="delete-cart"
                  >
                    <TiDelete />
                  </span>
                  <img src={item.image} alt="" />
                  <h6>{item.title}</h6>
                </div>
                <div className="price-cart">
                  <h5>${item.price.new}</h5>
                </div>
                <div className="quantity-cart">
                  <input
                    type="number"
                    className="quantity"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.id,
                        parseInt(e.target.value) || 1
                      )
                    }
                  />
                </div>
                <div className="subtotal-cart">
                  <h5 className="subtotal">${calculateSubtotal(item)}</h5>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-btns">
            <button>Return To Shop</button>
            <button>Update Cart</button>
          </div>

          <div className="total-block">
            <div className="coupon-btn">
              <input type="text" placeholder="Coupon Code" />
              <button>Apply Coupon</button>
            </div>
            <div className="total-box">
              <h4>Cart Total</h4>
              <div className="total-subtotal">
                <p>subtotal:</p>
                <p>${calculateTotal()}</p>
              </div>
              <div className="ship-total">
                <p>Shipping:</p>
                <p>Free</p>
              </div>
              <div className="total-total">
                <p>Total:</p>
                <p>${calculateTotal()}</p>
              </div>
              <Link to="/checkout">
                <button className="total-btn">Proceed to checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
