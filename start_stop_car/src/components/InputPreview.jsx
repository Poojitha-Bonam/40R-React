import React, { Component } from "react";

class InputPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      finalText: ""
    };

    // Binding methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit() {
    this.setState({ finalText: this.state.text });
  }

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <label>
          Enter Text:{" "}
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <p>Preview: {this.state.text}</p>
        <button onClick={this.handleSubmit}>Submit</button>

        {this.state.finalText && (
          <div style={{ marginTop: "20px" }}>
            <h1>{this.state.finalText}</h1>
          </div>
        )}
      </div>
    );
  }
}

export default InputPreview;
