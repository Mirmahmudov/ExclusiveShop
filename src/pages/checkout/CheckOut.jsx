import React, { useEffect, useState } from "react";
import "./CheckOut.css";
import { Link } from "react-router-dom";

const CheckOut = ({ cartMenu }) => {
  const [cartItems, setCartItems] = useState(
    cartMenu.map((item) => ({ ...item, quantity: 1 }))
  );

  useEffect(() => {
    window.scrollTo(10, 270);
  }, []);

  // Narxni hisoblash uchun funksiyalar
  const calculateSubtotal = (item) => {
    return (item.price.new * (item.quantity || 1)).toFixed(2);
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price.new * (item.quantity || 1), 0)
      .toFixed(2);
  };

  return (
    <div>
      <div className="checkout">
        <div className="container">
          <div className="cart-link">
            <Link to="/account">Account /</Link>
            <Link to="/account"> My Account /</Link>
            <Link to="/cart"> Product /</Link>
            <Link to="/cart"> View Cart /</Link>
            CheckOut
          </div>

          <div className="details">
            <div>
              <h1>Billing Details</h1>
              <form>
                <label>First Name*</label>
                <br />
                <input type="text" />
                <br />
                <br />

                <label>Company Name</label>
                <br />
                <input type="text" />
                <br />
                <br />

                <label>Street Address*</label>
                <br />
                <input type="text" />
                <br />
                <br />

                <label>Apartment, floor, etc. (optional)</label>
                <br />
                <input type="text" />
                <br />
                <br />

                <label>Town/City*</label>
                <br />
                <input type="text" />
                <br />
                <br />

                <label>Phone Number*</label>
                <br />
                <input type="text" />
                <br />
                <br />

                <label>Email Address*</label>
                <br />
                <input type="email" />
                <br />
                <br />

                <div className="checkBox">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <label htmlFor="checkbox">
                    Save this information for faster check-out next time
                  </label>
                </div>
              </form>
            </div>

            <div className="checkout-buy">
              <div className="checkout-card">
                {cartItems.map((item, index) => (
                  <div key={index} className="img-price">
                    <div>
                      <img src={item.image} alt={item.title} />
                      <h5>{item.title}</h5>
                    </div>
                    <h6>${calculateSubtotal(item)}</h6>
                  </div>
                ))}
              </div>

              <div className="checkout-subtotal">
                <h6>Subtotal:</h6>
                <h6>${calculateTotal()}</h6>
              </div>
              <div className="checkout-subtotal">
                <h6>Shipping:</h6>
                <h6>Free</h6>
              </div>
              <div className="checkout-total">
                <h6>Total:</h6>
                <h6>${calculateTotal()}</h6>
              </div>

              <div className="bank">
                <div className="radio-bank">
                  <div>
                    <input type="radio" name="paymentMethod" id="bank" />
                    <label htmlFor="bank">Bank</label>
                  </div>
                </div>
                <div className="bank-card">
                  <img src="/public/images/Bkash-card.svg" alt="Bkash" />
                  <img src="/public/images/Visa.svg" alt="Visa" />
                  <img src="/public/images/Mastercard.svg" alt="Mastercard" />
                  <img src="/public/images/Nagad-card.svg" alt="Nagad" />
                </div>
              </div>

              <div className="delevery-radio">
                <input type="radio" name="paymentMethod" id="cash" />
                <label htmlFor="cash">Cash on delivery</label>
              </div>

              <div className="coupon-btns">
                <input type="text" placeholder="Coupon Code" />
                <button>Apply Coupon</button>
              </div>
              <button className="placeOrder">Place Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
