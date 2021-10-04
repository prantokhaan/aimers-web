import React from 'react';
import sendSuccessImg from '../../images/Contact us-pana.svg';

const SendSuccess = () => {
    return (
        <div>
            <div className="text-center">
                <img src={sendSuccessImg} alt="" width="500px"/>
            </div>
            <h4 className="text-center mb-5 color-4">We will contact you soon !</h4>
        </div>
    );
};

export default SendSuccess;