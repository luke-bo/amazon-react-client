import React, { Component } from 'react';
import { productsSample } from '../productsSample';

export class ProductIndexPage extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      products: [...productsSample]
    };
  }

  deleteProduct(id) {
    this.setState((state, props) => {
      return {
        products: state.products.filter(p => p.id !== id)
      };
    });
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
              <button onClick={() => this.deleteProduct(product.id)} >Delete</button>              
            </li>
          ))}
        </ul>
      </main>
    );
  }
}