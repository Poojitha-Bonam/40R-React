import React, { Component } from "react";

class ProductCard extends Component {
  render() {
    const { productName, price, category } = this.props;
    return (
      <div>
        <p>Product: {productName}</p>
        <p>Price: {price}</p>
        <p>Category: {category}</p>
      </div>
    );
  }
}

export default ProductCard;