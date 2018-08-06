import React, { Component } from 'react';


class Cart extends Component {
  constructor() {
    super();
    this.productDetail =JSON.parse(localStorage.getItem('productDetail')); 
   
    this.state = {
      counter: 1,

    }

  }
    
  _handleChange = (e)=> {
    var value = e.target.value;
    if(value>0) {
    this.setState({counter:value});
    }
  }

  _close() {
    var element= document.getElementById("product-cart");
    element.remove();
    localStorage.clear();
    }

  render() {
    const folder = (productTitle = this.productDetail.productTitle, productBrand = this.productDetail.productBrand, productSex=this.productDetail.productSex) =>{ return ( <div id= "product-cart">
    <div id="product-cart-cancel" onClick={this._close}>
       <img src="icon.svg" alt="cancel icon"/>
    </div>
      <div id="cart-product-image">
        <img src={localStorage.getItem("productImage")} height={50} />
      </div>
      <div id="cart-product-info">
        <div>
          <h6 id="cart-product-title">{productTitle}</h6>
          <h6 id="cart-product-brand">{productBrand}</h6>
          <h6 id="cart-product-sex">{productSex}</h6>
          
        </div>
        <div id="cart-product-Quantity">
          <h6 id="cart-product-counter">Quantity: <input type="number" min='1' max='20' value ={this.state.counter} onChange ={this._handleChange}/> </h6>
          <h6 id="cart-product-price">Rs.{this.productDetail.productPrice * this.state.counter}</h6>
        </div>
      </div>
    </div>);
  }
    return (
    <div id="product">
      {this.productDetail ? folder() : null}
    </div>
    );
  }
}

export default Cart;