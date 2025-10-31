import React, { Component } from "react";

class CarControl extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };

    // Binding methods
    this.startCar = this.startCar.bind(this);
    this.stopCar = this.stopCar.bind(this);
  }

  startCar() {
    this.setState({ message: "Car is started" });
  }

  stopCar() {
    this.setState({ message: "Car is stopped" });
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button onClick={this.startCar}>Start Car</button>
        <button onClick={this.stopCar} style={{ marginLeft: "10px" }}>
          Stop Car
        </button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default CarControl;
