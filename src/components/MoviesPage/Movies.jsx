import MoviesList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSearchMovie } from 'utils/moviesApi';

getSearchMovie('batman');

const Movies = ({ getMovieId }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate({ search: `q=${query}` });
    getSearchMovie(query).then(res => setMovies(res));
  };

  return (
    <>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
      />
      <MoviesList movies={movies} getMovieId={getMovieId} />
    </>
  );
};

export default Movies;
