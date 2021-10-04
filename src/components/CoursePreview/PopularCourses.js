import React, { useEffect, useState } from 'react';
import PopularCourse from '../PopularCourse/PopularCourse';
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
            <button className="primary-button text-light">
              See All
            </button>
          </div>
          <hr />
        </div>
      </div>
    );
};

export default PopularCourses;