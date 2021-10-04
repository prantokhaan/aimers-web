import React from 'react';
import './Contact.css';
import contactImg from '../../images/Call center-cuate.svg';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
      <div>
        <div className="container d-flex">
          <div className="contact-img">
            <img src={contactImg} alt="" width="600px" />
          </div>
          <div className="contact-form w-100 text-capitalize mt-5 ms-5 p-5">
            <form>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="name"
                  className="form-control mb-2"
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="e-mail"
                  className="form-control mb-2"
                />
              </div>
              <div className="input-group">
                <input
                  type="number"
                  placeholder="phone"
                  className="form-control mb-2"
                />
              </div>
              <div class="input-group">
                <textarea
                  placeholder="message"
                  className="form-control mb-2"
                ></textarea>
              </div>
              <Link to="/send">
                <button className="primary-button mt-3 rounded-pill py-1 px-4 w-100 text-light">
                  Send
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Contact;