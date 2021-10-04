import React from 'react';
import './Home.css'
import img from '../../images/image.svg';
import { Link } from 'react-router-dom';
import PopularCourses from '../PopularCourses/PopularCourses';

const Home = () => {
    return (
      <div className="container">
        <div className="row gx-5">
          <div className="col-md-6 p-0">
            <img src={img} alt="" width="600px" height="520px" />
          </div>
          <div className="section-title col-md-6 text-center mt-5 pt-5">
            <h2 className="mb-5 color-1 text-uppercase fw-bold">
              Dreaming of{" "}
              <span>
                <b className="color-3">public</b>
              </span>{" "}
              Varsity?
            </h2>
            <h6 className="lh-lg color-4">
              Convert your Dream to Aim and focus on your aim. We prepared a
              very useful course for you. You can complete this from home. Here
              you can learn what you need and get opportunities to participate
              in exams. You will get 24/7 support from us. <br />
              Let's Crack it together.
            </h6>
            <Link to="/courses">
              <button className="primary-button px-3 py-2 text-bolder text-light mt-4 rounded-pill">
                <i className="fas fa-play"></i> Start the Tour
              </button>
            </Link>
          </div>
        </div>
        <PopularCourses />
      </div>
    );
};

export default Home;