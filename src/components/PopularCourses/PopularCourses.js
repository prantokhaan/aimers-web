import React, { useEffect, useState } from 'react';
import PopularCourse from '../PopularCourse/PopularCourse';
import { Link } from "react-router-dom";
import './PopularCourses.css'

const PopularCourses = () => {
    const [popularCourses, setPopularCourses] = useState([]);
    useEffect( () => {
        fetch('./miniCourseData.json')
        .then(res => res.json())
        .then(data => setPopularCourses(data));
    }, [])
    return (
      <div>
        <hr />
        <div className="section-title">
          <h2 className="text-center mb-5 mt-5">
            Popular <span className="color-3">Courses</span>
          </h2>

          <div className="row mb-4">
            {popularCourses.map((popular) => (
              <PopularCourse
                key={popularCourses.key}
                popular={popular}
              ></PopularCourse>
            ))}
          </div>
          <div className="text-end mb-3">
            <Link to="/courses">
              <button className="primary-button text-light p-2 rounded">
                <i className="fas fa-arrow-right"></i> See All Courses
              </button>
            </Link>
          </div>
          <hr />
        </div>
      </div>
    );
};

export default PopularCourses;