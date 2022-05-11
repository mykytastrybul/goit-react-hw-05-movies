import Trending from 'components/HomePage/Trending';
import React from 'react';

const HomePage = ({ getMovieId }) => {
  return <Trending getMovieId={getMovieId} />;
};

export default HomePage;
