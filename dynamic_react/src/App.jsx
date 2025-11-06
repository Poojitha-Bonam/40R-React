import { Component } from "react";
import { EventsComp }  from "./components/Dynamic";
import { Dynamic2Comp } from "./components/dynamic2";
import {Calculator} from "./components/dynamic2";
class App extends Component {
  render(){
    return <>
      <h1>App component</h1>
      <EventsComp /> {/* call by using class name or function name */ }
      <Dynamic2Comp/>
      <Calculator/>
    </>
  }
}

export default App