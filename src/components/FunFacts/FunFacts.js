import React from 'react';
import './FunFacts.css'

const FunFacts = () => {
    return (
      <div>
        <div className="fun-facts text-center my-4">
          <div className="section-title mb-5">
            <h2>
              Our <span className="about-color">Achievements</span>
            </h2>
          </div>
          <div className="d-flex fun-facts-item">
            <div>
              <div className="fun-facts-item-1">
                <h3>5k</h3>
                <p>finished session</p>
              </div>
              <div className="fun-facts-item-2">
                <h3>50k</h3>
                <p>enrolled students</p>
              </div>
            </div>

            <div>
              <div className="fun-facts-item-3">
                <h3>20+</h3>
                <p>total courses</p>
              </div>
              <div className="fun-facts-item-4">
                <h3>95%</h3>
                <p>satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FunFacts;