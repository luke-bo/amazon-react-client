import React from "react";

export const ProductDetails = props => {
  return (
    <section>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <small>{props.price}</small>
      <br/>
      Seller: {props.seller.full_name}
      <br/>
      <br/>
      Posted on: {props.created_at}
    </section>
  );
};