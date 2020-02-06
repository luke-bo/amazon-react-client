import React from "react";
import { ReviewDetails } from "./ReviewDetails";

export const ReviewList = props => {
  return (
    <ul>
      {props.reviews.map(review => (
        <ReviewDetails
          key={review.id}
          {...review}
          id={review.id}
          body={review.body}
          reviewer={review.reviewer}
          created_at={new Date(review.created_at).toLocaleString()}
          // created_at={review.created_at} This also works. I'm not sure why we used the new Date constructor above.
          rating={review.rating}
          onDeleteReviewClick={props.onDeleteReviewClick}
        />
      ))}
    </ul>
  );
};