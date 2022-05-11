import Movies from 'components/MoviesPage/Movies';
import React from 'react';

const MoviesPage = ({ getMovieId }) => {
  return <Movies getMovieId={getMovieId} />;
};

export default MoviesPage;
