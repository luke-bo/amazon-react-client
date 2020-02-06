import React from "react";
import { StarRating } from "./StarRating";

export const ReviewDetails = props => {
  return (
    <section>
      <StarRating max={5} rating={props.rating} />
      <p>{props.body}</p>
      <br/>
      Seller: {props.reviewer.full_name}
      <br/>
      <br/>
      Posted on: {props.created_at}
      <button onClick={() => props.onDeleteReviewClick(props.id)}>Delete</button>
    </section>
  );
};