import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { DataProvider } from './context/DataContext.jsx'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider>
      <DataProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
      </DataProvider>
    </PrimeReactProvider>
  </StrictMode>,
)
