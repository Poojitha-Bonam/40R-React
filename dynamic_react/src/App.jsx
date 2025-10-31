import { Component } from "react";
import { EventsComp }  from "./components/Dynamic";
class App extends Component {
  render(){
    return <>
      <h1>App component</h1>
      <EventsComp /> {/* call by using class name or function name */ }
    </>
  }
}

export default App