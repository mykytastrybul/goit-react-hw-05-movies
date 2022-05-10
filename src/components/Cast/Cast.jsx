import React, { useEffect, useState } from 'react';
import { getMovieCast } from 'utils/moviesApi';
import s from './Cast.module.css';

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(res => setCast([...res]));
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ul className={s.list}>
        {cast.map(el => {
          return (
            <li key={el.id} className={s.item}>
              <p>{el.name}</p>
              <p>{el.character}</p>
              <img
                src={
                  el['profile_path']
                    ? `https://image.tmdb.org/t/p/w500${el['profile_path']}`
                    : ''
                }
                alt=""
                width="50px"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
