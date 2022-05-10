import React, { useEffect, useState } from 'react';
import { getMovieReviews } from 'utils/moviesApi';
import s from './Reviews.module.css';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(res => setReviews([...res]));
    // eslint-disable-next-line
  }, []);

  return (
    <ul className={s.list}>
      {reviews.length > 0
        ? reviews.map(el => {
            return (
              <li key={el.id} className={s.item}>
                <p>{el.author}</p>
                <p>{el.content}</p>
              </li>
            );
          })
        : 'No reviews =-('}
    </ul>
  );
};

export default Reviews;
