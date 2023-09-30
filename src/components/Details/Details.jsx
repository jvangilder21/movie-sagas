import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './MovieList.css'

// import Button from '@mui/material/Button';
import { useParams, useHistory } from 'react-router-dom';

function Details() {

    const dispatch = useDispatch();
    const history = useHistory();

    const movie = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);
    console.log('These are our genres store', genres);
    // console.log('Trying to get just genres', genres.genre_id);

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
    .filter(genres => genres.movie_id === Number(thisID.id))
    .map(genres => genres.genre_name);

    const home = (event) => {
        history.push('/')
        }

        // console.log('log genres:', thisMovie.genre);

    return (
        <main>
            <div>
            <h1>Movie Details</h1>

            <h1>{thisMovie.title}</h1>
            <img src={thisMovie.poster} alt={thisMovie.title}/>
            <h2>{thisMovie.description}</h2>
            <h1>Genres</h1>
            
            {/* <h3>
                {genres.map((genre) => (
                    <li key={genre.id}>{genre.genre_name}</li>
                ))}
            </h3> */}
            <h3>{genreNames.join(', ')}</h3>
            
            </div>
            
            <button 
                    variant='contained'
                    onClick={home}
                    >HOME</button>

        </main>

        

    );
}

export default Details;