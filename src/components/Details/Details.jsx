import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Details.css';

import Button from '@mui/material/Button';
import { useParams, useHistory } from 'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    const history = useHistory();

    const movie = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    console.log('These are our genres store', genres);

    const thisID = useParams();
    console.log('calling this ID', thisID);

    const thisMovie = movie.find(
        (movie) => movie.id === Number(thisID.id)
        
    );

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    const genreNames = genres
    .filter(genre => genre.movie_id === Number(thisID.id))
    .map(genre => genre.genre_name);

    const home = (event) => {
        history.push('/')
        }


    return (
        <main>
            <div className="details-container">
            <br/>
            <br/>
            <br/>
            <div className="details-movie">
            <h1 className="movie-details-title">Movie Details</h1>

            <h2>{thisMovie.title}</h2>

            <img src={thisMovie.poster} alt={thisMovie.title}/>

            <h4>Genres: {genreNames.join(', ')}</h4>

            </div>
            <h5>{thisMovie.description}</h5>
          
            
            {/* <h3>
                {genres.map((genre) => (
                    <li key={genre.id}>{genre.genre_name}</li>
                ))}
            </h3> */}
            
            
            </div>
            
            <Button 
                    variant='contained'
                    onClick={home}
                    style={{ backgroundColor: 'mediumslateblue' }}
                    >HOME</Button>

            <br/>
            <br/>

        </main>

        

    );
}

export default Details;