import React from 'react';
import errorImg from '../../images/error.svg';

const NotFound = () => {
    return (
        <div>
            <div className="text-center">
                <img src={errorImg} alt="" width="600px"/>
            </div>
        </div>
    );
};

export default NotFound;