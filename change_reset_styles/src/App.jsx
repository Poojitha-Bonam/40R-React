import { Component } from "react"
import StyleChanger from "./components/StyleChanger"
import NameForm from "./components/NameForm"

class App extends Component {
  render(){
    return <>
      <h1>Change and Reset Styles</h1>
      <StyleChanger/>
      <h1>Combine First and Last Name</h1>
      <NameForm/>
    </>
  }
}
export default App
