import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="text-center bg-color-1 w-50 container">
        <div className="mb-3 mt-5 py-5">
          <h4 className="color-4 mb-4">Please Login</h4>
          {/* Email Form  */}
          <input
            type="email"
            className="form-control w-50 text-center mx-auto"
            placeholder="your e-mail address"
          />
          {/* Password Form  */}
          <input
            type="password"
            className="form-control w-50 text-center mx-auto my-3"
            placeholder="your password"
          />
          {/* Login Button  */}
          <Link className="text-center" to="/home">
            <button className="login-button ms-0 w-50 py-2  rounded-pill text-light transition">
            Login
            </button>
          </Link>
        </div>
        <div className="mb-3"></div>
      </div>
    );
};

export default Login;