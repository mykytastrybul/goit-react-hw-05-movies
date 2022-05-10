import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getSearchMovie } from 'utils/moviesApi';
import s from './MoviesPage.module.css';

getSearchMovie('batman');

const MoviesPage = ({ getMovieId }) => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    getSearchMovie(query).then(res => setMovies(res));
  };

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input type="text" name="query" value={query} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <ul className={s.list}>
        {movies.length > 0 &&
          movies.map(el => {
            return (
              <li key={el.id} className={s.item}>
                <Link
                  to={`/movies/${el.id}`}
                  onClick={() => getMovieId(el.id)}
                  className={s.link}
                >
                  {el.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default MoviesPage;
