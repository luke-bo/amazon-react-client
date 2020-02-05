import React, { Component } from 'react';
import { productsSample } from '../productsSample';

export class ProductIndexPage extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      products: [...productsSample]
    };
  }

  render() {
    return (
      <main>
        <h2>Products</h2>
        <ul>
          {this.state.products.map(product => (
            <li key={product.id}>
              <a href="">
                {product.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}