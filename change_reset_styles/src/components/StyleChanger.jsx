import React, { Component } from "react";

class StyleChanger extends Component {
  constructor() {
    super();
    this.state = {
      styleApplied: false
    };
  }

  // Arrow functions automatically bind "this"
  applyStyle = () => {
    this.setState({ styleApplied: true });
  };

  resetStyle = () => {
    this.setState({ styleApplied: false });
  };

  render() {
    const textStyle = this.state.styleApplied
      ? {
          backgroundColor: "lightgreen",
          margin:"10px",
          color: "red",
          fontStyle: "italic",
          textDecoration: "underline",
          padding: "10px",
          borderRadius: "5px",
          display: "inline-block"
        }
      : {
          backgroundColor: "white",
          color: "black",
          padding: "10px",
          borderRadius: "5px",
          display: "inline-block"
        };

    return (
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={this.applyStyle}
          style={{ marginRight: "10px", padding: "5px 10px", cursor: "pointer" }}
        >
          Apply Style
        </button>
        <button
          onClick={this.resetStyle}
          style={{ padding: "5px 10px", cursor: "pointer" }}
        >
          Reset Style
        </button>

        <p style={{ marginTop: "20px", ...textStyle }}>
          This is a sample text.
        </p>
      </div>
    );
  }
}

export default StyleChanger;
