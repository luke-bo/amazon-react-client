import React from 'react';
import { ProductDetails } from './ProductDetails';
import { ReviewList } from './ReviewList';
import { product } from '../singleProductSample';

export const ProductShowPage = () => {
  return (
    <>
      <ProductDetails
        title={product.title}
        description={product.description}
        seller={product.seller}
        created_at={product.created_at}
      />
      <ReviewList reviews={product.reviews} />
    </>
  );
};