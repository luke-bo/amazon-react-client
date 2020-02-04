import React from "react";

export const ReviewDetails = props => {
  return (
    <section>
      <h1>{props.rating}</h1>
      <p>{props.body}</p>
      <br/>
      Seller: {props.reviewer}
      <br/>
      <br/>
      Posted on: {props.created_at}
    </section>
  );
};