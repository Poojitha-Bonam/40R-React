import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import {Helloworld} from './App.jsx'  // for named component


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Helloworld/> */}
  </StrictMode>,
)
