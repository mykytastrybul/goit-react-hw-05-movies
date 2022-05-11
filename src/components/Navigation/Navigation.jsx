import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  return (
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
  );
};

export default Navigation;
