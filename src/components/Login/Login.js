import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
      <div className="text-center bg-color-1 w-50 container">
        <div class="mb-3 mt-5 py-5">
          <h4 className="color-4 mb-4">Please Login</h4>
          <input
            type="email"
            className="form-control w-50 text-center mx-auto"
            id="exampleFormControlInput1"
            placeholder="your e-mail address"
          />
          <input
            type="password"
            className="form-control w-50 text-center mx-auto my-3"
            id="exampleFormControlInput1"
            placeholder="your password"
          />
          <Link to="/home">
            <button className="primary-button w-50 py-1 rounded-pill text-light">
              Login
            </button>
          </Link>
        </div>
        <div class="mb-3"></div>
      </div>
    );
};

export default Login;