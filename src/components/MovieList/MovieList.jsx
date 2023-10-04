import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css';
import { useHistory } from 'react-router-dom';


function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    // const handleClick = (movieId) => {
    //     history.push(`/details`)
    // }

    const handleClick = (movieId) => {
        history.push(`/details/${movieId}`)
    }

    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} className="movie-card" onClick={(() => handleClick(movie.id))}>
                            <h3>{movie.title}</h3>
                            <br/>
                            <br/>
                            <img src={movie.poster} alt={movie.title}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;