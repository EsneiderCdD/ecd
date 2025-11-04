// src/App.jsx (ACTUALIZADO)
import AppRouter from './routes/AppRouter'
import NotificationManager from './components/Achievements/NotificationManager'
import './App.css'

function App() {
  return (
    <>
      <AppRouter />
      <NotificationManager />
    </>
  )
}

export default App