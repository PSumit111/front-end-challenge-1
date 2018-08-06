import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import Product from "./Product.js"
import Cart from './Cart';
import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <div id="product-link">
          <h2 id="product-link-home">
            <NavLink to="/" exact strict activeStyle={{color:'green'}}>Home</NavLink>
          </h2>
          <h2 id="product-link-cart">
            <NavLink to="/cart"  exact strict activeStyle={{color:'green'}}>Cart </NavLink>     
          </h2>
            <Route path="/" exact component={Product}/>
            <Route path="/cart" component={Cart}/>
          </div>
        </Router>   
    );
  }
}

export default App;