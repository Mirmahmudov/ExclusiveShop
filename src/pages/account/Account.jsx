import React, { useEffect, useState } from "react";
import "./Account.css";
import { Link } from "react-router-dom";

const Account = ({ userAccount }) => {

  
  useEffect(() => {
    window.scrollTo(100, 150);
  }, []);

  return (
    <div>
      <div className="account">
        <div className="container">
          <div className="account-link">
            <div>
              <Link to="/" className="home">
                {" "}
                Home /{" "}
              </Link>
              My Account
            </div>
            <div>
              Welcome! <span>Md Rimel</span>
            </div>
          </div>

          <div className="account-info">
            <div className="catagory-text">
              <div className="manage">
                <h4>Manage My Account</h4>
                <Link>My Profile</Link>
                <br />
                <Link>Address Book</Link>
                <br />
                <Link>My Payment Options</Link>
                <br />
              </div>

              <div className="order">
                <h4>Manage My Account</h4>
                <Link>My Returns</Link>
                <br />
                <Link>My Cancellations</Link>
                <br />
              </div>
              <h4>My WishList</h4>
            </div>

            <div className="account-form">
              <h2>Edit Your Profile</h2>
              <form action="">
                <div className="first-input">
                  <div>
                    <label htmlFor="name">First Name</label>
                    <br />
                    <input
                      type="text"
                      id="name"
                      value={userAccount?.first_name}
                      placeholder="Enter Your First Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="last">Last Name</label>
                    <br />
                    <input
                      type="text"
                      id="last"
                      value={userAccount?.last_name}
                      placeholder="Ener Your Last Name"
                    />
                  </div>
                </div>

                <div className="email-input">
                  <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="email"
                      id="email"
                      value={userAccount?.email_or_phone}
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div>
                    <label htmlFor="address">Address</label>
                    <br />
                    <input
                      type="map"
                      id="address"
                      value={userAccount?.address}
                      placeholder="Enter Your Address"
                    />
                  </div>
                </div>

                <label htmlFor="">Password Changes</label>
                <br />
                <input
                  className="current-pass"
                  type="password"
                  placeholder="Current Passwod"
                />
                <br />
                <input
                  className="new-pass"
                  type="password"
                  placeholder="New Passwod"
                />
                <br />
                <input
                  className="confirm-new-pass"
                  type="password"
                  placeholder="Confirm New Passwod"
                />
                <br />

                <div className="account-btn">
                  <Link>Cancel</Link>
                  <button>Save Changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
