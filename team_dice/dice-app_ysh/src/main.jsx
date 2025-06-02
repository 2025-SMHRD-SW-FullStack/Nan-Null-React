import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DiceGame2 from './DiceGame2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DiceGame2 />
  </StrictMode>,
)
