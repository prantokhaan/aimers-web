import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('./courseData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);
    return (
      <div className="container">
        <div className="section-title">
          <h2 className="text-center mb-5 mt-5">
            All <span className="color-3">Courses</span>
          </h2>

          <div className="row mb-4">
            {courses.map((course) => (
              <Course key={courses.key} course={course}></Course>
            ))}
          </div>
          <div className="text-end mb-3">
            <Link to="/home">
              <button className="primary-button text-light p-2 rounded">
                <i className="fas fa-arrow-left"></i> Go Back
              </button>
            </Link>
          </div>
          <hr />
        </div>
      </div>
    );
};

export default Courses;