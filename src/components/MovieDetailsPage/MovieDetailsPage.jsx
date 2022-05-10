import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getMovie } from 'utils/moviesApi';
import s from './MovieDetailsPage.module.css';

const MovieDetailsPage = ({ movieId }) => {
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getMovie(movieId).then(res => setMovie(res));
    getMovie(movieId).then(({ genres }) => setGenres(genres));
    // eslint-disable-next-line
  }, []);

  return (
    <div className={s.container}>
      <Link to="/">
        <button type="button" className={s.btn}>
          Go back
        </button>
      </Link>
      <div className={s.movie}>
        <img
          src={
            movie['poster_path']
              ? `https://image.tmdb.org/t/p/w500${movie['poster_path']}`
              : ''
          }
          alt=""
          width="300px"
        />
        <div className={s.descr}>
          <h2>{movie.title}</h2>
          <p>{movie['vote_average']}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          {genres.map(el => (
            <span key={el.id} className={s.genres}>{el.name}</span>
          ))}
        </div>
      </div>
      <div className={s.links}>
        <h2>Additional information</h2>
        <Link to={`/movies/${movieId}/cast`} className={s.link}>
          Cast
        </Link>
        <Link to={`/movies/${movieId}/reviews`} className={s.link}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
