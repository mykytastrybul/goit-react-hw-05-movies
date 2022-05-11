import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { getMovie } from 'utils/moviesApi';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getMovie(movieId).then(res => setMovie(res));
    getMovie(movieId).then(({ genres }) => setGenres(genres));
    // eslint-disable-next-line
  }, [movieId, navigate]);

  return (
    <div className={s.container}>
      <button type="button" className={s.btn} onClick={() => navigate(-1)}>
        Go back
      </button>
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
            <span key={el.id} className={s.genres}>
              {el.name}
            </span>
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

export default MovieDetails;
