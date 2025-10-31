import { Component } from "react";

export class EventsComp extends Component {

constructor() {
    super();
    this.state = { text: "" };

    this.showText = this.showText.bind(this);
  }

  showText() {
    this.setState({ text: "You clicked the button" });
  }

  render() {
    return <div>
        <button onClick={this.showText}>Click Me</button>
        <p>{this.state.text}</p>
      </div>
      

    }
}

