import React, { useEffect, useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login({ setToken}) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(10, 180);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      email_or_phone: email,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("https://ecommercev01.pythonanywhere.com/user/token/", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.non_field_errors) {
          console.log(result);
          toast.error(result.non_field_errors[0]);
        } else if (result.access) {
          toast.success("Logged in successfully!");
          localStorage.setItem("token", result.access);
          navigate("/")
          setToken(localStorage.getItem("token"));
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoader(false));
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      <div className="login">
      {
        loader && <div className="loading"><div className="loader"></div></div>
      }
        <div className="container">
          <div className="login-img">
            <img src="images/Sign Image.png" alt="" />
          </div>
          <div className="login">
            <h1>Log in to Exclusive</h1>
            <p>Enter your details below</p>

            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Email or Phone Number"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="password-login">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Password"
                  // value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
                <span
                  className="password-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>

              <div className="loginbtn">
                <button type="submit">Log In</button>
                <a href="">Forget Password?</a>
                <Link to="/signup" className="signup">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
