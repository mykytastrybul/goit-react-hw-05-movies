import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'utils/moviesApi';
import s from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(res => setCast([...res]));
    // eslint-disable-next-line
  }, []);

  if (cast.length > 0) {
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
  } else {
    return <p>No cast</p>;
  }
};

export default Cast;
