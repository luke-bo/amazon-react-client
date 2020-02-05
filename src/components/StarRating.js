import React from 'react';
import { Star } from './Star';

export const StarRating = (props) => {
  const {max, rating} = props;
  const starRating = Array.from(new Array(max));

  starRating.map((ele, i) => {
    if (i < rating) {
      starRating[i] = <Star style={{color:'gold', height: '1rem'}}/>
    } else {
      starRating[i] = <Star style={{color:'grey', height: '1rem'}}/>
    }
  });

  return (
    <div>
      {starRating} 
    </div>
  );
}