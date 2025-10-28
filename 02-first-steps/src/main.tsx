import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FirstStepAppfrom from './FirstStepsApp';
// import MyAwesomeApp from './MyAwesomeApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FirstStepAppfrom />
    {/* <MyAwesomeApp/>   */}
  </StrictMode>,
)
