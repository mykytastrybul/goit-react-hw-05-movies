import { lazy, useState, Suspense } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import s from './App.module.css';
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
const HomePage = lazy(() => import('./HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('./MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  const [movieId, setMovieId] = useState('');

  const getMovieId = id => {
    setMovieId(id);
  };

  return (
    <div className={s.appBody}>
      <div className={s.container}>
        <NavLink
          to="/"
          className={s.link}
          style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={s.link}
          style={({ isActive }) => (isActive ? { color: 'red' } : undefined)}
        >
          Movies
        </NavLink>
      </div>
      <Suspense fallback={<p className={s.loader}>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage getMovieId={getMovieId} />} />
          <Route
            path="/movies"
            element={<MoviesPage getMovieId={getMovieId} />}
            exact
          />
          <Route
            path={`/movies/${movieId}/*`}
            element={<MovieDetailsPage movieId={movieId} />}
          >
            <Route path="cast" element={<Cast movieId={movieId} />} />
            <Route path="reviews" element={<Reviews movieId={movieId} />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
