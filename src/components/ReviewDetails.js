import React from "react";

export const ReviewDetails = props => {
  return (
    <section>
      <h4>Rating: {props.rating}</h4>
      <p>{props.body}</p>
      <br/>
      Seller: {props.reviewer.full_name}
      <br/>
      <br/>
      Posted on: {props.created_at}
    </section>
  );
};