import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { userName } = this.props;
    return <h2>Welcome, {userName}</h2>;
  }
}

export default Welcome;