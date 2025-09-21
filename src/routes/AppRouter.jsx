import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Home2 from '../pages/About/About'

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home2 />} />
            
        </Routes>
    )
}
export default AppRouter