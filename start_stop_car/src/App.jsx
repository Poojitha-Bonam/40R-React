import React from "react";
import CarControl from "./components/CarControl";
import InputPreview from "./components/InputPreview";

function App(){
  return <div>
    <h2>Task - 1: Start and Stop Car</h2>
    <CarControl/>

    <h2>Task - 2: Input Box with Live Preview and Submit</h2>
    <InputPreview/>
  </div>
}
export default App;