import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
      </div>
    );
  }
}

export default UserInfo;