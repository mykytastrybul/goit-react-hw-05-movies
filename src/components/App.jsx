import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './App.module.css';
import Navigation from './Navigation/Navigation';
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const HomePage = lazy(() => import('../pages/HomePage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <div className={s.appBody}>
      <Navigation />
      <Suspense fallback={<p className={s.loader}>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} exact />
          <Route path={`/movies/:movieId`} element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
