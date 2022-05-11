import MoviesList from 'components/MoviesList/MoviesList';
import Search from 'components/Search/Search';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getSearchMovie } from 'utils/moviesApi';

getSearchMovie('batman');

const Movies = ({ getMovieId }) => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {
    if (search.length > 0) {
      setQuery(search.slice(3));
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (query.length) {
      navigate({ search: `q=${query}` });
      getSearchMovie(query)
        .then(res => setMovies(res))
        .catch(err => console.log(err));
    }
    // eslint-disable-next-line
  }, [query]);

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
