import React, { useContext, useEffect } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signinSchema } from "../../validation/auth";
import { AppContext } from "../../context/AppContext";
import { baseURL, dbObject } from "../../helper/constant";
import axios from "axios";

const initialValues = {
  phone: "",
  password: "",
};
const Signin = () => {
  const { user, setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signinSchema,
      onSubmit: async () => {
        setUser(true)
        // try {
        //   const {data} = await axios.post(baseURL+'/power-x/apis/users/login.php', values)
        // console.log(data)
        // } catch (error) {
        //   console.log(error)
        // }

       
      },
    });

  useEffect(() => {
    if (user) return navigate("/");
  }, [user]);
  return (
    <div className="login-dark">
      <form onSubmit={handleSubmit} method="post" className="container">
        <h2 className="sr-only">Sign In</h2>

        <div className="form-group mt-4">
          <input
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            className="form-control"
            type="number"
            name="phone"
            placeholder="Phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.phone && touched.phone ? (
            <small style={{ color: "red" }}>{errors.phone}</small>
          ) : null}
        </div>

        <div className="form-group mt-2">
          <input
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
            className="form-control"
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.password && touched.password ? (
            <small style={{ color: "red" }}>{errors.password}</small>
          ) : null}
        </div>
        <div className="form-group mt-4">
          <button className="btn btn-primary btn-block" type="submit">
            Sign In
          </button>
        </div>
        <Link to="/forgot-password" className="forgot">
          Forgot your email or password?
        </Link>

        <Link to={"/signup"} className="signIn_SignUp">
          Don't have an account? <span>Sign Up</span>
        </Link>
      </form>
    </div>
  );
};

export default Signin;
