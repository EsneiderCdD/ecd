import AppRouter from './routes/AppRouter'
import NotificationManager from './reusable/Notifications/NotificationManager'

function App() {
  return (
    <>
      <AppRouter />
      <NotificationManager />
    </>
  )
}

export default App