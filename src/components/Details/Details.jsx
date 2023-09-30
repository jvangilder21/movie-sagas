import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './MovieList.css'

// import Button from '@mui/material/Button';
import { useParams, useHistory } from 'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    const history = useHistory();

    const movie = useSelector(store => store.movies);

    const thisID = useParams();
    console.log('calling this ID', thisID);

    const thisMovie = movie.find(
        (movie) => movie.id === Number(thisID.id)
    );

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const home = (event) => {
        history.push('/')
        }

    return (
        <main>
            <div>
            <h1>Movie Details</h1>

            <h1>{thisMovie.title}</h1>
            <img src={thisMovie.poster} alt={thisMovie.title}/>
            <h2>{thisMovie.description}</h2>
            </div>

            <button 
                    variant='contained'
                    onClick={home}
                    >HOME</button>

        </main>

        

    );
}

export default Details;