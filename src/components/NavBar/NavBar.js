import Button from '@restart/ui/esm/Button';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    const navLinkStyle = {
      textDecoration: "none",
      color: "white",
      margin: "10px",
      padding: "10px 0",
      fontSize: "16px",
    };
    return (
      <div>
        <nav className="navbar bg-color-2 fixed z-index-99">
          <div className="d-flex container-fluid">
            <div className="ms-5 text-uppercase">
              <h3 className="text-white logo ms-5 ps-5">
                aim
                <span className="color-4">
                  <b>&#398;</b>
                </span>
                rs
              </h3>
            </div>
            <div className="me-5 pe-5 navbar">
              <NavLink style={navLinkStyle} to="/home">
                Home
              </NavLink>
              <NavLink style={navLinkStyle} to="/courses">
                Courses
              </NavLink>
              <NavLink style={navLinkStyle} to="/about">
                About Us
              </NavLink>
              <NavLink style={navLinkStyle} to="/contact">
                Contact Us
              </NavLink>
              <NavLink to="/login">
                <button className="login-button">Login</button>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default NavBar;