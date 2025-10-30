import React from "react"

import { MediaFiles } from "./components/Media"

const App=()=>{
  return <>
  <MediaFiles/>

  </>
}
export default App


// // for named component
// export class Helloworld extends React.Component{
//   render(){
//     return <div>
      
//       <h2>Hello world</h2>
//     </div>
//   }
// }


// Only one default export is allowed for one module 
// so to over come this we need to add export keyword for function and import {function_name} from 'file_name' in main.jsx