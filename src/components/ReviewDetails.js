import React from "react";
import { StarRating } from "./StarRating";

export const ReviewDetails = props => {
  return (
    <section>
      <h4>Rating: {props.rating}</h4>
      <StarRating max={5} rating={props.rating} />
      <p>{props.body}</p>
      <br/>
      Seller: {props.reviewer.full_name}
      <br/>
      <br/>
      Posted on: {props.created_at}
    </section>
  );
};