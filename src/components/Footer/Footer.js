import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  // Styles 
    const socialLinkStyle = {
        display: 'inline-block',
        border: '1px solid transparent',
        height: '35px',
        width: '35px',
        color: '#fff',
        lineHeight: '35px',
        textAlign: 'center',
        fontSize: '16px',
        transition: 'all 0.5s ease',
        borderRadius: '50%',
    }
    const quickLinkStyle = {
        color: 'white',
        padding: '8px 0',
        textTransform: 'capitalize',
        fontSize: '16px',
        textDecoration: 'none'
    }
    return (
      <div>
        <div className="row mx-auto bg-color-1 text-light p-4">
          {/* About Us  */}
          <div className="col-md-3 footer-item w-25 px-5">
            <h2>About us</h2>
            <p className="text-capitalize text-left">
              Aimers is an online learning platform which will give you the best teacher's classes among the country.
            </p>
            {/* Social Icons  */}
            <div className="mt-3">
              <Link style={socialLinkStyle} to="#">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link style={socialLinkStyle} to="#">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link style={socialLinkStyle} to="#">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link style={socialLinkStyle} to="#">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
          {/* Quicklinks  */}
          <div className="col-md-3 footer-item w-25 px-5 quicklinks">
            <h2>Quicklinks</h2>
            <ul>
              <li>
                <Link style={quickLinkStyle} to="/courses">
                  course
                </Link>
              </li>
              <li>
                <Link style={quickLinkStyle} to="/about">
                  about us
                </Link>
              </li>
              <li>
                <Link style={quickLinkStyle} to="/contact">
                  contact us
                </Link>
              </li>
              <li>
                <Link style={quickLinkStyle} to="/login">
                  login
                </Link>
              </li>
             
            </ul>
          </div>
          {/* Contact Us  */}
          <div className="col-md-3 footer-item w-25 px-5">
            <h2>Contact us</h2>
            <p>
              <i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh
            </p>
            <p>
              <i className="fas fa-phone"></i> +8801856789856
            </p>
            <p>
              <i className="fas fa-envelope"></i> aimersbd@gmail.com
            </p>
          </div>
          {/* Newsletter  */}
          <div className="col-md-3 footer-item w-25 px-5 newsletter">
            <h2>newsletter</h2>
            <form action="">
              <input
                type="email"
                placeholder="Your E-Mail"
                className="form-control rounded-pill"
              />
              {/* Subscribe Button  */}
              <button className="button rounded-pill" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Footer;