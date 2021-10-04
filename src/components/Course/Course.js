import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Course = (props) => {
    // Destructuring 
    const { name, lectures, price, img, rating, totalTime, mentor, forPrep } =
      props.course;
    return (
      // Course Section 
      <div className="course-item col-md-3 border px-3 pt-3">
        {/* Course Image and Price  */}
        <div className="course-img overflow-hidden rounded-3 transition">
          <img src={img} alt="" width="100%" />
          <div className="course-price">{price}$</div>
        </div>
        {/* Course Info  */}
        <div className="course-info pt-3 pb-0">
          <ul className="d-flex unlist">
            <li className="ms-3 me-3">
              <b>{lectures} lectures</b>
            </li>
            {/* React Rating  */}
            <li>
              <Rating
                emptySymbol={<i className="far fa-star"></i>}
                fullSymbol={<i className="fas fa-star"></i>}
                initialRating={rating}
                readonly
              ></Rating>
            </li>
          </ul>
          <p className="text-center">
            Total: <b className="color-4">{totalTime}</b> minutes by{" "}
            <b className="color-4">{mentor}</b>
          </p>
          <h4 className="text-capitalize text-center color-3">{name}</h4>
          <p className="color-4 text-center mt-3">{forPrep}</p>
          <div className="text-center">
            {/* Enroll Button  */}
            <Link to="/enroll">
              <button className="primary-button text-light rounded pill  py-1 px-2 mb-3  fs-6 transition">
                <i className="fas fa-user-graduate"></i> Enroll Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Course;