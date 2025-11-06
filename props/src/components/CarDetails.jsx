import React, { Component } from "react";

class CarDetails extends Component {
  render() {
    const { brand, model, year } = this.props;
    return (
      <div>
        <p>Car Brand: {brand}</p> {/*also we can write like ( this.props.brand )*/}
        <p>Model: {model}</p>
        <p>Year: {year}</p>
      </div>
    );
  }
}

export default CarDetails;