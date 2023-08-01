import React from "react";
import { Link, useNavigate } from "react-router-dom";
import IsNotAuthenticate from "../../redirect/IsNotAuthenticate";

const Signup = () => {
  const navigate = useNavigate();

  const handSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <IsNotAuthenticate>
    <div className="login-dark">
      <form onSubmit={handSubmit} method="post" className="container">
        <h2 className="sr-only">Sign In</h2>

        <div className="form-group mt-4">
          <input
            autoComplete="off"
            className="form-control"
            type="number"
            name="phone"
            placeholder="Phone"
          />
        </div>

        <div className="form-group mt-2 d-flex">
          <input
            autoComplete="off"
            className="form-control"
            type="text"
            name="otp"
            placeholder="OTP"
          />

          <button className="btn btn-primary">OTP</button>
        </div>

        <div className="form-group mt-2">
          <input
            autoComplete="off"
            className="form-control"
            type="password"
            name="password"
            placeholder="Create Password"
          />
        </div>

        <div className="form-group mt-2">
          <input
            autoComplete="off"
            className="form-control"
            type="text"
            name="referCode"
            placeholder="Referal Code"
          />
        </div>
        <div className="form-group mt-4">
          <button className="btn btn-primary btn-block" type="submit">
            Sign Up
          </button>
        </div>

        <Link to={"/signin"} className="signIn_SignUp">
          Already have an account? <span>Sign In</span>
        </Link>
      </form>
    </div>
    </IsNotAuthenticate>
  );
};

export default Signup;
