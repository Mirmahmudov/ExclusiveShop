import React, { useEffect, useState } from "react";
import "./SignUp.css";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    window.scrollTo(10, 180);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      first_name: name,
      email_or_phone: email,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://ecommercev01.pythonanywhere.com/user/register/",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.message) {
          console.log(result);
          toast.success("Muvoffaqiyatli ro'yhatdan o'tdingiz!");
          navigate("/login");
        }else {
          toast.error("Bu account oldin ro'yhatdan o'tgan!");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("Failed to create an account!");
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
      <div className="signup">
      {
        loader && <div className="loading"><div className="loader"></div></div>
      }
        <div className="container">
          <div className="sign-img">
            <img src="images/Sign Image.png" alt="" />
          </div>
          <div className="sign">
            <h1>Create an account</h1>
            <p>Enter your details below</p>

            <form onSubmit={handleSubmit}>
              <input
                className="name"
                type="text"
                name="name"
                placeholder="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email or Phone Number"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <div className="password-sign">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="password-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              <button className="btn" type="submit">
                Create Account
              </button>
              <button className="google" type="button">
                <FcGoogle className="icon" />
                Sign up with Google
              </button>
            </form>
            <div className="or">
              <p>Already have an account?</p>
              <Link to="/login">Log in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
