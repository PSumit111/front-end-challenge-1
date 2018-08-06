import React, {Component} from 'react';

class ProductDescription extends Component {
   constructor(props) {
       super(props);
       this.state = {
           size: "",
           price: ""
       }
     }

    _clickedItem(sizes){
        
        this.setState({
            size: sizes
        })
        
    }

    _showProduct(products) {
        let product = products;
        let size = this.state.size;
        
        if(size) {
        let productSource = product.sizes[size].sources;
        return productSource.map(source =><option  value={source.discounted_price}>{source.host}(Rs. {source.discounted_price})</option>);
        }
    }

    _handleChange(e) {
        let price= e.target.value;
        this.setState({price: price});
        
    }
    

   render() {
        const product = this.props.product
        const productTitle = product.title;
        const productSex = product.sex;
        const productBrand = product.brand;
        const productPrice = this.state.price;

        var productDetail={
            "productTitle":productTitle,
            "productSex": productSex,
            "productBrand":productBrand,
            "productPrice": productPrice
         
        }

        const listItems = Object.keys(product.sizes).map(size => <li key={size}  onClick={this._clickedItem.bind(this, size)}>{size}</li>);
        
        return(
        <div>   
        <div id="product-title">
          <h5 id="product-price">{productPrice}</h5>
          <h5 id="product-name">{productTitle}</h5>
          <h5 id="product-sex">{productSex}</h5>
        </div> 
        <div id="product-size">
            <label id="product-size-label">Size </label>
            <ul>
            {listItems}
            </ul>
            <div id="product-source">
                <label id="product-source-label">Source </label>
                <select onChange={this._handleChange.bind(this)}>
                <option selected >--Please select--</option>
                {this._showProduct(product)}
                
                </select> <br/><br/>  
                <label>Brand: </label>
                {productBrand}
            </div> 
          </div>   
            <h4 id="product-add-cart" onClick={() => {if(productDetail)localStorage.setItem("productDetail",JSON.stringify(productDetail)); alert("Added to Cart")}}>Add to Cart</h4>
        </div>
        );
    }
}

export default ProductDescription;