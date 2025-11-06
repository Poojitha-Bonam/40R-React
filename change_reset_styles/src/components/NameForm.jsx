import React, { Component } from "react";

class NameForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      result: ""
    };
  }

  // Arrow functions to handle events
  handleFirstChange = (event) => {
    this.setState({ firstName: event.target.value });
  };

  handleLastChange = (event) => {
    this.setState({ lastName: event.target.value });
  };

  handleSubmit = () => {
    const { firstName, lastName } = this.state;
    this.setState({ result: `${firstName} ${lastName}` });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            First Name:{" "}
            <input
              type="text"
              value={this.state.firstName}
              onChange={this.handleFirstChange}
              style={{ padding: "5px", marginLeft: "5px" }}
            />
          </label>
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>
            Last Name:{" "}
            <input
              type="text"
              value={this.state.lastName}
              onChange={this.handleLastChange}
              style={{ padding: "5px", marginLeft: "5px" }}
            />
          </label>
        </div>

        <button
          onClick={this.handleSubmit}
          style={{
            padding: "5px 15px",
            cursor: "pointer",
            backgroundColor: "lightblue",
            border: "1px solid gray",
            borderRadius: "4px"
          }}
        >
          Submit
        </button>

        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          Result: {this.state.result}
        </p>
      </div>
    );
  }
}

export default NameForm;
