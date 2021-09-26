import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Movie <span className="second-part">Links</span></h1>
            <nav className="d-flex">
                <div className="nav-links">
                    <a href="/home">Home</a>
                    <a href="/movies">Movies</a>
                    <a href="/webSeries">Web Series</a>
                    <a href="/tvShows">TV Shows</a>
                </div>
                <div className="search">
                    
                        <input type="text" 
                        
                        placeholder="search movie..." />
                    
                        <button className="search-button">Search</button>
                    
                </div>
            </nav>
        </div>
    );
};

export default Header;