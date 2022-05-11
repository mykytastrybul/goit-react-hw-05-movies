import MoviesList from 'components/MoviesList/MoviesList';
import React, { useEffect, useState } from 'react';
import { getTrending } from 'utils/moviesApi';
import s from './Trending.module.css';

const Trending = ({ getMovieId }) => {
  const [trendings, setTrendings] = useState([]);

  useEffect(() => {
    getTrending().then(res => setTrendings([...res]));
  }, []);

  return (
    <div>
      <h2 className={s.title}>Trending today</h2>
      <MoviesList movies={trendings} getMovieId={getMovieId} />
    </div>
  );
};

export default Trending;
