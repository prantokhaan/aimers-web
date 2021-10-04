import React from 'react';
import './Home.css'
import img from '../../images/image.svg';

const Home = () => {
    return (
      <div className="container">
        <div className="row gx-5">
          <div className="col-md-6 p-0">
            <img src={img} alt="" width="600px" height="520px" />
          </div>
          <div className="col-md-6 text-center mt-5 pt-5">
            <h2 className="mb-5 color-1 text-uppercase">
              Dreaming of <b className="color-3">public</b> Varsity?
            </h2>
            <h6 className="lh-lg color-4">
              Convert your Dream to Aim and focus on your aim. We prepared a
              very useful course for you. You can complete this from home. Here
              you can learn what you need and get opportunities to participate
              in exams. You will get 24/7 support from us. <br />
              Let's Crack it together.
            </h6>
            <button className="primary-button px-3 py-2 text-bolder text-light mt-4 rounded-pill">
              <i class="fas fa-play"></i> Start the Tour
            </button>
          </div>
        </div>
      </div>
      
    );
};

export default Home;