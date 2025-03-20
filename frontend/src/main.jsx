import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { WorkoutContextProvider } from './context/workoutContext.jsx'
import "./index.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WorkoutContextProvider>
      <App/>
    </WorkoutContextProvider>
  </StrictMode>,
)
