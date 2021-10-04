import React from 'react';
import Rating from 'react-rating';
import './PopularCourse.css'

const PopularCourse = (props) => {
    const {name, lectures, price, img, rating, totalTime, mentor, forPrep } = props.popular;
    return (
      <div className="course-item col-md-3 border px-3 pt-3">
        <div class="course-img overflow-hidden rounded-3 transition">
          <img src={img} alt="" width="100%" />
          <div class="course-price">{price}$</div>
        </div>
        <div class="course-info pt-3 pb-0">
          <ul className="d-flex unlist">
            <li className="ms-3 me-3">
              <b>{lectures} lectures</b>
            </li>
            <li>
              <Rating
                emptySymbol={<i class="far fa-star"></i>}
                fullSymbol={<i class="fas fa-star"></i>}
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
          <p class="color-4 text-center mt-3">{forPrep}</p>
        </div>
      </div>
    );
};

export default PopularCourse;