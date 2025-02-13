import React from "react";
import "./Navabar.css";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { FiUser, FiShoppingBag } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { TbLogout2 } from "react-icons/tb";

function Navbar({ cartMenu, heartCart, token, setToken }) {
  const cartNum = () => {
    if (cartMenu.length > 0) {
      return <span className="cart_num">{cartMenu.length}</span>;
    }
  };
  const heartNum = () => {
    if (heartCart.length > 0) {
      return <span className="heart_num">{heartCart.length}</span>;
    }
  };
  const userNav = () => {
    const accountMenu = document.querySelector(".account_menu");
    accountMenu.classList.toggle("active");
  };

  return (
    <div>
      <nav>
        <div className="nav-top">
          <div className="container">
            <div></div>
            <div className="text">
              <h6>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </h6>
              <a href="#">ShowNow</a>
            </div>
            <div>
              <select name="" id="">
                <option value="English">English</option>
                <option value="Russia">Russia</option>
                <option value="Uzbek">Uzbek</option>
              </select>
            </div>
          </div>
        </div>

        <div className="nav-bottom">
          <div className="container">
            <Link to="/" className="logo">
              Exclusive
            </Link>
            <ul className="links">
              <li>
                <NavLink to="/" className="home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign Up</NavLink>
              </li>
            </ul>

            <div className="search-div">
              <div className="search">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="What are you looking for? "
                />
                <IoIosSearch className="search-icon" />
              </div>

              <div className="shop-icons">
                <div className="heart-cart">
                  {heartNum()}
                  <Link to="/wishlist">
                    <FaRegHeart className="heart" />
                  </Link>
                </div>
                <div className="cart-num">
                  {cartNum()}
                  <Link to="/cart">
                    <IoCartOutline className="cart" />
                  </Link>
                </div>
                {
                  token ? <div className="user_link">
                  <FiUser
                    onClick={() => {
                      userNav();
                    }}
                    className="user_nav"
                  />
                  <div className="account_menu">
                    <div>
                      <FiUser className="menu-icon" />
                      <Link to="/account">Manage My Account</Link>
                    </div>

                    <div>
                      <FiShoppingBag className="menu-icon" />
                      <Link>My Order</Link>
                    </div>

                    <div>
                      <MdOutlineCancel className="menu-icon" />
                      <Link>My Cancellations</Link>
                    </div>

                    <div>
                      <FaRegStar className="menu-icon" />
                      <Link>My Reviews</Link>
                    </div>

                    <div onClick={()=>{
                        localStorage.clear()
                        setToken(null)
                      }}>
                      <TbLogout2 className="menu-icon" />
                      <Link>Logout</Link>
                    </div>
                  </div>
                </div>:""
                }  
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
