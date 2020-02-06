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

  deleteReview(id) {
    this.setState({product: {
      // reminder: the spread operator is iterating over the 
      // keys of the passed object and assigning matching values
      // id: this.state.product.id
      // title: this.state.product.title, etc.
      // the ...this.state.product line will have also included
      // reviews: this.state.product.reviews. We use the re-define reviews
      // below with a new array of reviews that excludes the deleted product
      ...this.state.product,
      reviews: this.state.product.reviews.filter(r => r.id !== id)
      }
    });
  }

  render() {
    return (
      <>
        <ProductDetails
          title={this.state.product.title}
          description={this.state.product.description}
          seller={this.state.product.seller}
          price={this.state.product.price}
          created_at={this.state.product.created_at}
        />
        <ReviewList 
          reviews={this.state.product.reviews} 
          onDeleteReviewClick={id => this.deleteReview(id)}
        />
      </>
    );
  }

}

