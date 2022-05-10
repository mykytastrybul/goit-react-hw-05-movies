import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrending } from 'utils/moviesApi';
import s from './HomePage.module.css';

const HomePage = ({ getMovieId }) => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrending().then(res => setTrendings([...res]));
  }, []);

  return (
    <div>
      <h2 className={s.title}>Trending today</h2>
      <ul className={s.list}>
        {trendings.map(el => {
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
    </div>
  );
};

export default HomePage;
