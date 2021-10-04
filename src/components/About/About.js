import React from 'react';
import { Link } from 'react-router-dom';
import aboutImg from '../../images/Online learning-amico.svg';
import FunFacts from '../FunFacts/FunFacts';
import PopularCourses from '../PopularCourses/PopularCourses';
import WhyUs from '../WhyUs/WhyUs';

const About = () => {
    return (
      // About Us Section 
      <div>
        <div className="my-3 container text-center">
          <div className="section-title text-center mb-3">
            <h2>
              About <span className="about-color">Us</span>
            </h2>
          </div>
          <div className="d-flex">
            <div className="about-img ms-2">
              <img src={aboutImg} alt="" width="500px" />
            </div>
            {/* Info of Aimers  */}
            <div className="mt-5 ms-5 p-2">
              <h4 className="color-1 mb-5">
                <span className="about-color">AIMERS</span> is one of the
                Biggest Online Learning Platform of Bangladesh.
              </h4>
              <h6 className="mt-4 lh-lg color-4">
                Here you can get the best teachers of Bangladesh. You can choose
                your week subject and join that class. In Aimers, you can not
                only attend the classed. You have to give some exam according to
                your enrolled subject or lesson. <br />
                You can also watch your favourite teacher's class here. You can
                take preperatiion of Admission, HSC, SSC etc.
              </h6>
              <Link className="mx-auto" to="/courses">
                <button className="primary-button text-light rounded-pill py-2 px-4 mt-3 mx-auto">
                  Enroll Now
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* Childrens of About Us  */}
        <WhyUs />
        <FunFacts />
        <br />
        <div className="container">
          <PopularCourses />
        </div>
      </div>
    );
};

export default About;