// src/main.jsx (ACTUALIZADO)
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/inter'
import '@fontsource/amatic-sc'
import '@fontsource/ibm-plex-sans'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AchievementsProvider } from './context/AchievementsContext.jsx'
import './styles/themes.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <AchievementsProvider>
          <App />
        </AchievementsProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)