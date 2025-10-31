import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Reactdeveloper from './Reactdeveloper.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reactdeveloper/>
  </StrictMode>,
)
