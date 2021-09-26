import React, { useEffect, useState } from 'react';
import Download from '../Download/Download';
import Movie from '../Movie/Movie';
import './Movies.css'

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [watch, setWatch] = useState([]);

    useEffect( () => {
        fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1cf50e6248dc270629e802686245c2c8')
        .then(res => res.json())
        .then(data => setMovies(data.results));
    }, []);

    const handleWatch = (movie) => {
        const newWatch = [...watch, movie];
        setWatch(newWatch)
    }
    

    return (
        <div className="movies-container">
            <div className="movie-container">
                {
                    movies.map(movie => <Movie 
                    key={movie.id}
                    movie={movie}
                    handleWatch={handleWatch}
                    ></Movie>)
                }
            </div>
            <div className="download-container">
                <Download watch={watch}></Download>
            </div>
        </div>
    );
};

export default Movies;