import React from 'react';
import './WatchList.css';

const WatchList = (props) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    const {title, poster_path} = props.movie;
    return (
        <div className="watchlist">
            <h6>{title}</h6>
            <img src={imgUrl + poster_path} alt="" />
            <button className="fas fa-play-circle">  Watch Now</button>
        </div>
    );
};

export default WatchList;