import React from 'react';
import { Link } from 'react-router-dom';
import s from './MoviesList.module.css';

const MoviesList = ({ movies, getMovieId }) => {
  return (
    <ul className={s.list}>
      {movies.map(el => {
        return (
          <li key={el.id}>
            <Link
              className={s.link}
              to={`/movies/${el.id}`}
              onClick={() => {
                getMovieId(el.id);
              }}
            >
              {el.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MoviesList;
