import React, { Component } from 'react';
import { ProductDetails } from './ProductDetails';
import { ReviewList } from './ReviewList';
import { singleProductSample } from '../singleProductSample';

export class ProductShowPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: singleProductSample
    };
  }

  render() {
    return (
      <>
        <ProductDetails
          title={this.state.product.title}
          description={this.state.product.description}
          seller={this.state.product.seller}
          created_at={this.state.product.created_at}
        />
        <ReviewList reviews={this.state.product.reviews} />
      </>
    );
  }

}

