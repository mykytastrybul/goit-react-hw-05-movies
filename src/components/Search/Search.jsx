import React from 'react';
import s from './Search.module.css';

const Search = ({ handleChange, handleSubmit, query }) => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input type="text" name="query" value={query} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
