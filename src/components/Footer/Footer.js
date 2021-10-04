import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
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
        <div class="row mx-auto bg-color-1 text-light p-4">
          <div class="col-md-3 footer-item w-25 px-5">
            <h2>About us</h2>
            <p className="text-capitalize text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              velit lacus, consectetur maximus gravida vel, convallis quis
              velit.{" "}
            </p>
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
          <div className="col-md-3 footer-item w-25 px-5 quicklinks">
            <h2>Quicklinks</h2>
            <ul>
              <li>
                <Link style={quickLinkStyle} to="#">
                  course
                </Link>
              </li>
              <li>
                <Link style={quickLinkStyle} to="#">
                  story
                </Link>
              </li>
              <li>
                <Link style={quickLinkStyle} to="#">
                  blog
                </Link>
              </li>
              <li>
                <Link style={quickLinkStyle} to="#">
                  login
                </Link>
              </li>
             
            </ul>
          </div>
          <div className="col-md-3 footer-item w-25 px-5">
            <h2>Contact us</h2>
            <p>
              <i className="fas fa-map-marker-alt"></i> MukundaBari, Jamalpur Sadar
            </p>
            <p>
              <i className="fas fa-phone"></i> +8801879597656
            </p>
            <p>
              <i className="fas fa-envelope"></i> prantokhaan@gmail.com
            </p>
          </div>
          <div className="col-md-3 footer-item w-25 px-5 newsletter">
            <h2>newsletter</h2>
            <form action="">
              <input
                type="email"
                placeholder="Your E-Mail"
                className="form-control rounded-pill"
              />
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