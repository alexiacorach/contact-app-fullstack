
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Contacts from './pages/Contacts'
import About from './pages/About'


function AppRoutes() {

  return (
    <Router>
      <Routes>

        <Route path = "/" element={<Home />} />
        <Route path = "/contact" element={<Contacts />} />
        <Route path = "/about" element={<About />} />
        
      </Routes>

    </Router>
  
  
  
  
  )
}

export default AppRoutes