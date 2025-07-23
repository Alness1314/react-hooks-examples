import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp.jsx'
import { SimpleForm } from './02-useEffect/SimpleForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp/>
    <SimpleForm/>
  </StrictMode>,
)
