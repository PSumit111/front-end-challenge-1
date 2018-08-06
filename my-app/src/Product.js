import React, { Component } from 'react';
import productInfo from './product.json';

import ProductDescription from "./ProductDescription"
import './App.css';


class Product extends Component {
  render() {

    const product = productInfo.product;
    const productImage = product.image;
    localStorage.setItem("productImage", productImage);

    return (
      <div id="product">
        <div id="product-image">
          <img src={productImage} height="300" width="100%" alt="product.jpg" />
        </div>
        
        <ProductDescription product={product}/>
        
      </div>
    );
  }
}

export default Product;