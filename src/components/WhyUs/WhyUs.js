import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    return (
      <div>
        <div className="why-us container text-center my-4">
          <div className="section-title">
            <h2 className="mb-5">
              <span className="about-color">Why</span> Us
            </h2>
          </div>
          <div className="d-flex">
            <div className="why-us-item">
              <div className="icon">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <h3 className="mb-4">experience trainers</h3>
              <p>
                We have some great teachers. Some Students says, they were the
                real hero behind their success. Our Teachers are well trained
                and they have so much experience in this field.
              </p>
            </div>
            <div className="why-us-item">
              <div className="icon">
                <i className="fas fa-laptop"></i>
              </div>
              <h3 className="mb-4">Exams</h3>
              <p>
                Some organization will give you video classes. But we will give
                you enough support from our side. After the class you have to
                attend the exam. Otherwise, you will not be eligible to attend
                the next class. We take also, weekly and monthly test.
              </p>
            </div>
            <div className="why-us-item">
              <div className="icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3 className="mb-4">certification</h3>
              <p>
                After completing the classes and attend the exams, your will be
                awarded certificate based on your mark. This marks will help you
                to motivate or boost you. You will compete with yourself.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhyUs;