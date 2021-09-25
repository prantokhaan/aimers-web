import React from 'react';
import WatchList from '../WatchList/WatchList';
import './Download.css'

const Download = (props) => {
    const {watch} = props;
    let name = '';
    for(const movie of watch){
        name = movie.title;
    }
    return (
        <div>
            <h4 className="text-danger text-center">Your Watch List</h4>
            <p className='text-center'>Movies in Watch List: <b>{props.watch.length}</b></p>
            {
                watch.map(movie => <WatchList movie={movie}></WatchList>)
            }
        </div>
    );
};

export default Download;