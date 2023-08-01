import React from 'react'
import IsNotAuthenticate from '../../redirect/IsNotAuthenticate';

const ForgotPass = () => {
  return (
    <IsNotAuthenticate>
      <div className="login-dark">
        <form method="post" className='container'>
          <h2 className="sr-only">Forgot <span>Password</span></h2>

          <div className="form-group mt-4">
            <input
              autoComplete="off"
              className="form-control"
              type="number"
              name="phone"
              placeholder="Phone"
            />
          </div>
          <div className="form-group mt-2">
            <input
              autoComplete="off"
              className="form-control"
              type="password"
              name="newpassword"
              placeholder="New Password"
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

            <button className='btn btn-primary'>OTP</button>
          </div>
          <div className="form-group mt-4">
            <button className="btn btn-primary btn-block" type="submit">
              Update
            </button>
          </div>

        </form>
      </div>
    </IsNotAuthenticate>
  );

}

export default ForgotPass