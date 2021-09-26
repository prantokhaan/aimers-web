import React from 'react';
import Rating from 'react-rating';
import './Movie.css';


const Movie = (props) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    const {title, poster_path, overview, release_date, original_language, vote_count, popularity, vote_average} = props.movie;
   
    // const url = 'https://api.themoviedb.org/3/search/movie?api_key=1cf50e6248dc270629e802686245c2c8&query=kate';
    
    return (
        <div className="movie">
            <div>
                <img src={imgUrl + poster_path} alt="" />
            </div>
            <div className="movie-info">
                <h2 className="title">{title}</h2>
                <p><small><i>{overview}</i></small></p>
                <h5>Language: <b className="color-primary text-uppercase">{original_language}</b></h5>
                <h5>Release Date: <b className="color-primary">{release_date}</b></h5>
                <h5>Total Voted: <b className="color-primary">{vote_count}</b></h5>
                <h5>Total Downloaded: <b className="color-primary">{popularity.toFixed()}</b></h5>
                <Rating
                initialRating={vote_average}
                emptySymbol="far fa-star icon-color"
                fullSymbol="fas fa-star icon-color"
                readonly
                stop={10}
                >    
                </Rating> <br /> <br />
                <button className="button far fa-bookmark" 
                 onClick={() => props.handleWatch(props.movie)}
                >  Add to Watch List</button>
                <button className="button far fas fa-cloud-download-alt">  Download</button>
            </div>
        </div>
    );
};

export default Movie;